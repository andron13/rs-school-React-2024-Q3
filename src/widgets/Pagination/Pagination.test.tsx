import { render, screen, fireEvent } from "@testing-library/react";
import { describe, it, expect } from "vitest";

import { Pagination } from "./Pagination.tsx";

describe("Pagination", () => {
  it("renders correctly", () => {
    render(
      <Pagination currentPage={1} totalPages={5} onPageChange={() => {}} />,
    );

    // Check for the presence of "Previous" and "Next" buttons
    expect(screen.getByText("Previous")).toBeInTheDocument();
    expect(screen.getByText("Next")).toBeInTheDocument();

    // Check for the display of current page and total pages
    expect(screen.getByText("1 / 5")).toBeInTheDocument();
  });

  it("disables 'Previous' button on first page", () => {
    render(
      <Pagination currentPage={1} totalPages={5} onPageChange={() => {}} />,
    );

    const previousButton = screen.getByText("Previous");

    // Check that the "Previous" button is disabled on the first page
    expect(previousButton).toBeDisabled();
  });

  it("disables 'Next' button on last page", () => {
    render(
      <Pagination currentPage={5} totalPages={5} onPageChange={() => {}} />,
    );

    const nextButton = screen.getByText("Next");

    // Check that the "Next" button is disabled on the last page
    expect(nextButton).toBeDisabled();
  });

  it("calls onPageChange with correct page number when 'Next' button is clicked", () => {
    const onPageChangeMock = vi.fn();

    render(
      <Pagination
        currentPage={2}
        totalPages={5}
        onPageChange={onPageChangeMock}
      />,
    );

    const nextButton = screen.getByText("Next");

    // Click the "Next" button
    fireEvent.click(nextButton);

    // Check that the mock function was called with the correct page number
    expect(onPageChangeMock).toHaveBeenCalledWith(3);
  });

  it("calls onPageChange with correct page number when 'Previous' button is clicked", () => {
    const onPageChangeMock = vi.fn();

    render(
      <Pagination
        currentPage={3}
        totalPages={5}
        onPageChange={onPageChangeMock}
      />,
    );

    const previousButton = screen.getByText("Previous");

    // Click the "Previous" button
    fireEvent.click(previousButton);

    // Check that the mock function was called with the correct page number
    expect(onPageChangeMock).toHaveBeenCalledWith(2);
  });
});
