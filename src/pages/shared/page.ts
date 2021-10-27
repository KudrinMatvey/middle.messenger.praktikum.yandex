import { Block } from '../../components/shared/block';

export interface PageProps<Props, Children> {
  children: Children,
  ownProps: Props;
}

export abstract class Page<OwnProps, Children> extends Block<PageProps<OwnProps, Children>, OwnProps> {
  render() {
    super.render();
    this.renderChildren();
  }

  protected renderTemplate(props: PageProps<OwnProps>): string {
    return super.renderTemplate(props.ownProps);
  }

  private renderChildren() {
    Object.entries(this.props.children).forEach(([key, value]) => {
      const toReplace = this.element.querySelector(`#${key}`);
      const component = this.element.appendChild(value.getContent());
      toReplace?.parentElement?.replaceChild(component, toReplace);
    });
  }
}
