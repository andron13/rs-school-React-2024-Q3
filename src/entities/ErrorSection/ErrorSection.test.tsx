import { render, screen } from "@testing-library/react";

import { ErrorSection } from "./ErrorSection";

describe("ErrorSection", () => {
  it("does not render anything when error is null", () => {
    render(<ErrorSection error={null} />);
    expect(screen.queryByTestId("not-found-section")).toBeNull();
  });
});
