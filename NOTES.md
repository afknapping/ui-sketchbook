
## Inital testing scripts

- compile jade
- compile sass
- use sass dep (colors)
- build wrapper:
    - compile jade, sass
- deploy dist/ to curly-weasel-moo.surge.sh
- build and deploy on travis


## meta

- bump and publish
- keep deps up to date with greenkeeper


---

### OLD RAMSCH

https://medium.com/greenkeeper-blog/one-simple-trick-for-javascript-package-maintainers-to-avoid-breaking-their-user-s-software-and-to-6edf06dc5617#.53hcidkq3

    "test": "echo \"Error: no test specified\" && exit 1",
    "build-css": "node-sass src/styles.scss dist/assets/css/styles.css --output-style expanded  --source-comments true --source-map true",
    "postbuild-css": "postcss --config .postcssrc.json --replace dist/assets/css/styles.css",
    "watch-css": "nodemon -e scss -x \"npm run build-css\"",
    "build-jade": "jade src/index.jade --out dist",
    "watch-jade": "nodemon -e jade -x \"npm run build-jade\"",
    "run-browsersync": "browser-sync start --files dist --server dist ",

    "start": "frankentest npm run helloworld"
