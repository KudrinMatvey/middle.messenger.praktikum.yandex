import { Block } from '../shared/block';
import * as styles from './link.module.scss';
import { getClassNames } from '../../utils/get-class-names';

export interface LinkProps {
  text: string;
  className?: string;
  href?: string;
  onClick?: () => unknown;
}

export class Link extends Block<LinkProps> {
  constructor(props: LinkProps) {
    super('div', props);
  }

  get className(): string {
    return getClassNames([styles.linkWrapper, this.props.className]);
  }

  get template(): string {
    return `<a href="{{ defaultValue href '#' }}" class="${styles.link} {{defaultValue  ''}}"> {{ text }}</a>`;
  }

  onClick(event: Event) {
    event.preventDefault();
    this.props.onClick?.();
  }

  protected componentDidRender() {
    const link = this.element.querySelector('a');
    if (link && (typeof this.props.onClick === 'function')) {
      link.addEventListener('click', this.onClick.bind(this));
    }
  }
}
