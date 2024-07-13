import { FC, useState } from "react";

import { ErrorComponent } from "§/entities/ErrorComponent";

export const ErrorButton: FC = () => {
  const [showComponent, setShowComponent] = useState<boolean>(false);

  const toggleComponent = () => {
    setShowComponent((prevShowComponent) => !prevShowComponent);
  };

  return (
    <div>
      <button
        onClick={toggleComponent}
        className="px-4 py-2 rounded-lg bg-red-300 text-white-500 hover:bg-red-400 focus:outline-none focus:ring-2 focus:ring-red-500"
      >
        ErrorButton
      </button>
      {showComponent && <ErrorComponent />}
    </div>
  );
};
