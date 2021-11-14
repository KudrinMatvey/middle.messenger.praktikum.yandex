import { registerTemplate } from './register.template';
import { Button, buttonStyles } from '../../../components/button';
import {
  emailValidator,
  loginValidator,
  nameValidator,
  passwordRepeatValidator,
  passwordValidator,
  phoneValidator,
} from '../../../utils/validators';
import { Input } from '../../../components/input';
import { initializeForm } from '../../../utils/initialize-form';
import { Page } from '../../../pages/shared/page';
import { authStyles } from '../shared';

interface RegisterPageChildren {
  registerButton: Button;
  firstNameInput: Input;
  secondNameInput: Input;
  loginInput: Input;
  emailInput: Input;
  passwordInput: Input;
  repeatPasswordInput: Input;
  phoneInput: Input;
}

export class RegisterPage extends Page<{}, RegisterPageChildren> {
  get className(): string {
    return authStyles.authPage;
  }

  get template(): string {
    return registerTemplate;
  }

  get form() {
    return this.element.querySelector('form');
  }

  buildChildren(): RegisterPageChildren {
    const loginInput = new Input({
      name: 'login',
      validationFn: loginValidator,
      className: authStyles.inputField,
      label: 'Логин',
    });
    const emailInput = new Input({
      name: 'email',
      validationFn: emailValidator,
      className: authStyles.inputField,
      label: 'Почта',
    });
    const firstNameInput = new Input({
      name: 'first_name',
      validationFn: nameValidator,
      className: authStyles.inputField,
      label: 'Имя',
    });
    const secondNameInput = new Input({
      name: 'second_name',
      validationFn: nameValidator,
      className: authStyles.inputField,
      label: 'Фамилия',
    });
    const passwordInput = new Input({
      name: 'password',
      type: 'password',
      validationFn: passwordValidator,
      className: authStyles.inputField,
      label: 'Пароль',
    });
    const repeatPasswordInput = new Input({
      type: 'password',
      validationFn: passwordRepeatValidator(passwordInput),
      className: authStyles.inputField,
      label: 'Пароль (еще раз)',
    });
    const phoneInput = new Input({
      name: 'phone',
      type: 'tel',
      validationFn: phoneValidator,
      className: authStyles.inputField,
      label: 'Телефон',
    });
    const registerButton = new Button({
      buttonText: 'Зарегистрироваться',
      type: 'submit',
      className: buttonStyles.primary,
    });
    return {
      loginInput,
      emailInput,
      firstNameInput,
      secondNameInput,
      passwordInput,
      repeatPasswordInput,
      phoneInput,
      registerButton,
    };
  }

  protected componentDidRender() {
    super.componentDidRender();
    initializeForm(this.form, this.children, (value) => console.log(value));
  }
}
