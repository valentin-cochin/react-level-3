import React, { useState } from "react";
import useAutoFilter from "../../hooks/useAutoFilter";

interface AutoFilterDropdownProps<T> {
  data: T[];
  filterKey: keyof T;
  valueChange: (selectedItem: T) => void;
}

/**
 * Splits the text based on the query and wraps matching parts in <strong> tags for bold display.
 * @param {string} text - The text to highlight.
 * @param {string} highlight - The query to match.
 * @returns {React.ReactNode} - JSX with bolded matching parts.
 */
const highlightText = (text: string, highlight: string): React.ReactNode => {
  const regex = new RegExp(`(${highlight})`, "gi");
  return text
    .split(regex)
    .map((part, i) => (part.toLowerCase() === highlight.toLowerCase() ? <strong key={i}>{part}</strong> : part));
};

/**
 * Generic auto-filter dropdown component for filtering and selecting data items.
 * @template T
 * @param {AutoFilterDropdownProps<T>} props - Component props.
 * @returns {React.ReactNode} - Rendered dropdown component.
 */
const AutoFilterDropdown = <T,>({
  data,
  filterKey,
  valueChange,
}: AutoFilterDropdownProps<T>): React.ReactNode => {
  const [query, setQuery] = useState("");
  const filteredData = useAutoFilter(data, query, filterKey);

  return (
    <div className="relative">
      <input
        type="text"
        placeholder="Type to search..."
        value={query}
        onChange={e => setQuery(e.target.value)}
        className="border p-2 rounded w-full"
      />
      {query && (
        <ul className="absolute bg-white border rounded mt-1 w-full max-h-40 overflow-y-auto">
          {filteredData.length > 0 ? (
            filteredData.map((item, index) => (
              <li
                key={index}
                onClick={() => {
                  valueChange(item);
                  setQuery(""); // Clear the input after selection
                }}
                className="p-2 cursor-pointer hover:bg-gray-200"
              >
                {highlightText(item[filterKey] as string, query)}
              </li>
            ))
          ) : (
            <li className="p-2 text-gray-500">No results found</li>
          )}
        </ul>
      )}
    </div>
  );
};

export default AutoFilterDropdown;
