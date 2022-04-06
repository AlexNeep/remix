import { Outlet } from "@remix-run/react";

export default function jokesRoute() {
  return (
    <div>
      <h1>Jokes route</h1>
      <main>
        <Outlet />
      </main>
    </div>
  );
}
