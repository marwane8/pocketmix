import type { MetaFunction } from "@remix-run/node";

export const meta: MetaFunction = () => {
  return [
    { title: "New Remix SPA" },
    { name: "description", content: "Welcome to Remix (SPA Mode)!" },
  ];
};

export default function Index() {
  return (
    <div className="font-sans p-4">
      <h1 className="text-3xl">Welcome to Light Click Photo</h1>
      <h1 className="text-9xl font-gwendy  text-primary font-extrabold">Light Click Photo</h1>
      <h1 className="text-9xl font-playfair italic font-extrabold">Asalami!</h1>
      <button className="btn btn-accent bg-accent">Accent</button>
    </div>
  );
}
