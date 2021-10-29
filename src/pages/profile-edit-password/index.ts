import { registerDefaultValueHelper } from '../../utils';
import { ProfileEditPasswordPage } from './profile-edit-password.page';
import { render } from '../../utils/render';

registerDefaultValueHelper();
const page = new ProfileEditPasswordPage();
render('body', page);
