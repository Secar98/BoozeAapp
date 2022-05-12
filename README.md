# BoozeApp
## Live deploy: [here](https://idas-boozeapp.netlify.app/)
<br/>

### This project was made with the Svelte framework and with help of the [CocktailDB](https://www.thecocktaildb.com/api.php) API
#### To install the project stand in the root folder and run:
```
npm install && npm run build
```
#### Then to start the application run:
```
npm start
```
#### This will start the application on http://localhost:8080
<br/>

#### Or run the application in dev mode:
```
npm run dev
```
#### This will start the application on http://localhost:8080
<br/>

#### If you want to run the application with docker stand in the root folder and use the following command to build the project into a docker image:
```
docker build -t svelte .
```
#### Then to start the application run:
```
docker run --rm --name=svelte-docker -p 8080:80 svelte
```
#### This will start the application on http://localhost:8080
