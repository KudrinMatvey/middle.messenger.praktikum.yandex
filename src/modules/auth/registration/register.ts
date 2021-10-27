import { compile } from 'handlebars';
import { registerTemplate } from './register.template';
import { ButtonConfig, registerButton } from '../../../components/button';
import { InputProps, registerInput } from '../../../components/input';
import { registerDefaultValueHelper } from '../../../utils';

interface RegisterPage {
  registerButton: ButtonConfig;
  firstNameInput: InputProps;
  secondNameInput: InputProps;
  loginInput: InputProps;
  emailInput: InputProps;
  passwordInput: InputProps;
  repeatPasswordInput: InputProps;
  phoneInput: InputProps;
}

const body = document.getElementsByTagName('body');

registerButton();
registerInput();
registerDefaultValueHelper();

const compiled = compile<RegisterPage>(registerTemplate);
const html = compiled({
  loginInput: {
    name: 'login',
    label: 'Логин',
  },
  emailInput: {
    name: 'email',
    label: 'Почта',
  },
  firstNameInput: {
    name: 'first_name',
    label: 'Имя',
  },
  secondNameInput: {
    name: 'second_name',
    label: 'Фамилия',
  },
  passwordInput: {
    name: 'password',
    type: 'password',
    label: 'Пароль',
  },
  repeatPasswordInput: {
    name: 'repeat_password',
    type: 'password',
    label: 'Пароль (еще раз)',
  },
  phoneInput: {
    name: 'phone',
    type: 'tel',
    pattern: '\\+7 \\([0-9]{3}\\) [0-9]{3} [0-9]{2} [0-9]{2}',
    label: 'Телефон',
  },
  registerButton: {
    buttonText: 'Зарегистрироваться',
    className: '-primary',
  },
});

body[0].innerHTML = html;
