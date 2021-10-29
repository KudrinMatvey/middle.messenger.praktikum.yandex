import { ProfilePageChildren, ProfilePageProps } from '../../modules/profile/profile-page.interfaces';
import { Input } from '../../components/input';
import {
  emailValidator, loginValidator, nameValidator, phoneValidator,
} from '../../utils/validators';
import { Button } from '../../components/button';
import { Link } from '../../components/link';
import { profilePageTemplate } from '../../modules/profile';
import { initializeForm } from '../../utils/initialize-form';
import { Page } from '../shared/page';

export class ProfilePage extends Page<ProfilePageProps, ProfilePageChildren> {
  buildChildren(): ProfilePageChildren {
    const editLink = new Link({ text: 'Изменить Данные', onClick: () => { this.form?.dispatchEvent(new Event('submit')); } });
    const changePasswordLink = new Link({ text: 'Изменить Пароль', href: 'profile-edit-password.html' });
    const exitLink = new Link({ text: 'Выйти', className: '-red' });

    const emailInput = new Input({ label: 'Почта', name: 'email', validationFn: emailValidator });
    const loginInput = new Input({ label: 'Логин', name: 'login', validationFn: loginValidator });
    const nameInput = new Input({ label: 'Имя', name: 'first_name', validationFn: nameValidator });
    const surnameInput = new Input({ label: 'Фамилия', name: 'second_name', validationFn: nameValidator });
    const displayInput = new Input({ label: 'Имя в чате', name: 'display_name' });
    const phoneInput = new Input({ label: 'Телефон', name: 'phone', validationFn: phoneValidator });

    const backButton = new Button(
      { icon: 'img/back.svg', className: '-primary -icon -round', onClick: () => window.history.back() },
    );

    const children = {
      editLink,
      backButton,
      changePasswordLink,
      exitLink,
      emailInput,
      loginInput,
      nameInput,
      surnameInput,
      displayInput,
      phoneInput,
    };

    this.setChildKeys(children);
    return children;
  }

  get className(): string {
    return 'h-100';
  }

  get template(): string {
    return profilePageTemplate;
  }

  get form() {
    return this.element.querySelector('form');
  }

  protected componentDidRender() {
    super.componentDidRender();
    initializeForm(this.form, this.children, (value) => console.log(value));
  }

  private setChildKeys(children: ProfilePageChildren) {
    const fieldIds = Object.entries(children).filter(([, component]) => component instanceof Input).map(([key]) => key);
    const actionIds = Object.entries(children).filter(([, component]) => component instanceof Link).map(([key]) => key);
    this.props = { fieldIds, actionIds };
  }
}
