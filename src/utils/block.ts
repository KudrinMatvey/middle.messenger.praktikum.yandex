import { v4 as uuid } from 'uuid';
import { EventBus } from './event-bus';

enum ComponentEvent {
  INIT = 'init',
  FLOW_CDM = 'flow:component-did-mount',
  FLOW_CDU = 'flow:component-did-update',
  FLOW_RENDER = 'flow:render',
}

export class Block<Props extends Object = Record<string, string>> {
  private _element: HTMLElement;

  get element(): HTMLElement {
    return this._element;
  }

  private _meta: {tagName: string; props: Props; display: 'block' | 'inline-block' | 'inline'};

  private props: Props;

  private _id: string = uuid();

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
    this.eventBus.on(ComponentEvent.FLOW_RENDER, this._render.bind(this));
  }

  private _createResources() {
    const { tagName } = this._meta;
    this._element = Block._createDocumentElement(tagName);
    this._element.id = this._id;
  }

  private init() {
    this._createResources();
    this.eventBus.emit(ComponentEvent.FLOW_CDM);
  }

  private _componentDidMount() {
    this.componentDidMount();
    this._render();
  }

  protected componentDidMount() {}

  private _componentDidUpdate(oldProps: Props, newProps: Props) {
    const response = this.componentDidUpdate(oldProps, newProps);
    if (response) {
      this._render();
    }
  }

  protected componentDidUpdate(oldProps: Props, newProps: Props) {
    return oldProps !== newProps;
  }

  private _render() {
    const block = this.render();
    this._element.innerHTML = block;
  }

  protected render(): string {
    return '';
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
