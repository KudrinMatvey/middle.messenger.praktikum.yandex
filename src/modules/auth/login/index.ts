import { render } from '../../../utils/render';
import { registerDefaultValueHelper } from '../../../utils';
import { LoginPage } from './login.page';

registerDefaultValueHelper();
const loginPage = new LoginPage();
render('body', loginPage);
