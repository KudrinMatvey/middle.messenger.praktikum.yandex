import { Block } from './block';
import { Page } from './page';

class Button extends Block<{text: string; onClick: () => {}}> {
  constructor(props) {
    super('button', props);
    this.element.onclick = this.onClick.bind(this);
  }

  onClick() {
    this.props?.onClick?.()
  }

  renderTemplate() {
    // В проекте должен быть ваш собственный шаблонизатор
    return `<div>${this.props.text}</div>`;
  }
}

function render(query, block) {
  const root = document.querySelector(query);
  root.innerHTML = ``;
  root.appendChild(block.getContent());
  return root;
}

const button = new Button({
  text: 'Click me',
  onClick: () => alert('hlleoj')
});

const page = new Page('div', {children: {'button-test': button}});

// app — это class дива в корне DOM
render('.app', page);

// Через секунду контент изменится сам, достаточно обновить пропсы
setTimeout(() => {
  button.setProps({
    text: 'Click me, please',
  });
}, 1000);setTimeout(() => {
  button.setProps({
    text: 'Click me, please',
  });
}, 3000);setTimeout(() => {
  button.setProps({
    text: 'Click me',
    onClick: () => alert('hlleoj')
  });
}, 4000);
