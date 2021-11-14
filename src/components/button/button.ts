import { Block } from '../shared/block';
import * as styles from './button.module.scss';
import { getClassNames } from '../../utils/get-class-names';

interface ButtonConfig {
  onClick?: () => void;
  buttonText?: string;
  icon?: string;
  type?: 'submit' | 'reset';
  className?: string;
}

export class Button extends Block<ButtonConfig> {
  constructor(props: ButtonConfig) {
    super('button', props);
  }

  get className(): string {
    return getClassNames([this.props?.className, styles.button]);
  }

  get element(): HTMLButtonElement {
    return this._element as HTMLButtonElement;
  }

  get template() {
    return `
      {{defaultValue buttonText ''}}
      {{#if icon}}<img src="{{ icon }}" alt="">{{/if}}
    `;
  }

  onClick() {
    this.props?.onClick?.();
  }

  protected componentDidMount() {
    this.element.onclick = this.onClick.bind(this);
    this.element.type = this.props.type ?? 'button';
  }

  protected componentDidUpdate(oldProps: ButtonConfig, newProps: ButtonConfig): boolean {
    this.element.type = newProps.type ?? 'button';
    return oldProps.buttonText !== newProps.buttonText
          || oldProps.icon !== newProps.icon
          || oldProps.className !== newProps.className;
  }
}
