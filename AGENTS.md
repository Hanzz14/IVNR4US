<!-- LOVABLE:BEGIN -->
> [!IMPORTANT]
> This project is connected to [Lovable](https://lovable.dev). Avoid rewriting
> published git history — force pushing, or rebasing/amending/squashing commits
> that are already pushed — as it rewrites history on Lovable's side and the
> user will likely lose their project history.
>
> Commits you push to the connected branch sync back to Lovable and show up in
> the editor, so keep the branch in a working state.
<!-- LOVABLE:END -->

- Keep uploaded IV therapy pages as standalone files under `public/` and wire service links directly to their numbered HTML filenames, because the site is delivered as self-contained static pages.
- Keep supplied logo variants in CDN asset pointers and select header variants through the existing solid-nav state; inline the resulting URLs in standalone pages so each static page works independently.
- Use native details/summary service rows for the category's full eight-service list, matching the product pages while retaining direct numbered-page navigation.
