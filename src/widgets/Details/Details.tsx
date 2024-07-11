import clsx from "clsx";
import { useState, useEffect, ReactNode, MouseEvent } from "react";
import { useNavigate, useParams } from "react-router-dom";

import { DataDetailsUi } from "./ui/Details.tsx";

import { ErrorSection } from "§/entities/ErrorSection";
import { LoadingSpinner } from "§/entities/LoadingSpinner";
import { Character } from "§/shared/types";
import { useFetchCharacterById } from "§/widgets/Details/hook";

const classes = {
  bigButton:
    "mt-4 bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-lg",
  closeButton:
    "absolute top-2 right-2 text-gray-500 hover:text-gray-900 text-5xl font-bold",
  section: "relative bg-gray-100 p-4 shadow-md rounded-lg w-80",
  modalWindow:
    "fixed inset-y-0 right-0 pl-10 flex items-center justify-end  p-4 transition-transform transform",
  visible: "translate-x-0 duration-1000",
  hidden: "translate-x-full",
};

export const Details = () => {
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
      className={clsx(classes.modalWindow, {
        [classes.visible]: isVisible,
        [classes.hidden]: !isVisible,
      })}
      onClick={handleBackgroundClick}
    >
      <div className={classes.section}>
        <button onClick={handleClose} className={classes.closeButton}>
          &times;
        </button>
        {content}
        <button onClick={handleClose} className={classes.bigButton}>
          Close Details
        </button>
      </div>
    </div>
  );
};
