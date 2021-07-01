# Instructions to Update Website

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



