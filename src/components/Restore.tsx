import React from "react";
import axios from "axios";

interface RestoreNotificationProps {
  type: "organization" | "contact";
  id: number;
  onRestoreSuccess: () => void;
}

const RestoreNotification: React.FC<RestoreNotificationProps> = ({
  type,
  id,
  onRestoreSuccess,
}) => {
  const API_URL = process.env.REACT_APP_API_URL;
  const handleRestore = async () => {
    try {
      const endpoint =
        type === "organization"
          ? `/organizations/${id}/restore`
          : `/contacts/${id}/restore`;

      const response = await axios.patch(`${API_URL}${endpoint}`);

      if (response.status === 200) {
        alert(
          `${
            type.charAt(0).toUpperCase() + type.slice(1)
          } restored successfully!`
        );
        onRestoreSuccess();
      }
    } catch (error) {
      console.error("Error restoring entity", error);
      alert(`Failed to restore ${type}.`);
    }
  };

  return (
    <div className="w-full bg-yellow-100 p-2 flex justify-between items-center rounded-md shadow-md mb-5">
      <span className="text-md">This {type} has been deleted.</span>
      <button
        onClick={handleRestore}
        className="ml-4 px-3 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition"
      >
        Restore
      </button>
    </div>
  );
};

export default RestoreNotification;
