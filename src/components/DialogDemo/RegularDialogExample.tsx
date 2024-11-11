import React, { useState } from 'react';
import Dialog from './Dialog';

const RegularDialogExample: React.FC = () => {
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  return (
    <div>
      <button
        onClick={() => setIsDialogOpen(true)}
        className="bg-purple-500 text-white px-4 py-2 rounded hover:bg-purple-600"
      >
        Open Regular Info Dialog
      </button>

      <Dialog
        isOpen={isDialogOpen}
        onClose={() => setIsDialogOpen(false)}
        isModal={false}
        header={<h2>Information</h2>}
        body={<p>This is a regular dialog. You can still interact with the rest of the page while it’s open.</p>}
        footer={
          <button
            onClick={() => setIsDialogOpen(false)}
            className="bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-600"
          >
            Close
          </button>
        }
      />
    </div>
  );
};

export default RegularDialogExample;
