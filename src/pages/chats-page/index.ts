import { registerDefaultValueHelper } from '../../utils';
import { ChatsPage } from './chats-page.page';
import { render } from '../../utils/render';

registerDefaultValueHelper();

const page = new ChatsPage();
render('body', page);
