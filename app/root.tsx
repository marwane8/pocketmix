import {
  ClientLoaderFunctionArgs,
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  useLoaderData,
  useNavigate,
  useRouteError,
} from "@remix-run/react";
import "./tailwind.css";
import Navbar from "./components/nav/navbar";
import Footer from "./components/footer";
import Container from "./components/container";

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
      <div className="h-20"/> 
      <div>
        <Outlet />
      </div>
      <Footer />
    </div>
  );
}

export function HydrateFallback() {
  return <p>Loading...</p>;
}

export function ErrorBoundary() {
  const error: any = useRouteError();
  const navigate = useNavigate();
  return (
    <>
      <div className="flex h-screen-svh flex-col">
        <Navbar path="" />
        <div className="flex h-full w-full">
          <Container className="flex h-fit flex-col rounded-2xl  p-12 text-gray-800">
            <h1 className="pb-2 text-center text-2xl font-semibold">
              <span className="text-3xl text-primary">{error.status} </span>{" "}
              <br />
              {error.statusText}
              <br />
            </h1>
            {error.status == 404 ? (
              <h1 className=" text-center text-lg">
                The page you requested doesn&apos;t exist.
              </h1>
            ) : (
              <h1 className=" text-center text-lg">
                Sorry, something went wrong
              </h1>
            )}

            <button
              onClick={() => navigate("/")}
              className="link text-secondary font-semibold text-lg m-auto pb-5 "
            >
              Go to the Home Page
            </button>

            <div className="collapse m-auto my-2 w-full max-w-screen-lg">
              <input type="checkbox" />
              <div className="text-md collapse-title w-fit bg-black bg-opacity-5 m-auto pr-4 text-center font-medium">
                See Error Details
              </div>
              <div className="collapse-content m-auto overflow-x-scroll bg-base-200 py-2">
                {error.data ? (
                  <pre className="sm:text-md text-sm text-red-600">
                    {error.data}
                  </pre>
                ) : (
                  <pre className="sm:text-md text-sm text-red-600">
                    {error.stack}
                  </pre>
                )}
              </div>
            </div>
          </Container>
        </div>
        <Footer />
      </div>
    </>
  );
}
