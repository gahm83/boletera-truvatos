const mix = require('laravel-mix');

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
    processCssUrls: true,
    postCss: [
      require('autoprefixer')
    ]
  })
  .copyDirectory('src/fonts', 'public/src/fonts')
  .webpackConfig({
    stats: {
      children: false
    }
  });

// Disable BrowserSync since it's causing issues
// .browserSync({
//   proxy: false,
//   server: 'public',
//   files: [
//     'public/**/*.html',
//   ],
//   notify: false,
//   open: false
// }); 

// Disable notification
mix.disableNotifications(); 