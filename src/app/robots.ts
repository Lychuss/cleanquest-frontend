export default function robots() {
  return {
    rules: { userAgent: "*", allow: "/" },
    sitemap: "https://cleanquest-game.vercel.app/sitemap.xml",
  };
}