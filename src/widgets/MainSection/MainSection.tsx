import { Component } from "react";

import NotFoundPage from "§features/NotFoundPage";
import fetchCharacters, { ApiResponse, Character } from "§shared/api/api.ts";
import CharacterList from "§widgets/CharacterList";

interface MainSectionProps {
  searchString: string;
}

interface MainSectionState {
  data: Character[] | null;
  error: string | null;
}

class MainSection extends Component<MainSectionProps, MainSectionState> {
  constructor(props: MainSectionProps) {
    super(props);
    this.state = {
      data: null,
      error: null,
    };
  }

  fetchDataFromServer = async (result: string) => {
    try {
      const response: ApiResponse | number = await fetchCharacters(result);
      if (typeof response === "number") {
        throw new Error(`Failed to fetch. Status code: ${response}`);
      }
      this.setState({
        data: response.results,
        error: null,
      });
    } catch (error) {
      this.setState({
        error: error.message,
      });
    }
  };

  componentDidMount() {
    this.fetchDataFromServer(this.props.searchString).then(() => {});
  }

  componentDidUpdate(prevProps: MainSectionProps) {
    if (prevProps.searchString !== this.props.searchString) {
      this.fetchDataFromServer(this.props.searchString).then(() => {});
    }
  }

  render() {
    const { searchString } = this.props;
    const { data, error } = this.state;

    return (
      <main className="bg-gray-200 flex-1 flex flex-col items-center justify-center">
        <div className="max-w-screen-lg mx-auto p-4">
          <p className="mb-4">
            Search-string:{" "}
            <span className="font-bold">{searchString || "empty"}</span>
          </p>
          {error ? (
            <NotFoundPage />
          ) : (
            <>{data && <CharacterList characters={data} />}</>
          )}
        </div>
      </main>
    );
  }
}

export default MainSection;
