import { registerDefaultValueHelper } from '../../../utils';
import { RegisterPage } from './register.page';
import { render } from '../../../utils/render';

registerDefaultValueHelper();
const registerPage = new RegisterPage();
render('body', registerPage);
