import { ChatsPage } from './chats.page';
import { registerDefaultValueHelper } from '../../../utils';
import { render } from '../../../utils/render';

registerDefaultValueHelper();

const page = new ChatsPage();
render('body', page);
