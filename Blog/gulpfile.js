import { src, dest, watch, series } from "gulp";
import * as darkSass from 'sass';
import gulpsSass from 'gulp-sass';

const sass = gulpsSass(darkSass)


export function css(done){
    src('src/scss/app.scss', {sourcemaps:true})
        .pipe(sass().on('error', sass.logError))
        .pipe(dest('build/css', {sourcemaps: true}))

    done()
}

export function dev(){
    watch('src/scss/**/*.scss', css)
}