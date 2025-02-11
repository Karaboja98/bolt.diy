/** @type {import('@remix-run/dev').AppConfig} */
module.exports = {
  serverBuildPath: "../build/server", // Pfad zum Server-Build für Cloudflare Pages Functions
  serverModuleFormat: "esm", // ESM ist für Cloudflare Workers empfohlen
  // Ignoriere leere CSS-Module Warnung (optional, falls Sie CSS-Module verwenden)
  serverDependenciesToBundle: ['@remix-run/cloudflare-pages']
};
