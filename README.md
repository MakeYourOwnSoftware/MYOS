# Dr. Yu's IMYOS

Free custom webpages, websites, and apps for teachers, built by Hyeonho Henry Yu, Ph.D.

## Files
- `index.html` : the page
- `styles.css` : colors, fonts, layout
- `projects.js` : **gallery list. Edit this file to add new projects.**
- `script.js` : builds the gallery cards
- `assets/avatar/` : avatar images

## Add a project
Open `projects.js`.
- **Featured** (top section, large cards): the `FEATURED` list. Keep it to 2 or 3.
- **Gallery** (filterable cards): the `PROJECTS` list. Copy a block, paste it at the top, change the details.
  Set `category` to one of: Learning, Games, Classroom Tools, Teacher Prep, Languages.
  Filter buttons and counts update automatically. A new category name creates a new filter button.
- The gallery shows 6 cards first, then a "Show all" button. Change `PAGE` at the top of `script.js` to adjust.
## Thumbnails
- Leave `image: ""` and the card shows an automatic screenshot of the live site (free WordPress mShots service). The very first load of a new link can take a minute while the screenshot is generated.
- For a hand-picked view, save a 16:9 image in `assets/projects/` and set `image: "assets/projects/your-file.webp"`.

## Publish on GitHub Pages
1. Create a new repository and upload all files (keep the folder structure).
2. Settings > Pages > Source: "Deploy from a branch", Branch: `main`, folder `/ (root)`.
3. The site appears at `https://<username>.github.io/<repo-name>/` in a minute or two.
