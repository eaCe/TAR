const mix = require('laravel-mix');
require('laravel-mix-copy-watched');

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel applications. By default, we are compiling the CSS
 | file for the application as well as bundling up all the JS files.
 |
 */
mix.setPublicPath('app/dist')
  .browserSync({
    proxy: 'http://dev.url/',
    port: 3002,
  });

mix.js('resources/assets/scripts/app.js', 'scripts')
  .postCss('resources/assets/styles/app.css', 'styles',
    [
      require("tailwindcss"),
    ]);

mix.copyWatched('resources/assets/images/**', 'app/dist/images')
  .copyWatched('resources/assets/fonts/**', 'app/dist/fonts')

mix.disableNotifications();

mix.sourceMaps(false, 'source-map')
  .version();
