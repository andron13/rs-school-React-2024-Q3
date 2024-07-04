import { Component } from "react";

import imgSrc from "§/assets/images/spinner.png";
import NotFoundPage from "§features/NotFoundPage";
import fetchCharacters, { ApiResponse, Character } from "§shared/api/api.ts";
import CharacterList from "§widgets/CharacterList";

interface MainSectionProps {
  searchString: string;
}

interface MainSectionState {
  data: Character[] | null;
  error: string | null;
  loading: boolean;
}

class MainSection extends Component<MainSectionProps, MainSectionState> {
  constructor(props: MainSectionProps) {
    super(props);
    this.state = {
      data: null,
      error: null,
      loading: false,
    };
  }

  fetchDataFromServer = async (result: string) => {
    this.setState({ loading: true });
    try {
      const response: ApiResponse | number = await fetchCharacters(result);
      if (typeof response === "number") {
        throw new Error(`Failed to fetch. Status code: ${response}`);
      }
      setTimeout(() => {
        this.setState({
          data: response.results,
          error: null,
          loading: false,
        });
      }, 500);
    } catch (error) {
      this.setState({
        error: error.message,
        loading: false,
      });
    }
  };

  componentDidMount() {
    this.fetchDataFromServer(this.props.searchString).then(() => {});
  }

  componentDidUpdate(prevProps: MainSectionProps) {
    if (prevProps.searchString !== this.props.searchString) {
      this.setState({ loading: true });
      this.fetchDataFromServer(this.props.searchString).then(() => {});
    }
  }

  render() {
    const { searchString } = this.props;
    const { data, error, loading } = this.state;

    return (
      <main className="bg-gray-200 flex-1 flex flex-col items-center justify-center">
        <div className="max-w-screen-lg mx-auto p-4">
          {error ? (
            <NotFoundPage />
          ) : (
            <>
              {loading ? (
                <img
                  src={imgSrc}
                  alt="spinner"
                  className="w-32 h-32 animate-spin"
                />
              ) : (
                <>
                  <p className="mb-4">
                    Search-string:{" "}
                    <span className="font-bold">{searchString || "empty"}</span>
                  </p>
                  {data && <CharacterList characters={data} />}
                </>
              )}
            </>
          )}
        </div>
      </main>
    );
  }
}

export default MainSection;
