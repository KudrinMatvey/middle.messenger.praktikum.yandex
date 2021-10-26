import { Block } from './block';

export interface PageProps<Props> {
  children: Record<string, Block>,
  props?: Props;
}

export class Page<OwnProps> extends Block<PageProps<OwnProps>> {

  render() {
    super.render();
    this.renderChildren();
  }

  protected renderTemplate() {
    return `<div id="button-test"></div>`;
  }

  private renderChildren() {
    Object.entries(this.props.children).forEach(([key, value]) => {
      const toReplace = this.element.querySelector(`#${key}`);
      const component = this.element.appendChild(value.getContent());
      if (toReplace && component) {
        this.element.replaceChild(component, toReplace);
      }
    });
  }
}
