// src/components/RemoveComponent.tsx
import React from "react";
import useLocalStorage from "../../hooks/useLocalStorage";

const RemoveComponent: React.FC = () => {
  const [, , removeStoredValue] = useLocalStorage<string>("exampleKey");

  const handleRemoveValue = () => {
    removeStoredValue();
  };

  return (
    <div className="p-4 border rounded bg-red-100">
      <button onClick={handleRemoveValue} className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600">
        Remove Value
      </button>
    </div>
  );
};

export default RemoveComponent;
