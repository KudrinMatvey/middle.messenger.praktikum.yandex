import { Block } from '../components/shared/block';

export function render(query: string, block: Block) {
  let root = document.querySelector(query);
  if(!root) {
    root = document.createElement('div');
  }
  root.innerHTML = ``;
  root.appendChild(block.getContent());
  return root;
}
