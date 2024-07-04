import { Component, ReactNode } from "react";

import Footer from "§entities/Footer/Footer.tsx";
import Header from "§widgets/Header";
import MainSection from "§widgets/MainSection";

interface AppProps {
  component?: ReactNode;
}

interface AppState {
  searchString: string;
}

class App extends Component<AppProps, AppState> {
  constructor(props: AppProps) {
    super(props);
    const savedSearchString = this.getLocalStorage("searchValue") || "";
    this.state = {
      searchString: savedSearchString,
    };
  }
  handleSearchClick = (searchValue: string) => {
    this.setState({ searchString: searchValue });
  };
  getLocalStorage = (key: string): string | null => {
    return localStorage.getItem(key);
  };
  render() {
    return (
      <div className="flex flex-col min-h-screen">
        <Header onSearchClick={this.handleSearchClick} />
        <MainSection searchString={this.state.searchString} />
        <Footer />
      </div>
    );
  }
}

export default App;
