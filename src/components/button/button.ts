import { Block } from '../shared/block';
import * as styles from './button.module.scss'

export interface ButtonConfig {
  onClick?: () => any;
  buttonText?: string;
  icon?: string;
  type?: 'submit' | 'reset';
  className?: string;
}

export class Button extends Block<ButtonConfig> {
  constructor(props: ButtonConfig) {
    super('button', props);
  }

  protected componentDidMount() {
    this.element.onclick = this.onClick.bind(this);
    this.element.type = this.props.type ?? 'button';
  }

  get element(): HTMLButtonElement {
    return this._element as HTMLButtonElement;
  }

  protected componentDidUpdate(oldProps: ButtonConfig, newProps: ButtonConfig): boolean {
    this.element.type = newProps.type ?? 'button';
    return oldProps.buttonText !== newProps.buttonText
          || oldProps.icon !== newProps.icon
          || oldProps.className !== newProps.className;
  }

  onClick() {
    this.props?.onClick?.();
  }

  get className(): string {
    return [this.props?.className, styles.button].filter(Boolean).join(' ');
  }

  get template() {
    return `
      {{defaultValue buttonText ''}}
      {{#if icon}}<img src="{{ icon }}" alt="">{{/if}}
    `;
  }
}
