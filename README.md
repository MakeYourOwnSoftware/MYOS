# Dr. Yu's IMYOS

Free custom webpages, websites, and apps for teachers, built by Hyeonho Henry Yu, Ph.D.

## Files
- `index.html` : the page
- `styles.css` : colors, fonts, layout
- `projects.js` : **gallery list. Edit this file to add new projects.**
- `script.js` : builds the gallery cards
- `assets/avatar/` : avatar images

## Add a project to the gallery
Open `projects.js`, copy the Phonogram Studio block, paste it after it (add a comma between blocks), and change the details.
For a screenshot, put an image in `assets/projects/` and set `image: "assets/projects/your-file.webp"`.

## Publish on GitHub Pages
1. Create a new repository and upload all files (keep the folder structure).
2. Settings > Pages > Source: "Deploy from a branch", Branch: `main`, folder `/ (root)`.
3. The site appears at `https://<username>.github.io/<repo-name>/` in a minute or two.
