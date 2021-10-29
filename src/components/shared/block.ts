import { compile, TemplateDelegate } from 'handlebars';
import { EventBus } from '../../utils';

enum ComponentEvent {
  INIT = 'init',
  FLOW_CDM = 'flow:component-did-mount',
  FLOW_CDU = 'flow:component-did-update',
  FLOW_CDR = 'flow:component-did-render',
  FLOW_RENDER = 'flow:render',
}

export abstract class Block<Props extends Object = Record<string, any>> {
  abstract get className(): string;

  abstract get template(): string;

  protected _element: HTMLElement;

  get element(): HTMLElement {
    return this._element;
  }

  protected compiledTemplate: TemplateDelegate<Props>;

  private _meta: {tagName: string; props: Props; display: 'block' | 'inline-block' | 'inline'};

  protected props: Props;

  private _id: string = `${this.constructor.name}-${Math.random().toString(16).slice(2)}`;

  get id(): string {
    return this._id;
  }

  private eventBus: EventBus<ComponentEvent>;

  constructor(tagName = 'div', props = {} as Props, display: 'block' | 'inline-block' | 'inline' = 'block') {
    this.eventBus = new EventBus<ComponentEvent>();
    this._meta = {
      tagName,
      props,
      display,
    };
    this.props = this._makePropsProxy(props);

    this._registerEvents();
    this.eventBus.emit(ComponentEvent.INIT);
  }

  setProps = (nextProps: Props) => {
    if (!nextProps) {
      return;
    }

    Object.assign(this.props, nextProps);
  };

  show() {
    this._element.style.display = this._meta.display;
  }

  hide() {
    this._element.style.display = 'none';
  }

  getContent() {
    return this.element;
  }

  private _registerEvents() {
    this.eventBus.on(ComponentEvent.INIT, this.init.bind(this));
    this.eventBus.on(ComponentEvent.FLOW_CDM, this._componentDidMount.bind(this));
    this.eventBus.on(ComponentEvent.FLOW_CDU, this._componentDidUpdate.bind(this));
    this.eventBus.on(ComponentEvent.FLOW_RENDER, this.render.bind(this));
    this.eventBus.on(ComponentEvent.FLOW_CDR, this.componentDidRender.bind(this));
  }

  private _createResources() {
    const { tagName } = this._meta;
    this._element = Block._createDocumentElement(tagName);
    this._element.id = this._id;
  }

  private init() {
    this.compiledTemplate = compile<Props>(this.template);
    this._createResources();
    this.eventBus.emit(ComponentEvent.FLOW_CDM);
  }

  private _componentDidMount() {
    this.componentDidMount();
    this.render();
  }

  protected componentDidMount() {}

  private _componentDidUpdate(oldProps: Props, newProps: Props) {
    const response = this.componentDidUpdate(oldProps, newProps);
    if (response) {
      this.render();
    }
  }

  protected componentDidUpdate(oldProps: Props, newProps: Props) {
    return oldProps !== newProps;
  }

  render() {
    const block = this.renderTemplate(this.props);
    this.element.className = this.className;
    this._element.innerHTML = block;
    this.eventBus.emit(ComponentEvent.FLOW_CDR);
  }

  protected componentDidRender() {}

  protected renderTemplate(props: Props): string {
    return this.compiledTemplate(props);
  }

  protected _makePropsProxy(props: Props): Props {
    const propsProxy = new Proxy(props, {
      set: (target: Props, prop: string, newVal: any) => {
        const prev = { ...target };
        // eslint-disable-next-line no-param-reassign
        target[prop as keyof Props] = newVal;
        this.eventBus.emit(ComponentEvent.FLOW_CDU, target, {
          prev,
          target,
        });
        return true;
      },
    });

    return propsProxy as unknown as Props;
  }

  private static _createDocumentElement(tagName: string): HTMLElement {
    return document.createElement(tagName);
  }
}
