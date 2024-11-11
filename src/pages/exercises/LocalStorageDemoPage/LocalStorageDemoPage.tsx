import React from "react";
import DisplayComponent from "../../../components/LocalStorageDemo/DisplayComponent";
import SetterComponent from "../../../components/LocalStorageDemo/SetterComponent";
import RemoveComponent from "../../../components/LocalStorageDemo/RemoveComponent";

const LocalStorageDemoPage: React.FC = () => {
  return (
    <div className="max-w-md mx-auto space-y-4 mt-10">
      <h2 className="text-2xl font-bold text-center">LocalStorage Demo</h2>
      <SetterComponent />
      <RemoveComponent />
      <DisplayComponent />
    </div>
  );
};

export default LocalStorageDemoPage;
