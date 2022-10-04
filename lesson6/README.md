# Lesson 6

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

```bash
npx create-react-app lesson6
cd lesson6
```

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

## Homework

Create a react app with following components: `<App />`, `<Pokemon />`:

The app should have one state (a pokemon).
Using a `useEffect` hook and `fetch` do a request to [Pokémon API](https://pokeapi.co/) and get the desired pokemon and store it into the app state.
You should do a request for the pokemon name that starts with first letter of your name.  

Examples:  
If your name starts with `D` you may do a request to `https://pokeapi.co/api/v2/pokemon/ditto`.  
If your name starts with `T` you may do a request to `https://pokeapi.co/api/v2/pokemon/tentacool`.  

A list of pokemon names can be found [here](https://pokemon.fandom.com/wiki/List_of_Pok%C3%A9mon).

> Note: Make sure to do a request with lowercase name `https://pokeapi.co/api/v2/pokemon/ditto`, Not `https://pokeapi.co/api/v2/pokemon/Ditto`

After getting the pokemon display on webpage the following info:
- Pokemon name
- Pokemon base experience
- Weight
- Height
- Front image of pokemon (images can be found in `pokemonData.sprites.`)

Colors from example homework can be found [here](https://www.color-hex.com/color-palette/104284).

### Example of homework final result

<img width="461" alt="Screenshot 2022-10-04 at 12 23 31" src="https://user-images.githubusercontent.com/16056918/193784520-e399f72a-5189-4e82-97d9-fbe8eb477423.png">

## Links

- https://reactjs.org/docs/hooks-effect.html
- https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch
- https://pokeapi.co
- https://pokemon.fandom.com/wiki/List_of_Pok%C3%A9mon
- https://www.color-hex.com/color-palette/104284
