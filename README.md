# UI Sketchbook

- Toolkit to scaffold, build and deploy static UI prototypes.
- Works with npm scripts – no gulp, no grunt, no broccoli, no brunch.
- Brings some handy defaults and packages which should make prototyping in the browser quicker and more fun, like:
    - jade
    - sass
    - surge
    - colors
    - semantic UI
- can work as offline "native web app" (install-to-homescreen) with help of surge auto appcache

*REQUIRES NPM 3*

## To get started from zero...

...open your terminal and enter these lines:

```
mkdir my-new-thing
cd my-new-thing 
git init

# make a .gitignore
echo "dist/" > .gitignore
echo "node_modules/" >> .gitignore
echo "npm-debug.log" >> .gitignore

# generate a package.json
npm init --yes

# install the toolbox
npm install --save ui-sketchbook

# add script shortcuts to package.json

node_modules/npm-add-script/cmd.js --key "start" --value "node_modules/ui-sketchbook/scripts/start"

node_modules/npm-add-script/cmd.js --key "deploy" --value "node_modules/ui-sketchbook/scripts/deploy"

node_modules/npm-add-script/cmd.js --key "init" --value "node_modules/ui-sketchbook/scripts/init"



# generate scaffold skeleton
npm run init

npm start   # stuff should get compiled into a new dist folder
            # and a browser window should open

```

