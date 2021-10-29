import { registerDefaultValueHelper } from '../../../utils';
import { render } from '../../../utils/render';
import { EditPasswordPage } from './edit-password.page';

registerDefaultValueHelper();
const page = new EditPasswordPage();
render('body', page);
