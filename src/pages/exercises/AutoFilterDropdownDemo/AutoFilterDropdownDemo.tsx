import React, { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import AutoFilterDropdown from "../../../components/AutoFilterDropDown/AutoFilterDropdown.tsx";
import { User } from "../../../types/User.ts";

/**
 * Demo component showcasing the AutoFilterDropdown with user data.
 * @returns {JSX.Element} - Rendered demo component.
 */
const AutoFilterDropdownDemo: React.FC = () => {
  const [selectedUser, setSelectedUser] = useState<User | null>(null);

  const {
    data: users,
    isLoading,
    error,
  } = useQuery<User[]>({
    queryKey: ["users"],
    queryFn: async () => {
      const response = await fetch("https://jsonplaceholder.typicode.com/users");
      if (!response.ok) throw new Error("Failed to fetch data");
      return response.json();
    },
  });

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error fetching data.</p>;

  return (
    <div className="max-w-md mx-auto space-y-4 mt-10">
      <h2 className="text-2xl font-bold text-center">Auto-Filter Dropdown Demo</h2>

      {users && <AutoFilterDropdown data={users} filterKey="name" valueChange={user => setSelectedUser(user)} />}

      {selectedUser && (
        <div className="p-4 border rounded bg-gray-100 mt-4">
          <h3 className="font-bold">Selected User:</h3>
          <p>{selectedUser.name}</p>
          <p>{selectedUser.email}</p>
          <p>{selectedUser.phone}</p>
        </div>
      )}
    </div>
  );
};

export default AutoFilterDropdownDemo;
