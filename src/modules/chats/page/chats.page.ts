import { Input, inputStyles} from '../../../components/input';
import { Button, buttonStyles } from '../../../components/button';
import { ChatListComponent } from '../list';
import { Search } from '../../../components/search';
import { Page } from '../../../pages/shared/page';
import { chatsPageTemplate } from './chats-page.template';
import { ChatHistoryComponent } from '../history';
import * as styles from './chats.module.scss'

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
    return styles.chatsPage;
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
        timeStamp: '10:22'
      },
      {
        isAuthor: true,
        message: 'go like',
        timeStamp: '10:22',
        userName: 'mr Krabs'
      }
    ];
    const _chatList = {
      chatPreviews: [
        {
          name: 'string',
          timeStamp: '22:11',
          message: 'text',
          isAuthor: true,
          unreadMessagesCount: 2
        },
        {
          name: 'string',
          timeStamp: '22:11',
          message: 'text',
          isAuthor: true,
          unreadMessagesCount: 2
        },
        {
          name: 'string',
          timeStamp: '22:11',
          message: 'text',
          isAuthor: true,
          unreadMessagesCount: 2
        },
        {
          name: 'string',
          timeStamp: '22:11',
          message: 'text',
          isAuthor: true,
          unreadMessagesCount: 2
        },
        {
          name: 'string',
          timeStamp: '22:11',
          message: 'text',
          isAuthor: true,
          unreadMessagesCount: 2
        },
        {
          name: 'string',
          timeStamp: '22:11',
          message: 'text',
          isAuthor: true,
          unreadMessagesCount: 2
        },
        {
          name: 'string',
          timeStamp: '22:11',
          message: 'text',
          isAuthor: true,
          unreadMessagesCount: 2
        },
        {
          name: 'string',
          timeStamp: '22:11',
          message: 'text',
          isAuthor: true,
          unreadMessagesCount: 2
        },
        {
          name: 'string',
          timeStamp: '22:11',
          message: 'text',
          isAuthor: true,
          unreadMessagesCount: 2
        },
        {
          name: 'string',
          timeStamp: '22:11',
          message: 'text',
          isAuthor: true,
          unreadMessagesCount: 2
        },
        {
          name: 'string',
          timeStamp: '22:11',
          message: 'text',
          isAuthor: true,
          unreadMessagesCount: 2
        },
        {
          name: 'string',
          timeStamp: '22:11',
          message: 'text',
          isAuthor: true,
          unreadMessagesCount: 2
        }
      ]
    };
    const sendButton = new Button(
      {
        icon: 'img/forward.svg',
        className: [buttonStyles.primary, buttonStyles.icon, buttonStyles.round].join(' ')
      }
    );
    const optionsButton = new Button({
      icon: 'img/vertical-dots.svg',
      className: [buttonStyles.transparent, buttonStyles.icon, buttonStyles.round].join(' ')
    });
    const messageInput = new Input({
      label: 'Введите сообщение',
      name: 'message',
      className: [inputStyles.round, inputStyles.grey, inputStyles.noLabel].join(' ')
    });
    const attachButton = new Button({
      icon: 'img/clip.svg',
      className: [buttonStyles.transparent, buttonStyles.icon, buttonStyles.round].join(' ')
    });
    const addChatButton = new Button({
      buttonText: '+',
      className: [buttonStyles.primary, buttonStyles.icon, styles.button].join(' ')
    });
    const search = new Search({ searchFn: (val) => { console.log(val); }, placeholder: 'Поиск', className: styles.searchField });
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
      search
    };
  }
}
