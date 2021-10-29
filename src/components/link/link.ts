import { Block } from '../shared/block';
import * as styles from './link.module.scss'

export interface LinkProps {
  text: string;
  className?: string;
  href?: string;
  onClick?: () => unknown;
}

export class Link extends Block<LinkProps> {
  onClick(event: Event) {
    event.preventDefault();
    this.props.onClick?.();
  }

  get className(): string {
    return [styles.linkWrapper, this.props.className].filter(Boolean).join(' ');
  }

  constructor(props: LinkProps) {
    super('div', props);
  }

  protected componentDidRender() {
    super.componentDidRender();
    const link = this.element.querySelector('a');
    if (link && (typeof this.props.onClick === 'function')) {
      link.addEventListener('click', this.onClick.bind(this));
    }
  }

  get template(): string {
    return `<a href="{{ defaultValue href \'#\' }}" class="${styles.link} {{defaultValue  \'\'}}"> {{ text }}</a>`;
  }
}
