import { compile } from 'handlebars';
import { registerDefaultValueHelper } from '../../utils';
import { ButtonConfig, registerButton } from '../../components/button';
import { InputConfig, registerInput } from '../../components/input';
import { registerChatMessage } from '../../components/chat-message';
import { chatsPageTemplate } from './chats-page.template';
import { renderChatHistory } from '../../modules/chats/chat-history';
import { renderChatList } from '../../modules/chats/chats-list';
import { registerSearch } from '../../components/search';
import { registerChatPreview } from '../../components/chat-preview';

interface ChatsPage {
  chatHistoryTmpl: string;
  chatListTmpl: string;
  sendButton: ButtonConfig;
  optionsButton: ButtonConfig;
  userName: string;
  messageInput: InputConfig;
  attachButton: ButtonConfig;
}

const chatHistory = [
  {
    imageUrl: 'img/surprised-cat.jpg',
    timeStamp: '10:22',
  },
  {
    isAuthor: true,
    message: 'go like',
    timeStamp: '10:22',
    userName: 'mr Krabs',
  },
];
const chatList = {
  chatMessages: [
    {
      name: 'string',
      timeStamp: '22:11',
      message: 'text',
      isAuthor: true,
      unreadMessagesCount: 2,
    },
    {
      name: 'string',
      timeStamp: '22:11',
      message: 'text',
      isAuthor: true,
      unreadMessagesCount: 2,
    },
    {
      name: 'string',
      timeStamp: '22:11',
      message: 'text',
      isAuthor: true,
      unreadMessagesCount: 2,
    },
    {
      name: 'string',
      timeStamp: '22:11',
      message: 'text',
      isAuthor: true,
      unreadMessagesCount: 2,
    },
    {
      name: 'string',
      timeStamp: '22:11',
      message: 'text',
      isAuthor: true,
      unreadMessagesCount: 2,
    },
    {
      name: 'string',
      timeStamp: '22:11',
      message: 'text',
      isAuthor: true,
      unreadMessagesCount: 2,
    },
    {
      name: 'string',
      timeStamp: '22:11',
      message: 'text',
      isAuthor: true,
      unreadMessagesCount: 2,
    },
    {
      name: 'string',
      timeStamp: '22:11',
      message: 'text',
      isAuthor: true,
      unreadMessagesCount: 2,
    },
    {
      name: 'string',
      timeStamp: '22:11',
      message: 'text',
      isAuthor: true,
      unreadMessagesCount: 2,
    },
    {
      name: 'string',
      timeStamp: '22:11',
      message: 'text',
      isAuthor: true,
      unreadMessagesCount: 2,
    },
    {
      name: 'string',
      timeStamp: '22:11',
      message: 'text',
      isAuthor: true,
      unreadMessagesCount: 2,
    },
    {
      name: 'string',
      timeStamp: '22:11',
      message: 'text',
      isAuthor: true,
      unreadMessagesCount: 2,
    },
  ],
};
const pageActions = {
  sendButton: {
    icon: 'img/forward.svg',
    className: '-primary -icon -round',
  },
  userName: 'Вадим',
  attachButton: {
    icon: 'img/clip.svg',
    className: '-transparent -icon -round',
  },
  optionsButton: {
    icon: 'img/vertical-dots.svg',
    className: '-transparent -icon -round',
  },
  messageInput: {
    label: 'Введите сообщение',
    name: 'message',
    className: '-round -grey -no-label',
  },
};

const root = document.getElementById('root');

registerDefaultValueHelper();
registerButton();
registerInput();
registerChatMessage();
registerChatPreview();
registerSearch();
const chatHistoryTmpl = renderChatHistory(chatHistory);
const chatListTmpl = renderChatList(chatList);

const compiled = compile<ChatsPage>(chatsPageTemplate);
const html = compiled({
  ...pageActions,
  chatHistoryTmpl,
  chatListTmpl,
});
const node = document.createElement('div');
node.innerHTML = html;
if(root) {
  document.body.replaceChild(node, root);
}
