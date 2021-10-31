import { ProfilePageChildren, ProfilePageProps } from '../shared/profile-page.interfaces';
import {
  emailValidator, loginValidator, nameValidator, phoneValidator,
} from '../../../utils/validators';
import { Input } from '../../../components/input';
import { Button, buttonStyles } from '../../../components/button';
import { profilePageStyles, profilePageTemplate } from '../shared';
import { initializeForm } from '../../../utils/initialize-form';
import { Page } from '../../../pages/shared/page';
import { Link, linkStyles } from '../../../components/link';

export class EditProfilePage extends Page<ProfilePageProps, ProfilePageChildren> {
  get className(): string {
    return profilePageStyles.profilePage;
  }

  get template(): string {
    return profilePageTemplate;
  }

  get form() {
    return this.element.querySelector('form');
  }

  buildChildren(): ProfilePageChildren {
    const editLink = new Link({
      text: 'Изменить Данные',
      onClick: () => { this.form?.dispatchEvent(new Event('submit')); },
      className: profilePageStyles.action,
    });
    const changePasswordLink = new Link({
      text: 'Изменить Пароль',
      href: 'profile-edit-password.html',
      className: profilePageStyles.action,
    });
    const exitLink = new Link({ text: 'Выйти', className: [profilePageStyles.action, linkStyles.red].join(' ') });

    const emailInput = new Input({
      label: 'Почта', name: 'email', validationFn: emailValidator, className: profilePageStyles.inputField,
    });
    const loginInput = new Input({
      label: 'Логин', name: 'login', validationFn: loginValidator, className: profilePageStyles.inputField,
    });
    const nameInput = new Input({
      label: 'Имя', name: 'first_name', validationFn: nameValidator, className: profilePageStyles.inputField,
    });
    const surnameInput = new Input({
      label: 'Фамилия', name: 'second_name', validationFn: nameValidator, className: profilePageStyles.inputField,
    });
    const displayInput = new Input({ label: 'Имя в чате', name: 'display_name', className: profilePageStyles.inputField });
    const phoneInput = new Input({
      label: 'Телефон', name: 'phone', validationFn: phoneValidator, className: profilePageStyles.inputField,
    });

    const backButton = new Button(
      {
        icon: 'img/back.svg',
        onClick: () => window.history.back(),
        className: [buttonStyles.primary, buttonStyles.icon, buttonStyles.round].join(' '),
      },
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
