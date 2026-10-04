import { createFileRoute, redirect } from "@tanstack/react-router";

// The site is a self-contained static page served from /index.html.
export const Route = createFileRoute("/")({
  beforeLoad: () => {
    throw redirect({ href: "/index.html" });
  },
});
