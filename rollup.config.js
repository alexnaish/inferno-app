import alias from 'rollup-plugin-alias';
import babel from 'rollup-plugin-babel';
import commonjs from 'rollup-plugin-commonjs';
import eslint from 'rollup-plugin-eslint';
import filesize from 'rollup-plugin-filesize';
import inject from 'rollup-plugin-inject';
import nodeResolve from 'rollup-plugin-node-resolve';
import replace from 'rollup-plugin-replace';
import uglify from 'rollup-plugin-uglify';

const headerBanner = `
/**
  ###########################
  Application
  Version ${require('./package.json').version}
  Alex Naish
  ###########################
**/
`;

const env = process.env.NODE_ENV || 'production';

export default {
	entry: 'app/js/index.js',
	dest: 'dist/bundle.js',
	format: 'iife',
	sourceMap: true,
	plugins: [
		eslint({
			include: [
				'app/js/**',
			],
			exclude: ['*.js', 'node_modules']
		}),
		alias({
			config: `${__dirname}/config/${process.env.NODE_ENV || 'default'}.js`
		}),
		inject({
			exclude: 'node_modules/**',
			Promise: `${__dirname}/node_modules/es6-promise/lib/es6-promise/promise.js`
		}),
		babel({
			babelrc: false,
			presets: [
				['es2015', {
					"modules": false
				}]
			],
			exclude: ['node_modules/**'],
			plugins: ['inferno', 'external-helpers']
		}),
		commonjs({
			include: [
				// 'node_modules/object-assign/**',
			],
			namedExports: {
				'node_modules/inferno-router/inferno-router.js': ['Router', 'Route', 'Link']
			}
		}),
		replace({
			'process.env.NODE_ENV': JSON.stringify(env)
		}),
		nodeResolve({
			jsnext: true,
			main: true
		}),
		// uglify({
		// 	exclude: ['node_modules/**'],
		// 	output: {
		// 		comments: function(node, comment) {
		// 			if (comment.type == "comment2") {
		// 				return /Alex Naish/i.test(comment.value);
		// 			}
		// 		}
		// 	}
		// }),
		filesize()
	],
	banner: headerBanner
}
