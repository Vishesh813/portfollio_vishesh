# GitHub Pages Deployment Guide

## Automatic Deployment (Recommended)

This project is configured for automatic deployment to GitHub Pages using GitHub Actions.

### Setup Steps:

1. **Push your code to GitHub:**
   ```bash
   git add .
   git commit -m "Add GitHub Pages deployment"
   git push origin main
   ```

2. **Enable GitHub Pages:**
   - Go to your repository on GitHub
   - Click on "Settings" tab
   - Scroll down to "Pages" section
   - Under "Source", select "GitHub Actions"
   - Save the settings

3. **The deployment will happen automatically** when you push to the main branch.

## Manual Deployment

If you prefer manual deployment:

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Deploy to GitHub Pages:**
   ```bash
   npm run deploy
   ```

3. **Configure GitHub Pages:**
   - Go to repository Settings > Pages
   - Select "Deploy from a branch"
   - Choose "gh-pages" branch
   - Select "/ (root)" folder

## Your Portfolio URL

Once deployed, your portfolio will be available at:
`https://yourusername.github.io/portfollio_vishesh/`

## Troubleshooting

- If the site doesn't load, check the Actions tab in your GitHub repository for any deployment errors
- Make sure the base path in `vite.config.js` matches your repository name
- Ensure all assets are loading correctly by checking the browser console
