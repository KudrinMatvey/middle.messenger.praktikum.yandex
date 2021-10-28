import { registerPartial } from 'handlebars';
import { Block } from '../shared/block';

export interface ButtonConfig {
  onClick?: () => any;
  buttonText?: string;
  icon?: string;
  type?: 'submit' | 'reset';
  className?: string;
}

export const registerButton = () => registerPartial(
  'button',
  `
  <button class="{{defaultValue className ' '}} button" href="#" onclick="{{onClick}}">
    {{defaultValue buttonText ''}}
    {{#if icon}}<img src="{{ icon }}" alt="">{{/if}}
   </button>
`,
);

export class Button extends Block<ButtonConfig> {
  constructor(props: ButtonConfig) {
    super('button', props);
  }

  protected componentDidMount() {
    this.element.onclick = this.onClick.bind(this);
    if(this.props.type) {
      (this.element as HTMLButtonElement).type = this.props.type;
    }
  }

  onClick() {
    this.props?.onClick?.()
  }

  get className(): string {
    return [this.props?.className,'button'].filter(Boolean).join(' ');
  }

  get template() {
    return `
      {{defaultValue buttonText ''}}
      {{#if icon}}<img src="{{ icon }}" alt="">{{/if}}
    `;
  }
}
