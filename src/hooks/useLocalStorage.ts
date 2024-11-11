import { useEffect, useState, useCallback } from "react";

/**
 * Custom React hook for persisting state to localStorage.
 * @template T
 * @param {string} key - The localStorage key to use.
 * @param {T} [initialValue] - The initial value to use if the key doesn't exist.
 * @returns {[T | undefined, (value: T) => void, () => void]} - Returns the current value, a setter function, and a remove function.
 */
const useLocalStorage = <T>(
  key: string,
  initialValue?: T
): [T | undefined, (value: T) => void, () => void] => {
  // Initialize state with the value from localStorage or the provided initial value.
  const [storedValue, setStoredValue] = useState<T | undefined>(() => {
    try {
      const item = window.localStorage.getItem(key);
      return item ? JSON.parse(item) : initialValue;
    } catch (error) {
      console.warn(`Error reading localStorage key "${key}":`, error);
      return initialValue;
    }
  });

  /**
   * Sets a new value in localStorage and updates the state.
   * @param {T} value - The value to store.
   */
  const setValue = useCallback(
    (value: T) => {
      try {
        const valueToStore = value instanceof Function ? value(storedValue) : value;
        setStoredValue(valueToStore);
        window.localStorage.setItem(key, JSON.stringify(valueToStore));
        // Manually dispatch a storage event to trigger re-renders in the same tab.
        window.dispatchEvent(new StorageEvent('storage', { key, newValue: JSON.stringify(valueToStore) }));
      } catch (error) {
        console.warn(`Error setting localStorage key "${key}":`, error);
      }
    },
    [key, storedValue]
  );

  /**
   * Removes the value from localStorage and clears the state.
   */
  const removeValue = useCallback(() => {
    try {
      window.localStorage.removeItem(key);
      setStoredValue(undefined);
      // Manually dispatch a storage event to trigger re-renders in the same tab.
      window.dispatchEvent(new StorageEvent('storage', { key, newValue: null }));
    } catch (error) {
      console.warn(`Error removing localStorage key "${key}":`, error);
    }
  }, [key]);

  /**
   * Handles storage event changes to keep the React state in sync when
   * localStorage is updated from outside the app (e.g., another tab).
   */
  const handleStorageChange = useCallback(
    (event: StorageEvent) => {
      if (event.key === key) {
        try {
          const newValue = event.newValue ? JSON.parse(event.newValue) : undefined;
          setStoredValue(newValue);
        } catch (error) {
          console.warn(`Error parsing localStorage event for key "${key}":`, error);
        }
      }
    },
    [key]
  );

  // Effect to update state if the localStorage value changes outside React (e.g., another tab).
  useEffect(() => {
    window.addEventListener("storage", handleStorageChange);
    return () => {
      window.removeEventListener("storage", handleStorageChange);
    };
  }, [key, handleStorageChange]);

  return [storedValue, setValue, removeValue] as const;
};

export default useLocalStorage;
