// import { Page } from '../shared/page';
// import { Button, ButtonConfig } from '../../components/button';
// import { InputProps } from '../../components/input';
// import { Input } from '../../components/input/input';
// import { chatsPageTemplate } from './chats-page.template';
//
// interface ChatsPageChildren {
//   chatHistoryTmpl?: string;
//   chatListTmpl?: string;
//   sendButton: Button;
//   optionsButton: Button;
//   messageInput: Input;
//   attachButton: Button;
// }
//
// interface ChatsPageProps {
//   userName?: string;
// }
//
// export class ChatsPage extends Page<ChatsPageChildren, ChatsPageChildren> {
//   get className(): string {
//     return '';
//   }
//
//   get template(): string {
//     return chatsPageTemplate;
//   }
//
//   buildChildren(): ChatsPageChildren {
//     const sendButton = Button;
//     const optionsButton = Button;
//     const messageInput = Input;
//     const attachButton = Button;
//     return {
//       sendButton,
//       optionsButton,
//       messageInput,
//       attachButton
//     };
//   }
// }
