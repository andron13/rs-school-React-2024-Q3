import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";

import { routes } from "§/shared/routes/index.tsx";

describe("Routing", () => {
  it("renders About component on /about", () => {
    render(
      <MemoryRouter initialEntries={["/about"]}>
        {routes.map(({ element }) => (
          <div key={element.key}>{element}</div>
        ))}
      </MemoryRouter>,
    );
    expect(screen.getByText("About")).toBeInTheDocument();
  });
});
