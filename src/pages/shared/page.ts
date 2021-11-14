import { Block } from '../../components/shared/block';

export abstract class Page<Props, Children> extends Block<Props> {
  children: Children;

  protected componentDidRender() {
    this.renderChildren();
  }

  protected componentDidMount() {
    this.children = this.buildChildren();
  }

  private renderChildren() {
    Object.entries(this.children).forEach(([key, value]) => {
      const toReplace = this.element.querySelector(`#${key}`);
      const component = this.element.appendChild(value.getContent());
      toReplace?.parentElement?.replaceChild(component, toReplace);
    });
  }

  abstract buildChildren(): Children;
}
