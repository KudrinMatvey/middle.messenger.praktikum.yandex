import { registerDefaultValueHelper } from '../../../utils';
import { ProfilePage } from './profile.page';
import { render } from '../../../utils/render';

registerDefaultValueHelper();

const page = new ProfilePage();
render('body', page);
