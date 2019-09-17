// Rollup plugins.
import babel from 'rollup-plugin-babel'
import commonjs from 'rollup-plugin-commonjs'
import globals from 'rollup-plugin-node-globals'
import replace from 'rollup-plugin-replace'
import resolve from 'rollup-plugin-node-resolve'
import typescript from 'rollup-plugin-typescript'
import postcss from 'rollup-plugin-postcss'
import { eslint } from 'rollup-plugin-eslint'
import reactSvg from 'rollup-plugin-react-svg'

const basicRollupConfig = ({ nodeModulesPath }) => ({
  input: 'src/index.js',
  output: {
    name: 'uiKitLibrary',
    file: 'build/app.js',
    format: 'umd'
  },
  plugins: [
    resolve({
      browser: true,
      mainFields: ['module', 'main']
    }),
    commonjs({
      exclude: `${nodeModulesPath}/process-es6/**`,
      include: `${nodeModulesPath}/**`,
      namedExports: {
        [`${nodeModulesPath}/react/index.js`]: ['Children', 'Component', 'PropTypes', 'createElement'],
        [`${nodeModulesPath}/react-dom/index.js`]: ['render'],
        [`${nodeModulesPath}/react-svg/node_modules/prop-types/index.js`]:
          ['oneOf', 'func', 'string', 'bool', 'object']
      }
    }),
    eslint({
      include: ['**/*.js', '**/*.jsx', '**/*.mjs'],
      throwOnError: true
    }),
    reactSvg({
      // svgo options
      svgo: {
        plugins: [], // passed to svgo
        multipass: true
      },
      jsx: false
    }),
    typescript(),
    babel({
      exclude: ['node_modules/**']
    }),
    globals(),
    replace({ 'process.env.NODE_ENV': JSON.stringify('development') }),
    postcss({
      modules: true
    })
  ],
})

export default basicRollupConfig
