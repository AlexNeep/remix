import { Links, LiveReload, Outlet, Scripts } from "@remix-run/react";
import { LinksFunction } from "@remix-run/node";
import globalStylesUrl from "~/styles/global.css";
import globalMediumStylesUrl from "~/styles/global.css";
import globalLargeStylesUrl from "~/styles/global.css";

export const links: LinksFunction = () => {
  return [
    { rel: "stylesheet", href: globalStylesUrl },
    {
      rel: "stylesheet",
      href: globalMediumStylesUrl,
      media: "print, (min-width: 640px)",
    },
    {
      rel: "stylesheet",
      href: globalLargeStylesUrl,
      media: "screen and (min-width: 1024px)",
    },
  ];
};

export default function App() {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <title>Remix: So great, it's funny!</title>
        <Links />
      </head>
      <body>
        <LiveReload />
        <Outlet />
        <Scripts />
      </body>
    </html>
  );
}
