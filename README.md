Read it

React is a tool for building UI components.
React creates a VIRTUAL DOM in memory.


Scripts needed to add in your html file from CDN
<script 
    crossorigin 
    src="https://unpkg.com/react@18/umd/react.development.js">
</script>
<script 
    crossorigin 
    src="https://unpkg.com/react-dom@18/umd/react-dom.development.js">
</script>

What is crossorigin

NPM - manages packaged
is a package manager and a software register but it's also a place where developers can find, build and manage code packages

npm init
test command: jest

Package.json is created after u give all the input 
package.json is configuration for npm

bundler - bundles your app to push it to production
web pack 
weet
parcel - best library  

"dependencies": Packages required by your application in production.
"devDependencies": Packages that are only needed for local development and testing.

To add an entry to the "devDependencies" attribute of a package.json file, on the command line, run the following command:

npm install <package-name> --save-dev


https://parceljs.org/
# Parcel
- Dev build
- Local Server
- HMR = Hot Module replacement
- File Watching Algorithm - written in C++
- Faster Builds because of Caching
- Image optimization
- Minification
- Bundling
- Compressing
- consistent Hashing - read abt it
- code splitting
- Differential bundling - support older browsers
- Diagnostics
- Error handling
- HTTPs
- Tree Shaking Algorithm - remove unused code
- different build  for dev and production bundlers

production build
npx parcel build index.html
remove main: app.js from package.json 

//browserlist.dev