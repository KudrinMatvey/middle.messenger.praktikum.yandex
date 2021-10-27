import { loginTemplate } from './login.template';
import { Button } from '../../../components/button';
import { registerDefaultValueHelper } from '../../../utils';
import { Page } from '../../../pages/shared/page';
import { render } from '../../../utils/render';
import { Input } from '../../../components/input/input';

interface LoginPageProps {
  loginButton: Button;
  registerButton: Button;
  loginInput: Input;
  passwordInput: Input;
}
registerDefaultValueHelper();

class LoginPage extends Page<{}, LoginPageProps> {
  get className(): string {
    return '';
  }

  get template(): string {
    return loginTemplate;
  }
}
const registerButton = new Button({
  buttonText: 'Нет аккаунта?',
});
const passwordInput = new Input({
  type: 'password',
  name: 'password',
  label: 'Пароль',
});
const loginInput = new Input({
  label: 'Логин',
  name: 'login',
})
const loginButton = new Button({
  onClick: () => console.log({password: passwordInput.value, login: loginInput.value}),
  buttonText: 'Войти',
  className: '-primary',
});


const login = new LoginPage('div', {
  ownProps: {},
  children: {loginButton, registerButton, passwordInput, loginInput}
});

render('body', login)
