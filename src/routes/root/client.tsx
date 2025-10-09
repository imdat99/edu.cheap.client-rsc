import {
  Link,
  NavLink,
} from "react-router";
import RouteLoading from "./RouteLoading";

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html>
      <head>
        <meta charSet="utf-8" />
        <link href="https://fonts.googleapis.com/css2?family=Google+Sans+Text:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&family=Roboto+Flex:opsz,wght@8..144,100..1000&family=Roboto:ital,wght@0,100..900;1,100..900&display=swap" rel="stylesheet"></link>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" type="image/x-icon" href="/favicon.ico" />
      </head>
      <body className="font-sans antialiased">
        <header className="sticky inset-x-0 top-0 z-50 bg-background border-b">
          <div className=":uno: mx-auto container px-4 relative flex h-16 items-center justify-between gap-4 sm:gap-8">
            <div className="flex items-center gap-4">
              <Link to="/">React Router 🚀</Link>
              <nav>
                <ul className="gap-4 flex">
                  <li>
                    <NavLink
                      to="/"
                      className="text-sm font-medium hover:opacity-75 aria-[current]:opacity-75"
                    >
                      Home
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/about"
                      className="text-sm font-medium hover:opacity-75 aria-[current]:opacity-75"
                    >
                      About
                    </NavLink>
                  </li>
                </ul>
              </nav>
              <RouteLoading />
            </div>
          </div>
        </header>
        {children}
      </body>
    </html>
  );
}


