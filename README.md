# react-storybook-rollup
**Maintain your UI library as a separate project!**

This project contains a combination of:
* [Storybook](https://storybook.js.org) - the UI environment for developing React components
* [Rollup](https://rollupjs.org) - module bundler that bundles all your components

### What does it do?
* It lets you develop your React components in isolation
* It serves as documentation of your components for designers and other developers
* It bundles all your components developed with Storybook into one single portable dependency that you can inject into your app.

### Usage
1. Run `npm install`
2. Run `npm run storybook` in order to run Storybook, visit localhost:6006

### Storybook and Rollup configuration
Storybook is awesome tool. And Rollup is an awesome bundler. But combined together they are twice as awesome!

Storybook itself is easily configurable and can be adjusted to your needs with a bunch of plugins and configuration files.
The instance of Storybook housed in this project is additionally preconfigured with the most useful addons. This includes:
* Better UX (elements positioning, library version displaying, better elements hierarchy handling)
* `info` plugin - every component gets automatically created documentation page with props info etc. You can also include your own README
* `knobs` plugin - lets you easily configure the component before injecting it into your application
