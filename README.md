# Open sourcing my website code!!

Hi, there! This is the source code for my website(s). A portfolio, blog, and an dedicated resume site.
I've been developing all of these projects in tandem, and I'm moving them into a monorepo for:

- Sharing styled components to maintain consistent visuals between the three sites.
- Shared library of helper functions.
- Shared configurations (typescript and tailwind mostly).
- I like the flxibility of having these three apps separate, so I can develop and deploy them separately from each other.

## 🏁 Turborepo

Currently, the project uses Turborepo to handle task running. I'm not doing anything too fancy with the configurations and it runs things in order pretty well.
The main draw was it's docker integration. The prune command saves some head scratching on how to install dependencies.

**NOTE:** The TUI currently has issues running on my laptop, but stream mode seems to do fine!
<br />

## 🚀 Astro

My frontend framework of choice! All these sites are starting out static, and I plan to add a sprinkle of SSR features.
The Contetnt Collections feature is amazing to use and offeres a great DX for managing content and page routing.
Having the flexibility to use React compoenents is also a godsend for times when a component needs reactivity.  
<br />

## 🐇 Directus

Though I love Astro's Content Collection feature to bits, it did keep me from coding in public/open sourcing the site code.
Unpublished content, or even content in general, being part of the source code just didn't sit well with me.
I've begun the process of moving over site info and assets to a dedicated backend service to create better separation of concerns.

Directus was chosen as the backend because:

- It's open source, therefore I can self host it!
- I liked how it handles image optimization.
- It can limit image transformations to user defined presets.
- Setting up public and protected API routes was relatively stragihtforward.
- Offers a javascript SDK.
- Mirrors the database — the data isn't tied to the service!

## 🔒 Dotenv Vault

I'm working on figuring out a secrets management solution between my machine and my server.
Dotenv Vault seems to be a good secure solution, so far. The similiarities to git's CLI usage feels familiar.  
<br />
