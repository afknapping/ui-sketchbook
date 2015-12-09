# curly-weasel-moo

```
npm init   # will guide you through generating a package.json

npm install --save curly-weasel-moo   # install the toolbox


# make a .gitignore
echo "dist/" > .gitignore
echo "node_modules/" >> .gitignore
echo "npm-debug.log" >> .gitignore


git init && git add --all  && git ci -m "init"

./node_modules/curly-weasel-moo/scripts/init   # generate skeleton

npm start   # stuff should get compiled into a new dist folder
            # and a browser window should open

```

add these to package.json

```
"scripts": {
  "start": "node_modules/curly-weasel-moo/scripts/start",
  "deploy": "node_modules/curly-weasel-moo/scripts/deploy"
}
```