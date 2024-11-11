import React from "react";
import InfoDialogExample from "../../../components/DialogDemo/InfoDialogExample.tsx";
import ConfirmationDialogExample from "../../../components/DialogDemo/ConfirmationDialogExample.tsx";
import RegularDialogExample from "../../../components/DialogDemo/RegularDialogExample.tsx";

const DialogDemoPage: React.FC = () => {
  return (
    <div className="space-y-4 p-4">
      <h1 className="text-2xl font-bold">Dialog Component Demo</h1>
      <ConfirmationDialogExample />
      <InfoDialogExample />
      <RegularDialogExample />
    </div>
  );
};

export default DialogDemoPage;
