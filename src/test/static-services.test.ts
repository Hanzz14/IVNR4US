import { readFileSync, readdirSync } from "node:fs";
import { resolve } from "node:path";
import { describe, expect, it } from "vitest";

const publicDirectory = resolve(process.cwd(), "public");
const pages = readdirSync(publicDirectory).filter((name) => name.endsWith(".html"));
function pageDocument(name: string) {
  return new DOMParser().parseFromString(readFileSync(resolve(publicDirectory, name), "utf8"), "text/html");
}

describe("Static website service destinations and contact data", () => {
  it("retains all eight numbered service destinations in the category", () => {
    const links = [...pageDocument("category3.html").querySelectorAll(".pd-list summary a")];
    expect(links.map((link) => link.getAttribute("href"))).toEqual(
      Array.from({ length: 8 }, (_, index) => `ivtherapy_${index + 1}.html`),
    );
  });

  it.each(pages)("uses only the supplied contact data on %s", (name) => {
    const document = pageDocument(name);
    const contact = document.querySelector(".ft-contact");
    expect(contact?.querySelectorAll("li").length).toBe(2);
    const address = contact?.querySelector("li:first-child span")?.textContent?.replace("Address", "");
    expect(address).toBe("4001 Concord PikeWilmington DE 19803");
    const phones = [...document.querySelectorAll('a[href^="tel:"]')];
    expect(phones.length).toBeGreaterThan(0);
    for (const phone of phones) {
      expect(phone.getAttribute("href")).toBe("tel:+13022751932");
      expect(phone.textContent).toContain("(302) 275-1932");
    }
    expect(document.querySelectorAll('a[href^="mailto:"], .social a').length).toBe(0);
  });
});