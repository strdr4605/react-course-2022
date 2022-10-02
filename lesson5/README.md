# Lesson 5

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

```bash
npx create-react-app lesson5
cd lesson5
```

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

## Homework

Create a react app with following components: `<App />`, `<NameInput />`:

There should be 2 state, one for name and one for surname.  
Using `useEffect` hook, when both name and surname are entered by user, the document title should changed to `Hey, ${name} ${surname}`.  
If name or surname is not provided title should be `Both name and surname`.  

Also, as a side effect print in console how many times the `<App />` component rerenders

Your `App` component should look like:


### Homework final result

https://user-images.githubusercontent.com/16056918/193446641-d1f79a68-db15-4373-a239-6c3d6265bff7.mov


## Links

- https://reactjs.org/docs/hooks-effect.html
