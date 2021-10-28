import { registerTemplate } from './register.template';
import { Button } from '../../../components/button';
import {
  emailValidator,
  loginValidator,
  nameValidator,
  passwordRepeatValidator,
  passwordValidator,
  phoneValidator
} from '../../../utils/validators';
import { Input } from '../../../components/input/input';
import { initializeForm } from '../../../utils/initialize-form';
import { Page } from '../../../pages/shared/page';

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
    return '';
  }

  get template(): string {
    return registerTemplate;
  }

  get form() {
    return this.element.querySelector('form');
  }

  protected componentDidRender() {
    super.componentDidRender();
    initializeForm(this.form, this.children, (value) => console.log(value));
  }

  buildChildren(): RegisterPageChildren {
    const loginInput = new Input({
      name: 'login',
      validationFn: loginValidator,
      label: 'Логин'
    });
    const emailInput = new Input({
      name: 'email',
      validationFn: emailValidator,
      label: 'Почта'
    });
    const firstNameInput = new Input({
      name: 'first_name',
      validationFn: nameValidator,
      label: 'Имя'
    });
    const secondNameInput = new Input({
      name: 'second_name',
      validationFn: nameValidator,
      label: 'Фамилия'
    });
    const passwordInput = new Input({
      name: 'password',
      type: 'password',
      validationFn: passwordValidator,
      label: 'Пароль'
    });
    const repeatPasswordInput = new Input({
      type: 'password',
      validationFn: passwordRepeatValidator(passwordInput),
      label: 'Пароль (еще раз)'
    });
    const phoneInput = new Input({
      name: 'phone',
      type: 'tel',
      validationFn: phoneValidator,
      label: 'Телефон'
    });
    const registerButton = new Button({
      buttonText: 'Зарегистрироваться',
      type: 'submit',
      className: '-primary'
    });
    return {
      loginInput,
      emailInput,
      firstNameInput,
      secondNameInput,
      passwordInput,
      repeatPasswordInput,
      phoneInput,
      registerButton
    };
  }
}
