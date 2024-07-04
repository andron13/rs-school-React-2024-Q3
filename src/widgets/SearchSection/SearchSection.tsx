import { ChangeEvent, Component, FormEvent } from "react";

interface SearchSectionProps {
  onSearchClick: (searchValue: string) => void;
}

interface SearchSectionState {
  inputValue: string;
}

class SearchSection extends Component<SearchSectionProps, SearchSectionState> {
  constructor(props: SearchSectionProps) {
    super(props);
    const savedSearchString = this.getLocalStorage("searchValue") || "";
    this.state = {
      inputValue: savedSearchString,
    };
  }

  handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    this.setState({ inputValue: event.target.value });
  };

  handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    this.handleSearchClick().then(() => {});
  };

  handleSearchClick = async () => {
    const { inputValue } = this.state;
    this.props.onSearchClick(inputValue);
    this.setLocalStorage("searchValue", inputValue);
  };

  setLocalStorage = (key: string, value: string) => {
    localStorage.setItem(key, value.trim());
  };
  getLocalStorage = (key: string): string | null => {
    return localStorage.getItem(key);
  };

  render() {
    return (
      <form
        onSubmit={this.handleSubmit}
        className="flex items-center justify-center space-x-4"
      >
        <input
          className="px-4 py-2 rounded-lg bg-white text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500"
          type="text"
          placeholder="Input"
          value={this.state.inputValue}
          onChange={this.handleInputChange}
        />
        <button
          type="submit"
          className="px-10 py-2 rounded-lg bg-white text-blue-500 border border-blue-500 hover:bg-blue-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 active:bg-blue-500 active:text-white"
        >
          Search
        </button>
      </form>
    );
  }
}

export default SearchSection;
