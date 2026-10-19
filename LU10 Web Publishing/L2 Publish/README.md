# Publishing your Personal Project to GitHub

- Make a backup of your finished project (or in progress)
- Your home page needs to be called `index.html`
- Create a GitHub account
    - If you don’t already have a account [create one](https://github.com/signup)
- [Download git](https://git-scm.com/downloads), make sure it is for your OS
    - You will need git to do the terminal commands
- [Follow Git Hub Pages site](https://pages.github.com/)
    - Read the whole page and watch the video
    - Make sure the repository name follows username.github.io
    - Make sure your project has a index.html file in root.
    - We are using terminal.
    - Run the following commands from the directory you want to host. If its your first time pushing from a new computer, you will

```bash
# !!Make sure you are in the directory of your project!!
git init
git add .
git commit -m "message"
git remote add origin https://github.com/username/username.github.io.git
git branch -M main
git push -u origin main
```

> Since this is your first time pushing from this computer, you will have to login once you try to push. After you login, you will be able to push your changes to GitHub.

## Seeing your Page

- Your changes might up to five minutes to take effect.
- To find your page, go to your GitHub repository settings and go to the GitHub Pages section. You will see a URL where your page is hosted.

## Keeping your page up to date

If you want to make changes to change your website.
Make your changes to your project locally, then run the following commands from the directory you want to host.

```bash
git add .
git commit -m "a descriptive message"
git push
```

## What to turn in

- The URL of your hosted page
- The URL to **YOUR** GitHub repository
