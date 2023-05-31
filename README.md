# OpenAI SQL Query Generator React Next Web App
## Overall Description
## File Descritions
### .env 
add in your openAI API Keys here
## index.ts (Backend)
TypeScript script that uses the Express framework to create a server and handle HTTP requests. Here is a breakdown of the code:

1. The script imports necessary modules and types from various libraries:
   - `express`: The main Express module.
   - `Application`, `Request`, `Response`: Types from the `express` module to define the types of the Express application, request, and response objects.
   - `cors`: Middleware for handling Cross-Origin Resource Sharing (CORS).
   - `Configuration`, `OpenAIApi`: Types from the OpenAI library for configuring the OpenAI API.
   - `dotenv`: A module for reading environment variables from a `.env` file.
   
2. The script loads environment variables from a `.env` file using `dotenv.config()`. The `.env` file should contain an `API_KEY` variable.

3. The script defines the `PORT` constant, which is set to `8000`. This is the port on which the server will listen for incoming requests.

4. The script initializes the Express application by calling `express()` and assigns it to the `app` variable.

5. The `cors` middleware is added to the application using `app.use(cors())`. This allows cross-origin requests.

6. The `express.json()` middleware is added to the application using `app.use(express.json())`. This middleware parses incoming requests with JSON payloads.

7. A `Configuration` object is created using the `API_KEY` obtained from the environment variables.

8. An `OpenAIApi` object is created using the `Configuration` object.

9. The script defines a route handler for POST requests to "/completions". This handler is an asynchronous function that takes a request (`req`) and response (`res`) object.

10. Inside the route handler, the `openai.createChatCompletion()` method is called to create a chat-based completion using the OpenAI API. It sends a message to the GPT-3.5 model, with the user's message as the content.

11. The completion response is sent back to the client by extracting the completed message from `completion.data.choices[0].message` and sending it as the response body.

12. If an error occurs during the API call or any other operation within the try block, an error message is logged to the console, and a "Server error" response with status code 500 is sent back to the client.

13. Finally, the server starts listening on the specified `PORT`, and a message is logged to the console indicating that the server is running.

This code sets up a server using Express, handles POST requests to the "/completions" route, and interacts with the OpenAI API to create chat-based completions. The completed message is then sent back as the response.
## src (Frontend)
## App.tsx
React component that represents an application for generating SQL queries using the OpenAI API. Let's break down the code:

1. The code imports the necessary modules and components:
   - `React`: The main React module.
   - `useState`: A React hook for managing state in functional components.
   - `CodeDisplay`: A custom component that displays code.
   - `MessagesDisplay`: A custom component that displays chat messages.

2. The code defines an interface `ChatData` that represents a chat message with two properties: `role` (string) and `content` (string). This interface is used to define the type of the `chat` state.

3. The code defines a functional component `App` using an arrow function syntax.

4. Inside the `App` component, two state variables are declared using the `useState` hook:
   - `value` represents the current value of an input field and is initialized as an empty string.
   - `chat` represents an array of chat messages and is initialized as an empty array.

5. The `getQuery` function is an asynchronous function that sends a POST request to the "/completions" route of the server (assuming it's running on "http://localhost:8000"). It includes the user's message in the request body. The response is then parsed as JSON and logged to the console. After that, the user's message and the received completion are added to the `chat` state using the `setChat` function.

6. The `clearChat` function resets the `value` and `chat` states to their initial values (empty string and empty array, respectively).

7. Two variables are defined using the `filter` method of the `chat` state:
   - `filteredUserMessages` contains only the chat messages where the `role` is "user".
   - `latestCode` contains the most recent chat message where the `role` is "assistant". It is retrieved using the `pop` method to get the last element from the filtered array.

8. The component returns JSX, representing the structure and elements of the application:
   - A `<div>` with a class name "app" wraps the entire component.
   - An `<h2>` heading displays the title of the application.
   - The `MessagesDisplay` component is rendered, passing the `filteredUserMessages` as a prop.
   - An `<input>` element is rendered, bound to the `value` state, and updates the `value` state when its value changes.
   - The `CodeDisplay` component is rendered, passing the `latestCode?.content` as a prop. If `latestCode` is defined, its `content` is displayed; otherwise, an empty string is displayed.
   - A `<div>` with a class name "button-container" wraps the two buttons.
   - Two `<button>` elements are rendered with event handlers: `getQuery` for the "Get Query" button and `clearChat` for the "Clear Chat" button.

9. The `App` component is exported as the default export of the module.

In summary, this code sets up a React application that allows users to enter messages, sends them to the server to generate SQL queries using the OpenAI API, and displays the conversation history and the generated code. Users can get a query based on their input and clear the chat history.
## Index.tsx
This code is the entry point of a React application. Let's break it down:

1. The code imports the necessary modules and components:
   - `React`: The main React module.
   - `ReactDOM`: The React DOM library, specifically the `createRoot` and `render` functions.
   - `'./index.css'`: An external CSS file that is imported to apply styles to the application.
   - `App`: The default exported component from the `'./App'` module, representing the main application component.

2. The code calls the `createRoot` function from `ReactDOM` and assigns the result to the `root` constant. This function creates a new root-level React rendering tree.

3. The `createRoot` function takes an argument that is the root element where the React application will be mounted. It uses `document.getElementById('root')` to find the DOM element with the id "root" and casts it as an `HTMLElement`.

4. The `root.render()` method is called to render the React application inside the root element.
   - The rendering is wrapped in `<React.StrictMode>`, which is a development mode feature that performs additional checks and warnings to help detect potential problems in the application.
   - The `<App />` component is rendered as the main component of the application.

In summary, this code sets up the entry point for a React application. It creates a root-level rendering tree using `ReactDOM.createRoot`, finds the root DOM element in the HTML document, and renders the `<App />` component inside it. The rendering is wrapped in `<React.StrictMode>` to enable additional development mode checks. The CSS file is imported to apply styles to the application.
## Index.css
css file containing app styling rules
## Component - CodeDisplay
This code exports a React component named `CodeDisplay`, which is responsible for rendering a code display area. Let's break down the code:

1. The code imports the necessary module:
   - `React`: The main React module.

2. The code defines an interface `CodeDisplayProps`, which represents the expected props for the `CodeDisplay` component. It has a single property:
   - `text`: A string representing the code to be displayed.

3. The `CodeDisplay` component is defined as a functional component using arrow function syntax. It takes the `text` prop as an argument.

4. Inside the component, JSX is used to define the structure and elements of the code display area:
   - A `<div>` element with the class name "code-display" serves as the container for the code display area.
   - Inside the container, there is another `<div>` element with the class name "buttons", which represents the buttons section of the code display area. It contains three child `<div>` elements with the class names "button first", "button middle", and "button last". These elements are placeholders for buttons and can be styled accordingly.
   - Below the buttons section, there is another `<div>` element with the class name "code-output". It represents the area where the code will be displayed. Inside this element, a `<p>` element is used to display the `text` prop, which represents the code.

5. Finally, the `CodeDisplay` component is exported as the default export of the module, making it available for use in other components.

In summary, this code exports a `CodeDisplay` component that renders a code display area. It receives a `text` prop representing the code to be displayed and uses JSX to structure and render the code display area with placeholders for buttons and an area to display the code text.
#### Component - MessageDisplay
#### Component - MessagesDisplay

## Example Screenshots
![image](https://github.com/petermartens98/OpenAI-SQL-Query-Generator/assets/87671757/ac962678-8cc8-4fff-a93f-6f04458a9d65)
![image](https://github.com/petermartens98/OpenAI-SQL-Query-Generator/assets/87671757/36dc8672-b51c-45a9-85fb-63f045939ea9)
![image](https://github.com/petermartens98/OpenAI-SQL-Query-Generator/assets/87671757/8645c539-b6ab-46d1-9fb6-070d811e046e)
![image](https://github.com/petermartens98/OpenAI-SQL-Query-Generator/assets/87671757/38ee4828-f7fb-477a-a70a-850eeae4561e)


