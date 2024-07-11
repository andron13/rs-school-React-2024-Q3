import clsx from "clsx";
import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

const classes = {
  bigButton:
    "mt-4 bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-lg",
  closeButton:
    "absolute top-2 right-2 text-gray-600 hover:text-gray-900 text-3xl",
  section: "relative bg-gray-100 p-4 shadow-md rounded-lg w-80",
  modalWindow:
    "fixed inset-y-0 right-0 flex items-center justify-end p-4 transition-transform transform",
  visible: "translate-x-0 duration-1000",
  hidden: "translate-x-full",
  h2: "text-xl font-bold mb-4",
};

export const Details = () => {
  const { itemId } = useParams();
  const [isOpen, setIsOpen] = useState(true);
  const [isVisible, setIsVisible] = useState(false);
  const navigate = useNavigate();

  const handleClose = () => {
    setIsOpen(false);
    navigate("/");
  };

  const handleBackgroundClick = (event) => {
    if (event.target === event.currentTarget) {
      setIsOpen(false);
    }
  };
  useEffect(() => {
    setIsVisible(true);
  }, []);

  if (!isOpen) return null;

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

        <h2 className={classes.h2}>Details Component: {itemId}</h2>
        <p>Here is some test content for the details component.</p>

        <button onClick={handleClose} className={classes.bigButton}>
          Close Details
        </button>
      </div>
    </div>
  );
};
