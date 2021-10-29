import { ProfilePageChildren, ProfilePageProps } from '../shared/profile-page.interfaces';
import { Input } from '../../../components/input';
import { passwordRepeatValidator, passwordValidator } from '../../../utils/validators';
import { Button } from '../../../components/button';
import { profilePageTemplate } from '../shared';
import { initializeForm } from '../../../utils/initialize-form';
import { Page } from '../../../pages/shared/page';
import { Link } from '../../../components/link';

export class EditPasswordPage extends Page<ProfilePageProps, ProfilePageChildren> {
  buildChildren(): ProfilePageChildren {
    const oldPassword = new Input({ label: 'Старый пароль', type: 'password', name: 'oldPassword' });
    const newPassword = new Input({
      label: 'Новый пароль', type: 'password', name: 'newPassword', validationFn: passwordValidator,
    });
    const repeatPassword = new Input({
      label: 'Новый пароль (еще раз)',
      type: 'password',
      validationFn: passwordRepeatValidator(newPassword),
    });
    const backButton = new Button(
      { icon: 'img/back.svg', className: '-primary -icon -round', onClick: () => window.history.back() },
    );
    const saveLink = new Link({ text: 'Сохранить', onClick: () => { this.form?.dispatchEvent(new Event('submit')); } });
    const backLink = new Link({ text: 'Назад', href: 'profile.html' });
    const children = {
      oldPassword, newPassword, repeatPassword, backButton, saveLink, backLink,
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
