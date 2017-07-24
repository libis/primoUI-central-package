# primoUI-central-package

## build
```bash
gulp run --view CENTRAL_PACKAGE --browserify --proxy http://limo.q.libis.be
```

## Important
install `npm install babel-plugin-transform-html-import-to-string --save-dev`
and add it to `gulp/tasks/buildCustomJs.js` in primo-explore-devenv


Patch file for `buildCustomJs.js`
```bash
diff --git a/gulp/tasks/buildCustomJs.js b/gulp/tasks/buildCustomJs.js
index 11f2f90..b4d5f8c 100644
--- a/gulp/tasks/buildCustomJs.js
+++ b/gulp/tasks/buildCustomJs.js
@@ -59,7 +59,7 @@ function buildByBrowserify() {
             buildParams.viewJsDir()+'/node_modules'
         ]
     })
-        .transform("babelify",{presets: ["es2015"]})
+        .transform("babelify",{presets: ["es2015"], plugins: ["transform-html-import-to-string"]})
         .bundle()
         .pipe(fs.createWriteStream(buildParams.customPath()));
 }
 ```
 
 
