// 实现这个项目的构建任务
const { src, dest, parallel, series, watch } = require('gulp')
const sass= require('gulp-sass')
const loadPlugins= require('gulp-load-plugins')
const plugins = loadPlugins()
const del = require('del')
const browserSync = require('browser-sync')
const bs = browserSync.create()

const clean = () => {
  return del(['dist'])
}

// const data = {
//   menus: [],
//   pkg: require('package.json'),
//   date: new Date()
// }

const style = () => {
  return src('src/assets/styles/*.scss', { base: 'src' })
  .pipe(sass({ outputStyle: 'expanded' }))
  .pipe(dest('dist'))
}

const script = () => {
  return src('src/assets/scripts/*.js', { base: 'src' })
  .pipe(plugins.babel({presets: ['@plugins.babel/preset-env']}))
  .pipe(dest('dist'))
}

const page = () => {
  return src('src/*.html', { base: 'src' })
  .pipe(plugins.swig())
  .pipe(dest('dist'))
}

const image = () => {
  return src('src/assets/images/**', { base: 'src' })
  .pipe(plugins.imagemin())
  .pipe(dest('dist'))
}

const font = () => {
  return src('src/assets/fonts/**', { base: 'src' })
  .pipe(plugins.imagemin())
  .pipe(dest('dist'))
}

const extra = () => {
  return src('public/**', { base: 'public' })
  .pipe(dest('dist'))
}

const serve = () => {
  watch('src/assets/styles/*.scss', style)
  watch('src/assets/scripts/*.js', script)
  watch('src/*.html', page)
  // watch('src/assets/images/**', image)
  // watch('src/assets/fonts/**', font)
  // watch('public/**', extra)
  watch([
    'src/assets/images/**',
    'src/assets/fonts/**',
    'public/**'
  ], bs.reload)
  bs.init({
    notify: false,
    // port: 6666,
    files: 'dist/**',
    server: {
      baseDir: ['dist', 'src', 'public'],
      routes: {
        'node_modules': 'node_modules'
      }
    }
  })
}

const compile = parallel(style, script, page)

const build = series(clean, parallel(compile,  image, font, extra))
const dev = series(compile, extra)

module.exports = {
  compile,
  build,
  serve,
  dev
}
