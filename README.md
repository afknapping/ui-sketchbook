# curly-weasel-moo

terminal:

```
mkdir my-new-thing
cd my-new-thing 
git init

# make a .gitignore
echo "dist/" > .gitignore
echo "node_modules/" >> .gitignore
echo "npm-debug.log" >> .gitignore

# generate a package.json
npm init

# install the toolbox
npm install --save curly-weasel-moo

# add script shortcuts to package.json

node_modules/curly-weasel-moo/node_modules/npm-add-script/cmd.js --key "start" --value "node_modules/curly-weasel-moo/scripts/start"

node_modules/curly-weasel-moo/node_modules/npm-add-script/cmd.js --key "deploy" --value "node_modules/curly-weasel-moo/scripts/deploy"

node_modules/curly-weasel-moo/node_modules/npm-add-script/cmd.js --key "init" --value "node_modules/curly-weasel-moo/scripts/init"



# generate scaffold skeleton
npm run init

npm start   # stuff should get compiled into a new dist folder
            # and a browser window should open

```

