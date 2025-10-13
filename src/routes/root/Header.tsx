import { Link } from 'react-router'
import LayoutNavLink from './LayoutNavLink'

const RootHeader = () => {
  return (
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
            <Link to="/">
              <img
                className="dark:block hidden max-h-[32px] w-full"
                src="https://my-next-app.imdat2999.workers.dev/assets/images/file-white.svg"
              />
              <img
                className="dark:hidden max-h-[32px] w-full"
                src="https://my-next-app.imdat2999.workers.dev/assets/images/file-white.svg"
              />
            </Link>
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
  )
}

export default RootHeader