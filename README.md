
## Todoooo App

## Installation

* npm install
* npm start
* visit `http://localhost:8080/`

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:8080](http://localhost:8080) to view it in the browser.


The page will reload if you make edits.<br />
You will also see any lint errors in the console.


## Get in the React mood 🚀 with these videos

Open [https://www.youtube.com/watch?v=1wZoGFF_oi4] What Is React And Why You Need To Know It

Open [https://www.youtube.com/watch?v=p6c7QA9ofvI&list=PLN3n1USn4xlntqksY83W3997mmQPrUmqM] React.js Beginner Series Introduction

Open [https://www.youtube.com/watch?v=InKlyPPSpXA] React useState

Open [https://www.youtube.com/watch?v=i3n1bkrkUww] the Net Ninja on REact useState Hook


## Tasks:

1) Have a look in ./data/todos. Here you will find an array of 3 todo's. Import the todos data into App.js  

2) Render each todo list item in the unordered list
    *bonus: add a checkbox for each item to show if a todo is completed or not.

3) Introduce the useState Hook and store the Todos from ./data/todos.js in state

4) Add a form for adding new todos

    it should consist of:
    
        an Input field 
        
        a submit button. 
        
        (help: in React we need to take care of our input in eg. text input fields, so we need to store the input event in an input state)

5) create a method for handling the onSubmit from our form. This method makes a copy of your todos state and appends our new todo to the new copy of todo's

6) create a method for deleting a todo from our Todo's. This method accepts the title of the todo and filters our todo out of our todos state.

7) BONUS: create a method that handles the individual checkboxes checked state, and toggles the boolean (isCompleted).

8) BONUS: add some css styling to the Todo app (Go crazy)
