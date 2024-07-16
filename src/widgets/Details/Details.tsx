import { useState, useEffect, ReactNode, MouseEvent } from "react";
import { useNavigate, useParams } from "react-router-dom";

import { DataDetailsUi } from "./ui/DetailsUI.tsx";

import { ErrorSection } from "§/entities/ErrorSection";
import { LoadingSpinner } from "§/entities/LoadingSpinner";
import { useTheme } from "§/shared/context/useTheme.ts";
import { Character } from "§/shared/types";
import { useFetchCharacterById } from "§/widgets/Details/hook";

export const Details = () => {
  const { theme } = useTheme();
  const { itemId } = useParams();
  const [isOpen, setIsOpen] = useState(true);
  const [isVisible, setIsVisible] = useState(false);
  const navigate = useNavigate();

  const { data, error, loading } = useFetchCharacterById(itemId || "");

  const handleClose = () => {
    setIsOpen(false);
    navigate("/");
  };

  const handleBackgroundClick = (event: MouseEvent<HTMLDivElement>) => {
    if (event.target === event.currentTarget) {
      handleClose();
    }
  };

  useEffect(() => {
    setIsVisible(true);
  }, []);

  if (!isOpen) return null;

  let content: ReactNode;
  if (error) {
    content = <ErrorSection error={error} />;
  } else if (loading) {
    content = <LoadingSpinner />;
  } else {
    content = <DataDetailsUi data={data as Character} />;
  }

  return (
    <div
      className={`fixed inset-y-0 right-0 pl-10 flex items-center justify-end p-4 transition-transform transform ${isVisible ? "translate-x-0 duration-1000" : "translate-x-full"}`}
      onClick={handleBackgroundClick}
    >
      <div
        className={`relative p-4 shadow-md rounded-lg w-80 ${theme === "light" ? "bg-gray-100" : "bg-gray-800 text-white"}`}
      >
        <button
          onClick={handleClose}
          className={`close-button ${theme === "light" ? "text-gray-500 hover:text-gray-900" : "text-white hover:text-gray-400"}`}
        >
          &times;
        </button>
        {content}
        <button
          onClick={handleClose}
          className={`button-primary ${theme === "light" ? "" : "dark"}`}
        >
          Close Details
        </button>
      </div>
    </div>
  );
};
