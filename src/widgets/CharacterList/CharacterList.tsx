import { Component } from "react";

import CharacterItem from "§entities/CharacterItem";
import { Character } from "§shared/api/api.ts";

interface CharacterListProps {
  characters: Character[];
}

class CharacterList extends Component<CharacterListProps> {
  render() {
    const { characters } = this.props;

    return (
      <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {characters.map((character) => (
          <CharacterItem key={character.id} character={character} />
        ))}
      </section>
    );
  }
}

export default CharacterList;
