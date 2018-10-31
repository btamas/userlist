# Solution

I created a generic List component that waits for data array and it renders the list based on the renderItem template.

# Project structure

You can find source files under `src` directory.
The requested component is under `component/userlist`. It uses list component (`component/list`) to display the requested list and user model (`model/user`) to know what is user.
The api request is made in user page (`pages/user`) with user api handler (`api/user`) and the list is provided to user list component.

# Build instructions

- Requirements

  - node v8+
  - npm v5+

- Install modules

  - `npm i`

- Development

  - `npm run serve`
  - Open `https://localhost:8080` in a browser

- Production
  - `npm run build`
  - Serve built files from `dist` directory
    Example:
    - `npm i --no-save http-server`
    - `node_modules/.bin/http-server dist/ -p 1337`

# Side note

- I tested it in Chrome and Firefox. Maybe for IE11 some kind of fetch polyfill should be added later.
