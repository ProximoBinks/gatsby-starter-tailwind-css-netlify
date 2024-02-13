# Gatsby Starter Tailwind CSS Netlify

Start your project quickly with this Gatsby Starter, integrating Tailwind CSS for styling and ready for seamless deployment with Netlify.

[Tailwind CSS](https://tailwindcss.com/) is a utility-first CSS framework for rapidly building custom designs.

This starter uses Tailwind CSS v3.4.1 and includes a customized Tailwind configuration. It sets you up with the following:

- `src/css/tailwind.css` where Tailwind's `base`, `components`, and `utilities` directives are injected
- A customized `tailwind.config.js` file that extends the default theme with custom colors, spacing, font sizes, and screen sizes
- `prettier`
- `gatsby-plugin-postcss` including `autoprefixer`
- `gatsby-plugin-react-helmet`
- `gatsby-plugin-manifest`

## Demo Site

You can view the demo site [here](https://gatsby-starter-tailwind-css.netlify.app/)

## Prerequisites

Before you begin, ensure you have the following installed:
- Node.js (https://nodejs.org/)
- Gatsby CLI (`npm install -g gatsby-cli`)

This will prepare your environment for developing with Gatsby and Tailwind CSS.

## Getting Started

[![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/ProximoBinks/gatsby-starter-tailwind-css-netlify)

1. **Create your Gatsby site**

   Use the Gatsby CLI (`npm install -g gatsby-cli` if you don't have it already) to create your Gatsby site with Gatsby Starter TailwindCSS Netlify:

   ```bash
   gatsby new my-project-name https://github.com/melanienolan/gatsby-starter-tailwind-css
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

Now you're all set to create your Gatsby site with Tailwind CSS, using the customized configuration, and deploy it effortlessly with Netlify!
