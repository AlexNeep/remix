import { Outlet, Links } from "@remix-run/react";
import { LinksFunction } from "@remix-run/node";
import jokesStyleUrl from "~/styles/jokes.css";

export const links: LinksFunction = () => {
  return [{ rel: "stylesheet", href: jokesStyleUrl }];
};

export default function jokesRoute() {
  return (
    <div>
      <head>
        <Links />
      </head>
      <h1>Jokes route</h1>
      <main>
        <Outlet />
      </main>
    </div>
  );
}
