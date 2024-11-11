import React, { useState } from "react";
import Dialog from "./Dialog";

const ConfirmationDialogExample: React.FC = () => {
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  return (
    <div>
      <button
        onClick={() => setIsDialogOpen(true)}
        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
      >
        Open Modal Confirmation Dialog
      </button>

      <Dialog
        isOpen={isDialogOpen}
        onClose={() => setIsDialogOpen(false)}
        header={<h2>Confirmation</h2>}
        body={<p>Are you sure you want to remove this team?</p>}
        footer={
          <div className="flex space-x-2">
            <button onClick={() => setIsDialogOpen(false)} className="bg-gray-500 text-white px-4 py-2 rounded">
              No
            </button>
            <button onClick={() => setIsDialogOpen(false)} className="bg-red-500 text-white px-4 py-2 rounded">
              Yes
            </button>
          </div>
        }
      />
    </div>
  );
};

export default ConfirmationDialogExample;
