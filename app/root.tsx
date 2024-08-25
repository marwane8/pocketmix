import {
  ClientLoaderFunctionArgs,
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  useLoaderData,
} from "@remix-run/react";
import "./tailwind.css";
import Navbar from "./components/nav/navbar";
import Footer from "./components/footer";

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body className="bg-neutral text-stone-900 font-playfair">
        {children}
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
}

export const clientLoader = async ({ request }: ClientLoaderFunctionArgs) => {
  const { pathname } = new URL(request.url);
  const path = pathname.split("/")[2] || "home";
  return { path };
};

export default function App() {
  const { path } = useLoaderData<typeof clientLoader>();
  return (
    <div className="h-screen-svh">
      <Navbar path={path} />
      <div>
        <Outlet />
      </div>
      <Footer/>
    </div>
  );
}

export function HydrateFallback() {
  return <p>Loading...</p>;
}
