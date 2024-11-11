import { useState, useEffect } from "react";

/**
 * Custom hook for filtering data based on a query string.
 * @template T
 * @param {T[]} data - The data array to be filtered.
 * @param {string} query - The search query string.
 * @param {keyof T} filterKey - The key of the object to filter on.
 * @returns {T[]} - The filtered data based on the search query.
 */
const useAutoFilter = <T,>(data: T[], query: string, filterKey: keyof T): T[] => {
  const [filteredData, setFilteredData] = useState<T[]>([]);

  useEffect(() => {
    const lowercasedQuery = query.toLowerCase();
    setFilteredData(data.filter(item => (item[filterKey] as string).toLowerCase().includes(lowercasedQuery)));
  }, [query, data, filterKey]);

  return filteredData;
};

export default useAutoFilter;
