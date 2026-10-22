import { createFileRoute, redirect } from "@tanstack/react-router";

// The site is a self-contained static page served from /index.html.
export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "IVNR | IV Nutritional Rehabilitation" },
      { name: "description", content: "IVNR IV therapies, nutritional rehabilitation, and clinician-led care in Wilmington, Delaware." },
      { property: "og:title", content: "IVNR | IV Nutritional Rehabilitation" },
      { property: "og:description", content: "Explore IVNR therapies and clinician-led care in Wilmington, Delaware." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  beforeLoad: () => {
    throw redirect({ href: "/index.html" });
  },
});
