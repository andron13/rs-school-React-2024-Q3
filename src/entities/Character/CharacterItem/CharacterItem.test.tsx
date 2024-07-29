import { screen } from "@testing-library/react";

import { CharacterItem } from "./CharacterItem";

import { mockCharacter } from "@/src/test/mocks/mock.ts";
import renderWithProviders from "@/src/test/renderWithProviders.tsx";

vi.mock("react-redux", async () => {
  const actual = await vi.importActual("react-redux");
  return {
    ...actual,
    useDispatch: vi.fn(),
  };
});

vi.mock("§/shared/context/useTheme.ts", () => ({
  useTheme: () => ({ theme: "light" }),
}));

describe("CharacterItem", () => {
  test("renders the character item correctly", () => {
    renderWithProviders(<CharacterItem character={mockCharacter} />);

    expect(screen.getByText(mockCharacter.name)).toBeInTheDocument();
    expect(
      screen.getByText(`Species: ${mockCharacter.species}`),
    ).toBeInTheDocument();
    expect(
      screen.getByText(`Gender: ${mockCharacter.gender}`),
    ).toBeInTheDocument();
    expect(screen.getByRole("img")).toHaveAttribute("src", mockCharacter.image);
  });
});
