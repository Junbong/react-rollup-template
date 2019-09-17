import { addParameters, configure } from '@storybook/react'
import appPackage from '../package.json'

function loadStories() {
  const req = require.context('../stories', true, /\.stories\.js$/)
  req.keys().forEach(filename => req(filename))
}

addParameters({
  name: `My Storybook v${appPackage.version}`,
  url: '/storybook/index.html',
  addonPanelInRight: true,
  hierarchySeparator: /\//
})

configure(loadStories, module)
