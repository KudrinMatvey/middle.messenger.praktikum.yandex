import { registerChatPreview } from "../../components/chat-preview";
import { registerSearch } from "../../components/search";
import { registerButton } from "../../components/button";
import { registerDefaultValueHelper } from "../../utils";
import { InputConfig, registerInput } from "../../components/input";
import { registerChatMessage } from "../../components/chat-message";
import { compile } from "handlebars";
import { LinkConfig, registerLink } from "../../components/link";
import { profilePageTemplate } from "../../modules/profile";

interface ProfilePage {
  firstName: string;
  inputFields: InputConfig[];
  actions: LinkConfig[];
}

const stub: ProfilePage = {
  actions: [{ text: "Сохранить" }, { text: "Назад", href: "profile.html" }],
  inputFields: [
    { label: "Старый пароль", name: "old_password" },
    { label: "Новый пароль", name: "new_password" },
    { label: "Новый пароль (еще раз)", name: "repeat_password" },
  ],
  firstName: "Иван",
};

const body = document.getElementsByTagName("body");

registerDefaultValueHelper();
registerButton();
registerLink();
registerInput();
registerChatMessage();
registerChatPreview();
registerSearch();

const compiled = compile<ProfilePage>(profilePageTemplate);
const html = compiled(stub);

body[0].innerHTML = html;