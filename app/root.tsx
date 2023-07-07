import { cssBundleHref } from "@remix-run/css-bundle";
import type { LinksFunction } from "@remix-run/node";
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "@remix-run/react";
import { Navbar } from "flowbite-react";
import CSS from "./css/app.css"

export const links: LinksFunction = () => [
  ...(cssBundleHref ? [{ rel: "stylesheet", href: cssBundleHref }] : []),
  { rel: "stylesheet", href: CSS },
  { rel: 'preconnect', href:"https://fonts.googleapis.com"},
  { rel: 'preconnect', href:"https://fonts.gstatic.com", crossOrigin:'anonymous'},
  { rel: "stylesheet", href:"https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&display=swap"}
];

export default function App() {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body>
        <header>
          <div className="border-b-2">
            <Navbar
              fluid={true}
              rounded={true}
            >
              <Navbar.Brand href="/">
                <img
                  src="/logo.svg"
                  className="mr-3 h-6 sm:h-9"
                  alt="Incodingplus Logo"
                />
                <span className="self-center whitespace-nowrap text-gray-900 text-2xl font-semibold dark:text-white" style={{
                  fontFamily:"'Inter', sans-serif"
                }}>
                  INCODINGPLUS
                </span>
              </Navbar.Brand>
              <Navbar.Toggle />
              <Navbar.Collapse>
                <Navbar.Link
                  href="/navbars"
                  active={true}
                >
                  Sign In
                </Navbar.Link>
                <Navbar.Link href="/navbars">
                <svg className="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 14 20">
                  <path d="M12.133 10.632v-1.8A5.406 5.406 0 0 0 7.979 3.57.946.946 0 0 0 8 3.464V1.1a1 1 0 0 0-2 0v2.364a.946.946 0 0 0 .021.106 5.406 5.406 0 0 0-4.154 5.262v1.8C1.867 13.018 0 13.614 0 14.807 0 15.4 0 16 .538 16h12.924C14 16 14 15.4 14 14.807c0-1.193-1.867-1.789-1.867-4.175ZM3.823 17a3.453 3.453 0 0 0 6.354 0H3.823Z"/>
                </svg>
                </Navbar.Link>
              </Navbar.Collapse>
            </Navbar>
          </div>
        </header>
        <Outlet />
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  );
}
