# quotecollector

Live Site URL: "https://joy21fs.github.io/quotecollector"
Code URL: "https://github.com/joy21fs/quotecollector/tree/master"

Using **React** to create components and build landing page,


Using **react-router-dom** to navigate between the homepage and subpages
- **import { Link } from 'react-router-dom';**
- changing the anchor tags with hrefs to **<Link to={"/" + link} />**


Using **react-router-hash-link** to navigate to different sections on the landing page (homepage)
_Reference:_--https://github.com/remix-run/react-router/issues/394#issuecomment-220221604
Also built with Bootstrap

Deploying React app onto Github
_Reference:_https://github.com/gitname/react-gh-pages
- adding the following to **package.json**
  - **"homepage"**: "https://joy21fs.github.io/quotecollector"
  - "scripts": {
    **"predeploy": "npm run build",
    "deploy": "gh-pages -d build",**
    "start": "react-scripts start",
    "build": "react-scripts build",
    "test": "react-scripts test",
    "eject": "react-scripts eject"
  },
 - in **index.js**
  - adding a **basename** to <BrowserRouter></BrowserRouter>

Solving blank and 404 page issues
_Reference: https://webdev99.com/deploy-react-app-with-react-router-to-github-pages-blank-404-page-problem-solved/_


