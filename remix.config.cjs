/** @type {import('@remix-run/dev').AppConfig} */
module.exports = {
  ignoredRouteFiles: ["**/.*"],
  serverBuildPath: "functions/[[path]].js", // Angepasst für CF Pages Functions!
  serverModuleFormat: "esm",
  serverDependenciesToBundle: ['@remix-run/cloudflare-pages', 'istextorbinary'], // 'istextorbinary' als Workaround für 'path'
  postcss: true, // Wichtig für SCSS und Tailwind CSS (falls verwendet)
  unocss: true,  // UnoCSS aktivieren
  plugins: [
    ...(module.exports.plugins || []), // Wichtig, um bestehende Plugins zu behalten
    require('esbuild-sass-plugin')(), // SCSS Unterstützung hinzufügen
  ],
};
