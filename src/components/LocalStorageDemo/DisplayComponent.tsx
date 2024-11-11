// src/components/DisplayComponent.tsx
import React from "react";
import useLocalStorage from "../../hooks/useLocalStorage";

const DisplayComponent: React.FC = () => {
  const [storedValue] = useLocalStorage<string>("exampleKey");

  return (
    <div className="p-4 border rounded bg-gray-100">
      <h3 className="text-lg font-bold">Stored Value:</h3>
      <p className="text-gray-700">{storedValue ?? "No value set"}</p>
    </div>
  );
};

export default DisplayComponent;
