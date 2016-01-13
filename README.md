# curly-weasel-moo

terminal:

```
mkdir my-new-thing
cd my-new-thing 
git init

npm init   # will guide you through generating a package.json

npm install --save curly-weasel-moo   # install the toolbox


# make a .gitignore
echo "dist/" > .gitignore
echo "node_modules/" >> .gitignore
echo "npm-debug.log" >> .gitignore
```

add these to package.json

```
"scripts": {
  "start": "node_modules/curly-weasel-moo/scripts/start",
  "deploy": "node_modules/curly-weasel-moo/scripts/deploy"
}
```

terminal again:

```
./node_modules/curly-weasel-moo/scripts/init   # generate skeleton and init git repo

npm start   # stuff should get compiled into a new dist folder
            # and a browser window should open

```

