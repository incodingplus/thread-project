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
  { rel: "stylesheet", href: CSS }
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
          <div>
            <Navbar
              fluid={true}
              rounded={true}
            >
              <Navbar.Brand href="https://flowbite.com/">
                <img
                  src="https://flowbite.com/docs/images/logo.svg"
                  className="mr-3 h-6 sm:h-9"
                  alt="Flowbite Logo"
                />
                <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
                  Flowbite
                </span>
              </Navbar.Brand>
              <Navbar.Toggle />
              <Navbar.Collapse>
                <Navbar.Link
                  href="/navbars"
                  active={true}
                >
                  Home
                </Navbar.Link>
                <Navbar.Link href="/navbars">
                  About
                </Navbar.Link>
                <Navbar.Link href="/navbars">
                  Services
                </Navbar.Link>
                <Navbar.Link href="/navbars">
                  Pricing
                </Navbar.Link>
                <Navbar.Link href="/navbars">
                  Contact
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
