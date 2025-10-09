import { client } from "api/rpcclient";
import { HomeCounter } from "./HomeCounter";

export default function Home() {
  return (
    <main className="mx-auto max-w-screen-xl px-4 py-8 lg:py-12">
      <article className="prose mx-auto">
        {/* <h1>{i18n.t("home.title")}</h1> */}
        <p>
          This is a simple example of a React Router application using React
          Server Components (RSC) with Vite. It demonstrates how to set up a
          basic routing structure and render components server-side.
        </p>
      </article>
      <HomeCounter />
    </main>
  );
}
export const loader = async () => {
  return import.meta.env.SSR ? {
    fallback: {
      count: await client.getCounter(),
    },
  } : {};
};