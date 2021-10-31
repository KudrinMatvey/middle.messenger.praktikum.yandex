import { registerDefaultValueHelper } from '../../../utils';
import { render } from '../../../utils/render';
import { EditProfilePage } from './edit-profile.page';

registerDefaultValueHelper();

const page = new EditProfilePage();
render('body', page);
