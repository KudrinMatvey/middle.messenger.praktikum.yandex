import { compile } from 'handlebars';
import { registerChatPreview } from '../../components/chat-preview';
import { registerSearch } from '../../components/search';
import { registerButton } from '../../components/button';
import { registerDefaultValueHelper } from '../../utils';
import { InputConfig, registerInput } from '../../components/input';
import { registerChatMessage } from '../../components/chat-message';
import { LinkConfig, registerLink } from '../../components/link';
import { profilePageTemplate } from '../../modules/profile';

interface ProfilePage {
  firstName: string;
  inputFields: InputConfig[];
  actions: LinkConfig[];
}

const stub: ProfilePage = {
  actions: [
    { text: 'Изменить Данные' },
    { text: 'Изменить Пароль', href: 'profile-edit-password.html' },
    { text: 'Выйти', className: '-red' },
  ],
  inputFields: [
    { label: 'Почта', name: 'email' },
    { label: 'Логин', name: 'login' },
    { label: 'Имя', name: 'first_name' },
    { label: 'Фамилия', name: 'second_name' },
    { label: 'Имя в чате', name: 'display_name' },
    { label: 'Телефон', name: 'phone' },
  ],
  firstName: 'Иван',
};

const body = document.getElementsByTagName('body');

registerDefaultValueHelper();
registerButton();
registerLink();
registerInput();
registerChatMessage();
registerChatPreview();
registerSearch();

const compiled = compile<ProfilePage>(profilePageTemplate);
const html = compiled(stub);

body[0].innerHTML = html;
