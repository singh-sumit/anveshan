# Anveshan Site

Next.js marketing site for the Anveshan product.

## Run Locally

Prerequisites: Node.js 20+

1. Install dependencies: `npm install`
2. Start the development server: `npm run dev`
3. Open `http://localhost:3000`
4. Validate a production build: `npm run build`

## Structure

- `app/`: Next.js app router, route metadata, global layout
- `components/site/`: page sections and marketing components
- `components/ui/`: small reusable UI primitives
- `components/providers/`: client-side providers such as theming
- `lib/`: shared utilities
- `public/images/`: static assets served by Next

## Notes

- The site uses a lightweight shadcn-style component approach instead of ad hoc repeated button markup.
- Route-level SEO metadata is defined per page in the `app/` directory.
