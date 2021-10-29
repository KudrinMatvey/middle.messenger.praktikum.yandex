import { Block } from '../shared/block';

export interface SearchProps {
  searchFn: (str: string) => unknown;
  placeholder: string;
}
export class Search extends Block<SearchProps> {
  constructor(props: SearchProps) {
    super('input', props);
  }

  get className(): string {
    return 'search-field';
  }

  get element(): HTMLInputElement {
    return (<HTMLInputElement> this._element);
  }

  get value(): string {
    return this.element.value;
  }

  protected componentDidMount() {
    this.element.onkeydown = () => this.props.searchFn?.(this.value);
    this.element.placeholder = this.props.placeholder;
  }

  protected componentDidUpdate(newProps: SearchProps): boolean {
    this.element.onkeydown = () => newProps.searchFn?.(this.value);
    this.element.placeholder = newProps.placeholder;
    return false;
  }

  get template(): string {
    return '';
  }
}
