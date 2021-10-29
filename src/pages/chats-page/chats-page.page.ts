import { Page } from '../shared/page';
import { Button } from '../../components/button';
import { Input } from '../../components/input';
import { chatsPageTemplate } from './chats-page.template';
import { ChatHistoryComponent } from '../../modules/chats/chat-history';
import { ChatListComponent } from '../../modules/chats/chats-list';
import { Search } from '../../components/search';

interface ChatsPageChildren {
  chatHistory: ChatHistoryComponent;
  chatList: ChatListComponent;
  sendButton: Button;
  optionsButton: Button;
  messageInput: Input;
  search: Search;
  attachButton: Button;
  addChatButton: Button;
}

interface ChatsPageProps {
  userName?: string;
  selectedChat: boolean;
}

export class ChatsPage extends Page<ChatsPageProps, ChatsPageChildren> {
  get className(): string {
    return 'h-100';
  }

  get template(): string {
    return chatsPageTemplate;
  }

  constructor(props: ChatsPageProps = { selectedChat: true, userName: 'вадим' }) {
    super('div', props);
  }

  buildChildren(): ChatsPageChildren {
    const _chatHistory = [
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
    const _chatList = {
      chatPreviews: [
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
    const sendButton = new Button(
      {
        icon: 'img/forward.svg',
        className: '-primary -icon -round',
      },
    );
    const optionsButton = new Button({
      icon: 'img/vertical-dots.svg',
      className: '-transparent -icon -round',
    });
    const messageInput = new Input({
      label: 'Введите сообщение',
      name: 'message',
      className: '-round -grey -no-label',
    });
    const attachButton = new Button({
      icon: 'img/clip.svg',
      className: '-transparent -icon -round',
    });
    const addChatButton = new Button({
      buttonText: '+',
      className: '-primary -icon',
    });
    const search = new Search({ searchFn: (val) => { console.log(val); }, placeholder: 'Поиск' });
    const chatHistory = new ChatHistoryComponent({ messages: _chatHistory });
    const chatList = new ChatListComponent(_chatList);
    return {
      sendButton,
      optionsButton,
      messageInput,
      attachButton,
      chatHistory,
      chatList,
      addChatButton,
      search,
    };
  }
}
