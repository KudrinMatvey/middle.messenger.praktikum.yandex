import { loginTemplate } from './login.template';
import { Button } from '../../../components/button';
import { Page } from '../../../pages/shared/page';
import { Input } from '../../../components/input';
import { initializeForm } from '../../../utils/initialize-form';
import { loginValidator, passwordValidator } from '../../../utils/validators';
import * as styles from './login.module.scss'
import * as buttonStyles from '../../../components/button/button.module.scss'

console.log({styles, buttonStyles})

export interface LoginPageChildren {
  loginButton: Button;
  registerButton: Button;
  loginInput: Input;
  passwordInput: Input;
}

export class LoginPage extends Page<{}, LoginPageChildren> {
  get className(): string {
    return 'h-100';
  }

  get template(): string {
    return loginTemplate;
  }

  get form() {
    return this.element.querySelector('form');
  }

  protected componentDidRender() {
    super.componentDidRender();
    initializeForm(this.form, this.children, (value) => console.log(value));
  }

  buildChildren(): LoginPageChildren {
    const registerButton = new Button({
      buttonText: 'Нет аккаунта?',
    });
    const passwordInput = new Input({
      type: 'password',
      name: 'password',
      className: styles.inputField,
      validationFn: passwordValidator,
      label: 'Пароль',
    });
    const loginInput = new Input({
      label: 'Логин',
      required: true,
      className: styles.inputField,
      validationFn: loginValidator,
      name: 'login',
    });
    const loginButton = new Button({
      buttonText: 'Войти',
      type: 'submit',
      className: [
        buttonStyles.primary,
        styles.actionButton
      ].join(' ')
    });
    return {
      loginButton, registerButton, passwordInput, loginInput,
    };
  }
}
