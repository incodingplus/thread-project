import { cssBundleHref } from "@remix-run/css-bundle";
import { json, type LoaderArgs, type LinksFunction } from "@remix-run/node";
import {
  Link,
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  useLoaderData,
} from "@remix-run/react";
import { Button, Navbar } from "flowbite-react";
import CSS from "./css/app.css";
import MainCSS from './css/main.css';
import { useEffect } from "react";
import { Bell } from "./asset/Svg";

export const links: LinksFunction = () => [
  ...(cssBundleHref ? [{ rel: "stylesheet", href: cssBundleHref }] : []),
  { rel: "stylesheet", href: CSS },
  { rel: 'preconnect', href: "https://fonts.googleapis.com" },
  { rel: 'preconnect', href: "https://fonts.gstatic.com", crossOrigin: 'anonymous' },
  { rel: "stylesheet", href: "https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&display=swap" },
  { rel: "stylesheet", href: MainCSS }
];

interface iLoader{
  title:string;
  tags:string[];
  ntags:string[];
}

export const loader = async ({ request, context }:LoaderArgs) => {
  const res = await fetch(`http://localhost:3000/sample/taglist.json`);
  const data = await res.json()
  return json<iLoader[]>(data);
}

export default function App() {
  const data = useLoaderData<typeof loader>();
  useEffect(() => {
    const vhFun = () => {
      document.documentElement.style.setProperty('--vh', `${window.innerHeight / 100}px`);
    };
    window.addEventListener('resize', vhFun);
    vhFun();
    return () => window.removeEventListener('resize', vhFun);
  }, []);
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body>
        <header className="sticky top-0">
          <div className="border-b-[1px]">
            <Navbar
              fluid={true}
              rounded={true}
            >
              <Navbar.Brand href="/">
                <img
                  src="/logo.svg"
                  className="mr-3 h-9 sm:h-9"
                  alt="Incodingplus Logo"
                />
                <span className="self-center whitespace-nowrap text-gray-900 text-2xl font-semibold dark:text-white">
                  INCODINGPLUS
                </span>
              </Navbar.Brand>
              <div
                className={`h-9 flex gap-4 text-left font-medium items-center`}
              >
                <Link className="text-sm leading-normal text-blue-600" to="/signin">Sign In</Link>
                <div
                  className="h-full w-1 origin-center border-gray-200 border-l-[1px]"
                />
                <Link to="/bell">
                  <Bell />
                </Link>
              </div>
              {/* <Navbar.Toggle />
              <Navbar.Collapse>
                <Navbar.Link
                    href="/navbars"
                    active={true}
                  >
                    Sign In
                  </Navbar.Link>
                  <Navbar.Link href="/navbars">
                  
                  </Navbar.Link>
                
              </Navbar.Collapse> */}
            </Navbar>
          </div>
          <div
            className={`flex items-center justify-center gap-8 p-3 text-center font-medium text-gray-900 border-gray-200 border-b-[1px] `}
          >
            {data.map((v, i) => <div key={i}>
              <p className="text-sm leading-normal">{v.title}</p>
            </div>)}
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
