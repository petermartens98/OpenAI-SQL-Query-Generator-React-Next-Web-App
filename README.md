# OpenAI SQL Query Generator React Next Web App
## Overall Description

This codebase consists of a web application that allows users to generate SQL queries using the OpenAI API. It includes both backend and frontend components.

The backend, implemented in TypeScript with the Express framework, sets up a server that handles HTTP requests. It uses the OpenAI API to create chat-based completions for generating SQL queries. The server listens on port 8000 and exposes a POST route "/completions" for receiving user messages and returning query completions.

The frontend, built with React, provides a user interface for entering messages and displaying the conversation history and generated code. The main component, App.tsx, manages the application state and includes functions for sending messages to the server and clearing the chat history. The frontend communicates with the backend using HTTP requests to retrieve query completions.

The codebase also includes additional components: CodeDisplay for rendering the generated SQL code, and MessagesDisplay and MessageDisplay for rendering chat messages.

In summary, this codebase combines the Express backend with the OpenAI API and a React frontend to create a web application for generating SQL queries based on user input. It provides a user-friendly interface for entering messages, displays the conversation history, and presents the generated SQL code.
## File Descritions

1. `.env`: This file is used to store the OpenAI API keys. It is not included in the code snippet, but it should be present in the project directory and contain an `API_KEY` variable.

2. `index.ts` (Backend): This TypeScript script sets up a server using the Express framework to handle HTTP requests. It imports necessary modules and types, including Express, CORS, dotenv, and types from the OpenAI library. The script initializes the Express application, adds middleware for CORS and JSON parsing, configures the OpenAI API using the API key from the environment variables, defines a route handler for POST requests to "/completions", and starts the server on port 8000.

3. `App.tsx` (Frontend): This file defines the main React component of the application. It imports necessary modules and components, including React, useState, CodeDisplay, and MessagesDisplay. The component manages the state for user input, chat messages, and code output. It defines functions for sending user messages to the server, clearing the chat history, and filtering and retrieving the latest code message. The component renders JSX elements representing the application structure, including the MessagesDisplay component, an input field, the CodeDisplay component, and buttons for getting queries and clearing the chat.

4. `index.tsx`: This file serves as the entry point of the React application. It imports necessary modules, including React and ReactDOM, as well as the App component. It uses the createRoot function from ReactDOM to create a root-level React rendering tree and renders the App component inside it, attaching it to the root DOM element.

5. `index.css`: This CSS file contains styling rules for the application.

6. `CodeDisplay` (Component): This file exports a React component named CodeDisplay. The component receives a text prop representing the code to be displayed and renders a code display area with a container, buttons section, and code output area.

7. `MessageDisplay` (Component): This file exports a React component named MessageDisplay. The component receives a message prop representing a chat message and renders a single chat message with an icon and the content.

8. `MessagesDisplay` (Component): This file exports a React component named MessagesDisplay. The component receives a userMessages prop representing an array of chat messages and renders a collection of chat messages using the MessageDisplay component.

Overall, this code sets up a React application with a backend server using Express. The frontend allows users to enter messages, sends them to the server, and displays the conversation history and generated code. The backend interacts with the OpenAI API to generate SQL queries based on user input.

## Example Screenshots
![image](https://github.com/petermartens98/OpenAI-SQL-Query-Generator/assets/87671757/ac962678-8cc8-4fff-a93f-6f04458a9d65)
![image](https://github.com/petermartens98/OpenAI-SQL-Query-Generator/assets/87671757/36dc8672-b51c-45a9-85fb-63f045939ea9)
![image](https://github.com/petermartens98/OpenAI-SQL-Query-Generator/assets/87671757/8645c539-b6ab-46d1-9fb6-070d811e046e)
![image](https://github.com/petermartens98/OpenAI-SQL-Query-Generator/assets/87671757/38ee4828-f7fb-477a-a70a-850eeae4561e)
