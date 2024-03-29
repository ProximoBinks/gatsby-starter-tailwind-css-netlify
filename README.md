# Gatsby Starter for Tailwind CSS & Netlify
[![License](https://img.shields.io/badge/license-MIT-blue.svg)](https://github.com/ProximoBinks/gatsby-starter-tailwind-css-netlify/blob/main/LICENSE)

Start your project quickly with this Gatsby Starter, integrating Tailwind CSS for styling and ready for seamless deployment with Netlify.

[Tailwind CSS](https://tailwindcss.com/) is a utility-first CSS framework for rapidly building custom designs.

This starter uses Tailwind CSS v3.4.1 and includes a customised Tailwind configuration. It sets you up with the following:

- `src/css/tailwind.css` where Tailwind's `base`, `components`, and `utilities` directives are injected
- A customised `tailwind.config.js` file that extends the default theme with custom colors, spacing, font sizes, and screen sizes
- `prettier`
- `gatsby-plugin-postcss` including `autoprefixer`
- `gatsby-plugin-react-helmet`
- `gatsby-plugin-manifest`
- Includes a responsive nav bar, with animated hamburger dropdown
- Custom 404 Page

## Demo Site

You can view the demo site [here](https://gatsby-starter-tailwind-css-netlify.netlify.app/)

## Prerequisites

Before you begin, ensure you have the following installed:
- Node.js (https://nodejs.org/)
- Gatsby CLI (`npm install -g gatsby-cli`)

This will prepare your environment for developing with Gatsby and Tailwind CSS.

## 🚀 Quick start

1. **Create your Gatsby site**

   Use the Gatsby CLI (`npm install -g gatsby-cli` if you don't have it already) to create your Gatsby site with Gatsby Starter TailwindCSS Netlify:

   ```bash
   gatsby new my-project-name https://github.com/ProximoBinks/gatsby-starter-tailwind-css-netlify
   ```

2. **Start Developing**

   Navigate to your project folder and start the development server:
    
    ```bash
    cd my-project-name
    gatsby develop
    ```

    If this doesn't work you may want to run the following commands then try again
    ```bash
    npm install
    npm update
    ```

3.  **Open the source code and start editing!**

    Your site is now running at `http://localhost:8000`!

    _Note: You'll also see a second link: _`http://localhost:8000/___graphql`_. This is a tool you can use to experiment with querying your data. Learn more about using this tool in the [Gatsby tutorial](https://www.gatsbyjs.com/tutorial/part-five/#introducing-graphiql)._

    Open the `my-project-name` directory in your code editor of choice and edit `src/pages/index.js`. Save your changes and the browser will update in real time!

## 🚀 Quick start (Netlify)

Deploy this starter with one click on [Netlify](https://www.netlify.com/)

[![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/ProximoBinks/gatsby-starter-tailwind-css-netlify)

When deploying with Netlify, use 'Build Command' ```gatsby clean && gatsby build```, and make sure that it's 'Published to' ```public```

Now you're all set to create your Gatsby site with Tailwind CSS, using the customised configuration, and deploy it effortlessly with Netlify!

---
## Credits
Created by **Elliot Koh**

This project is a part of my effort to simplify web development workflows and share knowledge with the community.

For more projects and contributions:
- Github: [github.com/ProximoBinks](https://github.com/ProximoBinks)
- Contact: [elliotkoh2@gmail.com](mailto:elliotkoh2@gmail.com)

&copy; 2024 Elliot Koh. All rights reserved.
