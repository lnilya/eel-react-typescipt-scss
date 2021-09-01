# eel-react-typescipt-scss
Template for a React-Typescript-SCSS setup with the python eel library

## Installation
Use yarn or npm to install.
```
yarn install
```

## Development
There are 3 scripts to start React, Eel or both respectively
If you are working with an IDE like PyCharm, it makes sense to only run React from console and use the IDE's function to run your python script in the debugger.

The 3 scripts are: 
```
yarn start:js
yarn start:eel
yarn start
```
## Production build
Your final production files will end up in the dist folder.
```
yarn build
```

**To change name or icon:**  
Edit the script build:eel in package.json 

# Ports and files
Eel is configured to run on localhost:1234 which you can change in index.py. React will run on localhost:3000 in development, to allow hot reloading. Therefore in development you will work on localhost:3000.

In production eel will host html/js on localhost:1234 inside a root folder located somewhere in your OS. 

In order to pass files, like images, loaded/processed/created by python to the live react application they will need to be copied into this folder. 

### eelutil.py
This file contains small helpers to deal with file handling 

