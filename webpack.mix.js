let mix = require('laravel-mix');

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for the application as well as bundling up all the JS files.
 |有些文件不要用.js 方法进行编译，不需要了，所以文件直接copy过去了
 |---------------------------------------------------------------------------
 |
 */

mix.styles(['resources/assets/admin/javascript/bootstrap/css/bootstrap.min.css',
    'resources/assets/admin/javascript/font-awesome/css/font-awesome.min.css',
    'resources/assets/admin/javascript/font-awesome/css/font-awesome.min.css',
    'resources/assets/admin/javascript/jquery/datetimepicker/bootstrap-datetimepicker.min.css'
], 'public/static/admin/css/man.css')
 .styles(['resources/assets/admin/javascript/codemirror/lib/codemirror.css',
        'resources/assets/admin/javascript/codemirror/theme/monokai.css',
        'resources/assets/admin/javascript/summernote/summernote.css'
    ], 'public/static/admin/css/man-summer-code.css')
.styles(['resources/assets/admin/stylesheet/stylesheet.css'], 'public/static/admin/css/man_stylesheet.css')
.styles(['resources/assets/theme/default/javascript/bootstrap/css/bootstrap.min.css',
    'resources/assets/theme/default/javascript/font-awesome/css/font-awesome.min.css'
], 'public/static/default/css/default.css')
    .copy(['resources/assets/admin/javascript/bootstrap/fonts/*'],'public/static/admin/fonts/')
    .copy(['resources/assets/admin/javascript/font-awesome/fonts/*'],'public/static/admin/fonts/')
    .copy(['resources/assets/admin/images/*'],'public/static/admin/images/')
    .copy(['resources/assets/admin/stylesheet/fonts/*'],'public/static/admin/fonts/')
    .copy('resources/assets/admin/javascript/jquery/jquery-2.1.1.min.js','public/static/admin/js/jquery-2.1.1.min.js')
    .copy('resources/assets/admin/javascript/bootstrap/js/bootstrap.min.js','public/static/admin/js/bootstrap.min.js')
    .copy('resources/assets/admin/javascript/jquery/datetimepicker/moment/moment.min.js','public/static/admin/js/moment.min.js')
    .copy('resources/assets/admin/javascript/jquery/datetimepicker/moment/moment-with-locales.min.js','public/static/admin/js/moment-with-locales.min.js')
    .copy('resources/assets/admin/javascript/jquery/datetimepicker/bootstrap-datetimepicker.min.js','public/static/admin/js/bootstrap-datetimepicker.min.js')
    .copy('resources/assets/admin/javascript/common.js','public/static/admin/js/man_common.js')
    .copy(['resources/assets/admin/javascript/summernote/font/*'],'public/static/admin/fonts/')
    .copy('resources/assets/admin/javascript/codemirror/lib/codemirror.js','public/static/admin/js/codemirror.js')
    .copy('resources/assets/admin/javascript/codemirror/lib/xml.js','public/static/admin/js/xml.js')
    .copy('resources/assets/admin/javascript/codemirror/lib/formatting.js','public/static/admin/js/formatting.js')
    .copy('resources/assets/admin/javascript/summernote/summernote.js','public/static/admin/js/summernote.js')
    .copy('resources/assets/admin/javascript/summernote/summernote-image-attributes.js','public/static/admin/js/summernote-image-attributes.js')
    .copy('resources/assets/admin/javascript/summernote/opencart.js','public/static/admin/js/opencart.js')



    .copy(['resources/assets/theme/default/javascript/bootstrap/fonts/*'],'public/static/default/fonts/')
    .copy(['resources/assets/theme/default/javascript/font-awesome/fonts/*'],'public/static/default/fonts/')
    .copy(['resources/assets/theme/default/images/*'],'public/static/default/images/')
    .copy('resources/assets/theme/default/javascript/jquery/jquery-2.1.1.min.js','public/static/default/js/jquery-2.1.1.min.js')
    .copy('resources/assets/theme/default/javascript/bootstrap/js/bootstrap.min.js','public/static/default/js/bootstrap.min.js')
    .styles( 'resources/assets/theme/default/stylesheet/stylesheet.css','public/static/default/css/default_stylesheet.css')
    .copy('resources/assets/theme/default/javascript/common.js','public/static/default/js/default_common.js')
.styles(["resources/assets/theme/default/javascript/jquery/swiper/css/swiper.min.css","resources/assets/theme/default/javascript/jquery/swiper/css/opencart.css"],'public/static/default/css/a29800a97a45b61bf10d05e8479b832c.css')
.styles(["resources/assets/theme/default/javascript/jquery/datetimepicker/bootstrap-datetimepicker.min.css"],'public/static/default/css/051a425b9a1ee95f1c21a23e7e907165.css')
.styles(["resources/assets/theme/default/javascript/jquery/magnific/magnific-popup.css","resources/assets/theme/default/javascript/jquery/datetimepicker/bootstrap-datetimepicker.min.css"],'public/static/default/css/befbb768615c8995eeba66d7a8b906d5.css')
.styles(["resources/assets/theme/default/javascript/jquery/magnific/magnific-popup.css","resources/assets/theme/default/javascript/jquery/datetimepicker/bootstrap-datetimepicker.min.css"],'public/static/default/css/32e461c6825600da165dbd327f3e81d3.css')
.copy("resources/assets/theme/default/javascript/jquery/magnific/jquery.magnific-popup.min.js","public/static/default/js/jquery.magnific-popup.min.js")
.copy("resources/assets/theme/default/javascript/jquery/datetimepicker/moment/moment.min.js","public/static/default/js/moment.min.js")
.copy("resources/assets/theme/default/javascript/jquery/datetimepicker/moment/moment-with-locales.min.js","public/static/default/js/moment-with-locales.min.js")
.copy("resources/assets/theme/default/javascript/jquery/datetimepicker/bootstrap-datetimepicker.min.js","public/static/default/js/bootstrap-datetimepicker.min.js")
.copy("resources/assets/theme/default/javascript/jquery/datetimepicker/moment/locales.min.js","public/static/default/js/locales.min.js")
.styles(["resources/assets/theme/default/javascript/jquery/datetimepicker/bootstrap-datetimepicker.min.css"],'public/static/default/css/dcf9aa08cf6f56b669482911f15b32b7.css')
.styles(["resources/assets/theme/default/javascript/jquery/swiper/css/swiper.min.css","resources/assets/theme/default/javascript/jquery/swiper/css/opencart.css"],'public/static/default/css/dbe15e924be3b4423d95b09e31f1406e.css')
.copy("resources/assets/theme/default/javascript/jquery/swiper/js/swiper.jquery.js","public/static/default/js/swiper.jquery.js")
.styles(["resources/assets/theme/default/javascript/jquery/swiper/css/swiper.min.css","resources/assets/theme/default/javascript/jquery/swiper/css/opencart.css"],'public/static/default/css/6c9739a6aa7379e1ab46fa1a0873e123.css')
.styles(["resources/assets/theme/default/javascript/jquery/magnific/magnific-popup.css","resources/assets/theme/default/javascript/jquery/datetimepicker/bootstrap-datetimepicker.min.css"],'public/static/default/css/6a3e766f6c64d4477f3f4ff12433e83e.css')
;