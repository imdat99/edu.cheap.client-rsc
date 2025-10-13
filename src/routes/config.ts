import type { unstable_RSCRouteConfig as RSCRouteConfig } from "react-router";

export function routes() {
  return [
    {
      id: "root",
      path: "",
      lazy: () => import("./root"),
      children: [
        {
          id: "landing-pages",
          path: "",
          lazy: () => import("./landing-pages"),
          children: [
            { index: true, id: "home", lazy: () => import("./landing-pages/pages/home") }
          ]
        },
        {
          id: "about",
          path: "about",
          lazy: () => import("./about"),
        },
        {
          id: "tags",
          path: "tags/:tagId",
          lazy: () => import("./about/ahihi"),
        }
      ],
    },
    // {
    //   id: "not-found",
    //   lazy: () => import("./root/ErrorBoundary").then((mod) => ({ Component: mod.ErrorBoundary })),
    // }
  ] satisfies RSCRouteConfig;
}
