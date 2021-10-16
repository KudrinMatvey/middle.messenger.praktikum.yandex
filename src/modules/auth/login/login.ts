import { compile } from "handlebars";
import { loginTemplate } from "./login.template";
import { ButtonConfig, registerButton } from "../../../components/button";
import { InputConfig, registerInput } from "../../../components/input";
import { registerDefaultValueHelper } from "../../../utils";

interface LoginPage {
  loginButton: ButtonConfig;
  registerButton: ButtonConfig;
  loginInput: InputConfig;
  passwordInput: InputConfig;
}

document.addEventListener("DOMContentLoaded", () => {
  const body = document.getElementsByTagName("body");

  registerDefaultValueHelper();
  registerButton();
  registerInput();

  const compiled = compile<LoginPage>(loginTemplate);
  const html = compiled({
    passwordInput: {
      type: "password",
      name: "password",
      label: "Пароль",
    },
    registerButton: {
      buttonText: "Нет аккаунта?",
    },
    loginButton: {
      onClick: "loginFn()",
      buttonText: "Войти",
      className: "-primary",
    },
    loginInput: {
      label: "Логин",
      name: "login",
    },
  });

  body[0].innerHTML = html;
});
