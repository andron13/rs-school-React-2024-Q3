import { Component } from "react";

import ErrorButton from "§entities/ErrorButton";
import Logo from "§entities/Logo";
import SearchSection from "§widgets/SearchSection";

interface HeaderProps {
  onSearchClick: (searchValue: string) => void;
}

interface HeaderState {}

class Header extends Component<HeaderProps, HeaderState> {
  render() {
    return (
      <section className="bg-blue-500 h-56 flex items-center justify-evenly text-center text-white">
        <Logo />
        <ErrorButton />
        <SearchSection onSearchClick={this.props.onSearchClick} />
      </section>
    );
  }
}

export default Header;
