import type { unstable_RSCRouteConfig as RSCRouteConfig } from "react-router";

export function routes() {
  return [
    {
      id: "root",
      path: "",
      lazy: () => import("./root"),
      children: [
        {
          id: "home",
          index: true,
          lazy: () => import("./home"),
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
  ] satisfies RSCRouteConfig;
}
