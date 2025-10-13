import { Link, NavLink } from "react-router";
import RouteLoading from "./RouteLoading";
import LayoutNavLink from "./LayoutNavLink";

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html>
      <head>
        <meta charSet="utf-8" />
        <link
          href="https://fonts.googleapis.com/css2?family=Google+Sans+Text:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&family=Roboto+Flex:opsz,wght@8..144,100..1000&family=Roboto:ital,wght@0,100..900;1,100..900&display=swap"
          rel="stylesheet"
        ></link>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" type="image/x-icon" href="/favicon.ico" />
      </head>
      <body className=":uno: font-sans antialiased min-h-screen bg-light xl:text-[16px] text-[14px] text-gray-800 flex flex-col min-h-svh">
        <header
          className="[grid-area:header] z-10 min-h-14  bg-dark py-2 !z-[100]"
          style={{ position: "sticky", top: 0, maxHeight: "calc(0px + 100vh)" }}
        >
          <div className="mx-auto w-full h-full [:where(&)]:max-w-7xl flex items-center container">
            <button
              type="button"
              className="relative items-center font-medium justify-center gap-2 whitespace-nowrap disabled:opacity-75 dark:disabled:opacity-75 disabled:cursor-default disabled:pointer-events-none h-10 text-sm rounded-lg w-10 inline-flex -ml-2.5 bg-transparent hover:bg-zinc-800/5 dark:hover:bg-white/15 text-zinc-400 hover:text-zinc-800 dark:text-zinc-400 dark:hover:text-white     shrink-0 lg:hidden"
              data-flux-button="data-flux-button"
              x-data=""
              x-on:click="document.body.hasAttribute('data-show-stashed-sidebar') ? document.body.removeAttribute('data-show-stashed-sidebar') : document.body.setAttribute('data-show-stashed-sidebar', '')"
              data-flux-sidebar-toggle="data-flux-sidebar-toggle"
              aria-label="Toggle sidebar"
            >
              <svg
                className="shrink-0 [:where(&)]:size-5"
                data-flux-icon=""
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                aria-hidden="true"
                data-slot="icon"
              >
                <path
                  fillRule="evenodd"
                  d="M2 6.75A.75.75 0 0 1 2.75 6h14.5a.75.75 0 0 1 0 1.5H2.75A.75.75 0 0 1 2 6.75Zm0 6.5a.75.75 0 0 1 .75-.75h14.5a.75.75 0 0 1 0 1.5H2.75a.75.75 0 0 1-.75-.75Z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
            <a href="https://tino.vn">
              <img
                className="dark:block hidden max-h-[32px]"
                src="https://tino.vn/assets/logo/logo-mobile-light.png"
              />
              <img
                className="dark:hidden max-h-[32px]"
                src="https://tino.vn/assets/logo/logo-mobile-light.png"
              />
            </a>
            <div className="flex-1" data-flux-spacer="" />
            <div className="max-lg:hidden">
              <LayoutNavLink />
            </div>
            <div className="pl-4 pr-4">
              <button
                type="button"
                className="btn btn-secondary"
                data-flux-button="data-flux-button"
                data-flux-group-target="data-flux-group-target"
                aria-haspopup="true"
                aria-controls="lofi-dropdown-a7be98f2ff78c8"
                aria-expanded="false"
              >
                Tài khoản
              </button>
            </div>
          </div>
        </header>
        {children}
      </body>
    </html>
  );
}
