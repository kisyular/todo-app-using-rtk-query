# A SIMPLE TODO APP USING REACT AND REDUX - RTK QUERY

This is a simple todo app using React and Redux - RTK Query. It is a simple todo app that allows you to add, delete and update todos. It uses the RTK Query library to make API calls to a mock API json-server.

## Installation

Before getting started, make sure you have json-server installed globally:

```bash
npm install -g json-server
```

Then, clone the repo and install the dependencies:
After cloning the repo, To install all the required packages specified in the `package.json` file, run the following command:

```bash
npm install
```

## Styling with Tailwind CSS

This app uses [Tailwind CSS](https://tailwindcss.com/) for styling. To learn more about Tailwind CSS, check out the [Tailwind CSS documentation](https://tailwindcss.com/docs).

To use it, you'll need to install and configure it:

```bash
npm i --dev tailwindcss
```

After installing Tailwind CSS, you'll need to create a Tailwind CSS configuration file:

```bash
npx tailwindcss init
```

This will create a `tailwind.config.js` file in the root directory of your project. Add the following to the `tailwind.config.js` file:

```js
/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{js,jsx,ts,tsx}'],
	theme: {
		extend: {},
	},
	plugins: [],
}
```

In your `index.css` file, add the following:

```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

## Usage

To start the application, run the following command:

```bash
npm start
```

This will start the application on port 3000. You can view the application by navigating to http://localhost:3000 in your browser.

To start the json-server, run the following command in a new terminal window:

```bash
json-server --watch db.json --port 3004
```

This will start the json-server on port 3004. You can view the json-server by navigating to http://localhost:3004/todos in your browser.

Enjoy!
