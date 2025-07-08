const mix = require('laravel-mix');

mix.setPublicPath('public');

/*
 * Configure watch to prevent loops by:
 * 1. Being specific about watch paths
 * 2. Explicitly ignoring output directories
 */
mix.js('src/app.js', 'public/src')
  .postCss('src/app.css', 'public/src', [
    require('postcss-nested'),
    require('autoprefixer')({
      overrideBrowserslist: ['> 1%', 'last 2 versions', 'not dead'],
      grid: true
    }),
    require('tailwindcss'),
  ])
  .options({
    processCssUrls: false
  })
  .copyDirectory('src/fonts', 'public/fonts')
  .webpackConfig({
    stats: {
      children: false
    },
    watchOptions: {
      ignored: [
        '**/node_modules/**',
        '**/public/**',
        '**/hot/**',
        '**/mix-manifest.json'
      ],
      followSymlinks: false,
      aggregateTimeout: 300 // Wait 300ms before rebuilding
    }
  })
  .browserSync({
    proxy: false,
    server: 'public',
    files: [
      'public/**/*.html',
      'public/src/**/*.css',
      'public/src/**/*.js',
      'src/**/*.js',
      'src/**/*.css'
    ]
  });

// Disable notifications
mix.disableNotifications(); 