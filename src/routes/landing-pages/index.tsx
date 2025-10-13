import { client } from "api/rpcclient";
import { Outlet } from "react-router";
import RootHeader from "routes/landing-pages/Header";
import Footer from "./Footer";
export default function Home() {
    return (
      <>
        <RootHeader/>
        <main className="[grid-area:main] 0 [[data-flux-container]_&]:px-0  relative flex-1">
          <Outlet />
        </main>
        <Footer/>
      </>
    );
}
export const loader = async () => {
    return import.meta.env.SSR
        ? {
              fallback: {
                  count: await client.getCounter(),
              },
          }
        : {};
};
