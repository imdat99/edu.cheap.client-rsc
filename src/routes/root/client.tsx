import { Link, NavLink } from "react-router";
import RouteLoading from "./RouteLoading";
import LayoutNavLink from "./LayoutNavLink";
import RootHeader from "./Header";

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
      <body className=":uno: font-sans antialiased min-h-screen bg-sky-50 xl:text-[16px] text-[14px] text-gray-800 flex flex-col min-h-svh">
        <RootHeader/>
        {children}
      </body>
    </html>
  );
}
