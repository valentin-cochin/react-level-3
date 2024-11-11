import React, { useState } from "react";
import Dialog from "./Dialog";
import ComputerScreenWithCodeImage from '../../assets/computer-screen-with-code.jpg';


const InfoDialogExample: React.FC = () => {
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  return (
    <div>
      <button
        onClick={() => setIsDialogOpen(true)}
        className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
      >
        Open Modal Info Dialog
      </button>

      <Dialog
        isOpen={isDialogOpen}
        onClose={() => setIsDialogOpen(false)}
        isModal={false}
        header={<h2>Code !!!</h2>}
        body={<img src={ComputerScreenWithCodeImage} alt="Example" className="w-full h-auto" />}
        footer={
          <button onClick={() => setIsDialogOpen(false)} className="bg-gray-500 text-white px-4 py-2 rounded">
            Close
          </button>
        }
      />
    </div>
  );
};

export default InfoDialogExample;
