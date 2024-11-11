import { Outlet } from "react-router-dom";

export default function ExercisesPage() {
  return (
    <div className="p-4 text-lg">
      <h2 className="text-4xl">Demonstrations</h2>
      <Outlet />
    </div>
  );
}
