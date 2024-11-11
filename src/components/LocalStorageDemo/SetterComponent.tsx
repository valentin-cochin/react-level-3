// src/components/SetterComponent.tsx
import React, { useState } from "react";
import useLocalStorage from "../../hooks/useLocalStorage";

const SetterComponent: React.FC = () => {
  const [inputValue, setInputValue] = useState("");
  const [, setStoredValue] = useLocalStorage<string>("exampleKey");

  const handleSetValue = () => {
    setStoredValue(inputValue);
    setInputValue("");
  };

  return (
    <div className="p-4 border rounded bg-blue-100">
      <input
        type="text"
        value={inputValue}
        onChange={e => setInputValue(e.target.value)}
        placeholder="Enter a value"
        className="p-2 border rounded w-full mb-2"
      />
      <button onClick={handleSetValue} className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
        Set Value
      </button>
    </div>
  );
};

export default SetterComponent;
