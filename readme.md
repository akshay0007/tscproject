extensions---
debugger for chrome
eclips keymat
ESLint
Live server
path intellisense
prettier-code formatter
TSLint
========================
compiling all files every time--
tsc 
tsc -w
tsc --watch
========================
comple project compilation
tsc --init
for exculding use
"exclude": [
    "node_modules","*sic.ts"
  ]
}
lib-->specif lib to include
"sourceMap": true, for debug tsc files


===========================
important configuration--

 "outDir": "./dist",                        /* Redirect output structure to the directory. */
"rootDir": "./src",  

 "sourceMap": true, ==>genrate map file and debug all the files in ts 
 "target": "ES6",                          /* Specify ECMAScript target version: 'ES3' (default), 'ES5', 'ES2015', 'ES2016', 'ES2017', 'ES2018', 'ES2019', 'ES2020', or 'ESNEXT'. */
"module": "commonjs", 

=====================
for dubugging in vs code---
go to lauch.json -->inside .vscode==>and change port to 3000
then run -->start debugging
