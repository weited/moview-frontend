# Moview Forum Frontend

This project is frontend of Moview Forum.

> node version 18

## Explain pull request flow

Development work flow https://zora.atlassian.net/jira/software/projects/MOVIEW/pages

### Create branch (check details from Development work flow)

- The local develop branch needs to be synchronized with the remote first
- First of all, create a branch by clicking the ticket by opening the Jira task board and selecting Development: Create branch on the right or create a branch under the Bitbucket Moview Frontend project
- Only write the code under the branch you created, not to develop or master branch
- Regularly git rebase the latest develop branch (to avoid a series of problems caused by too many conflicts later)

### What script must be run before create pull request

- `git rebase`  
  rebase your branch. Rebasing is required if any new pull requests were merged after you had taken the feature branch. After rebasing, any conflicts that arise need to be resolved, and the code needs to be pushed back to the remote branch.
- `npm run format`
  Modify the non-standard problem of local code automatically
- `npm run lint`
  Find code errors that still exist and fix them manually until there are no errors
- `git commit -m`
  Commit code in your feature branch, and use right format for commit message

### When create pull request

- Please check the diff carefully when you pull request, and solve the conflict
- In the pull request Description, please describe the pull request feature/modification correctly
- In the pull request, please try to attach screenshots, so that code reviewers can understand
- Please make a pull request only after everything has been checked

## Available Scripts

In the project directory, you can run:

### `npm install`

Install all packages needed for this project.

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
