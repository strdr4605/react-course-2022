# Lesson 4

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

```bash
npx create-react-app lesson4
cd lesson2
```

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

## Homework

Create a react app with following components: `<App />`, `<InputWithClean />`, `<AlertButton />`:

There should be 2 state, one for name and one for surname. 
User should see 2 `InputWithClean` components with coresponding `placeholder` and clean button.
When pressing a clean button the input value(state) for coresponding field should be cleaned.
When pressing `AlertButton` there should be an alert with name and surname; and the input values should be cleaned after.

Your `App` component should look like:

```js
function App() {
  // first state
  // second state
  
  // maybe some help functions to pass to children as props

  return (
    <div className="App">
      <h1>Lesson4</h1>
      <InputWithClean {/* some props here */}/>
      <InputWithClean {/* some props here */}/>
      <AlertButton {/* some props here */}/>
    </div>
  );
}

```

### Homework final result

https://user-images.githubusercontent.com/16056918/192537667-983421d6-cfdd-4efb-bf6d-2e8f6b0f4d7d.mov

## Links

- https://reactjs.org/docs/hooks-state.html
