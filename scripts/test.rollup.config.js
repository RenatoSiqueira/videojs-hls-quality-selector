/**
 * Rollup configuration for packaging the plugin in a test bundle.
 *
 * This includes all dependencies for both the plugin and its tests.
 */
import commonjs from 'rollup-plugin-commonjs';
import json from 'rollup-plugin-json';
import multiEntry from 'rollup-plugin-multi-entry';
import resolve from 'rollup-plugin-node-resolve';

export default {
  name: 'videojsHlsQualitySelectorTests',
  input: 'test/**/*.test.js',
  output: {
    file: 'test/dist/bundle.js',
    format: 'iife'
  },
  external: [
    'qunit',
    'qunitjs',
    'sinon',
    'video.js'
  ],
  globals: {
    'qunit': 'QUnit',
    'qunitjs': 'QUnit',
    'sinon': 'sinon',
    'video.js': 'videojs'
  },
  plugins: [
    multiEntry({
      exports: false
    }),
    resolve({
      browser: true,
      main: true,
      jsnext: true
    }),
    json(),
    commonjs({
      sourceMap: false
    })
  ]
};
