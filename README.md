# Docs for Website Changes

These instructions help to refresh my memory whenever I have to update my website. Check it out here: https://www.stuffibuild.com/

Reference: https://create-react-app.dev/docs/deployment/#github-pages-https-pagesgithubcom

1. Assuming that the site was already created and I just need to update it with new content:
    ```
    npm run deploy
    # Automatically runs predeploy before deploy
    ```

These steps were already done at the beginning:
1. Add `homepage` to `package.json`.
    ```
    "homepage": "https://www.stuffibuild.com",
    ```

2. Install `gh-pages`. 
    ```
    yarn add gh-pages
    ```

3. Add `deploy` to `scripts` in `package.json`.
    ```
    "scripts": {
        "predeploy": "npm run build",
        "deploy": "gh-pages -d build",
    ```

4. Ensure that the GitHub pages option in project is set to use the `gh-pages` branch.

5. Configure a [custom domain](https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site) with GitHub pages by adding a `CNAME` file to the `public` folder.

## Make Changes on a Fresh Machine
1. Clone this repo.
2. Install `npm` and `Node.js` using [nvm](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm)
3. Install dependencies, which creates a `node_modules/` folder.
    ```
    yarn install
    ```
4. Add a `.env` in the same directory as `package.json` and populate the following fields:
    ```
    REACT_APP_GOOGLE_ANALYTICS_ID=
    REACT_APP_EMAILJS_SERVICE_ID=
    REACT_APP_EMAILJS_TEMPLATE_ID=
    REACT_APP_EMAILJS_USER_ID=
    ```
5. Build the project, which creates a `build/` folder.
    ```
    npm run build
    ```
6. Compile and run the webpage on localhost to check any modifications.
    ```
    npm start
    ```
7. If happy with changes, deploy the new version to GitHub pages.
    ```
    npm run deploy
    ```
