'use strict';

const testRule = require('stylelint-test-rule-ava');
const propertyGroupStructure = require('..');

const ruleName = propertyGroupStructure.ruleName;

testRule(propertyGroupStructure.rule, {
	ruleName,
	config: [[
		{
			emptyLineBefore: 'always',
			order: 'strict',
			properties: [
				'display',
			],
		},
		{
			emptyLineBefore: 'always',
			order: 'strict',
			properties: [
				'position',
			],
		},
		{
			emptyLineBefore: 'always',
			order: 'flexible',
			properties: [
				'border-bottom',
				'font-style',
			],
		},
	]],
	skipBasicChecks: true,

	accept: [
		{
			code: `
				a {
					display: none;

					position: absolute;

					border-bottom: 1px solid red;
					font-style: italic;
				}
			`,
		},
		{
			code: `
				a {
					display: none;

					position: absolute;

					font-style: italic;
					border-bottom: 1px solid red;
				}
			`,
		},
		{
			code: `
				a {
					display: none;

					position: absolute;

					font-style: italic;
				}
			`,
		},
		{
			code: `
				a {
					display: none;

					font-style: italic;
				}
			`,
		},
		{
			code: `
				a {
					position: absolute;

					border-bottom: 1px solid red;
				}
			`,
		},
		{
			code: `
				a {
					display: none;

					border-bottom: 1px solid red;
				}
			`,
		},
		{
			code: `
				a {
					display: none; /* comment */

					position: absolute;
				}
			`,
		},
		{
			code: `
				a {
					display: none;
					/* comment */
					position: absolute;
				}
			`,
		},
		{
			code: `
				a {
					/* comment */
					display: none;

					position: absolute;
				}
			`,
		},
		{
			code: `
				a {
					/* comment */
					display: none;

					/* comment */
					position: absolute;
				}
			`,
		},
		{
			code: `
				a {
					display: none;

					@media (min-width: 100px) {}

					position: absolute;
				}
			`,
		},
		{
			code: `
				a {
					display: none;
					@media (min-width: 100px) {}
					position: absolute;
				}
			`,
		},
		{
			code: `
				a {
					--display: none;

					position: absolute;
				}
			`,
		},
		{
			code: `
				a {
					--display: none;
					position: absolute;
				}
			`,
		},
	],

	reject: [
		{
			code: `
				a {
					display: none;
					position: absolute;

					border-bottom: 1px solid red;
					font-style: italic;
				}
			`,
		},
		{
			code: `
				a {
					display: none;

					position: absolute;
					border-bottom: 1px solid red;
					font-style: italic;
				}
			`,
		},
		{
			code: `
				a {
					display: none;

					position: absolute;
					font-style: italic;
					border-bottom: 1px solid red;
				}
			`,
		},
		{
			code: `
				a {
					display: none;
					position: absolute;

					font-style: italic;
				}
			`,
		},
		{
			code: `
				a {
					display: none;
					font-style: italic;
				}
			`,
		},
		{
			code: `
				a {
					position: absolute;
					border-bottom: 1px solid red;
				}
			`,
		},
		{
			code: `
				a {
					display: none;
					border-bottom: 1px solid red;
				}
			`,
		},
		{
			code: `
				a {
					display: none; /* comment */
					position: absolute;
				}
			`,
		},
		{
			code: `
				a {
					/* comment */
					display: none;
					position: absolute;
				}
			`,
		},
	],
});

testRule(propertyGroupStructure.rule, {
	ruleName,
	config: [[
		{
			emptyLineBefore: 'never',
			order: 'strict',
			properties: [
				'display',
			],
		},
		{
			emptyLineBefore: 'never',
			order: 'strict',
			properties: [
				'position',
			],
		},
		{
			emptyLineBefore: 'never',
			order: 'flexible',
			properties: [
				'border-bottom',
				'font-style',
			],
		},
	]],
	skipBasicChecks: true,

	accept: [
		{
			code: `
				a {
					display: none;
					position: absolute;
					border-bottom: 1px solid red;
					font-style: italic;
				}
			`,
		},
		{
			code: `
				a {
					display: none;
					position: absolute;
					font-style: italic;
					border-bottom: 1px solid red;
				}
			`,
		},
		{
			code: `
				a {
					display: none;
					position: absolute;
					font-style: italic;
				}
			`,
		},
		{
			code: `
				a {
					display: none;
					font-style: italic;
				}
			`,
		},
		{
			code: `
				a {
					position: absolute;
					border-bottom: 1px solid red;
				}
			`,
		},
		{
			code: `
				a {
					display: none;
					border-bottom: 1px solid red;
				}
			`,
		},
		{
			code: `
				a {
					display: none; /* comment */
					position: absolute;
				}
			`,
		},
		{
			code: `
				a {
					display: none;

					/* comment */
					position: absolute;
				}
			`,
		},
		{
			code: `
				a {
					/* comment */
					display: none;
					position: absolute;
				}
			`,
		},
		{
			code: `
				a {
					/* comment */
					display: none;

					/* comment */
					position: absolute;
				}
			`,
		},
		{
			code: `
				a {
					display: none;

					@media (min-width: 100px) {}

					position: absolute;
				}
			`,
		},
		{
			code: `
				a {
					display: none;
					@media (min-width: 100px) {}
					position: absolute;
				}
			`,
		},
		{
			code: `
				a {
					--display: none;

					position: absolute;
				}
			`,
		},
		{
			code: `
				a {
					--display: none;
					position: absolute;
				}
			`,
		},
	],

	reject: [
		{
			code: `
				a {
					display: none;
					position: absolute;

					border-bottom: 1px solid red;
					font-style: italic;
				}
			`,
		},
		{
			code: `
				a {
					display: none;

					position: absolute;
					border-bottom: 1px solid red;
					font-style: italic;
				}
			`,
		},
		{
			code: `
				a {
					display: none;

					position: absolute;
					font-style: italic;
					border-bottom: 1px solid red;
				}
			`,
		},
		{
			code: `
				a {
					display: none;
					position: absolute;

					font-style: italic;
				}
			`,
		},
		{
			code: `
				a {
					display: none;

					font-style: italic;
				}
			`,
		},
		{
			code: `
				a {
					position: absolute;

					border-bottom: 1px solid red;
				}
			`,
		},
		{
			code: `
				a {
					display: none;

					border-bottom: 1px solid red;
				}
			`,
		},
		{
			code: `
				a {
					display: none; /* comment */

					position: absolute;
				}
			`,
		},
		{
			code: `
				a {
					/* comment */
					display: none;

					position: absolute;
				}
			`,
		},
	],
});

testRule(propertyGroupStructure.rule, {
	ruleName,
	config: [[
		{
			emptyLineBefore: 'always',
			order: 'flexible',
			properties: [
				'border-bottom',
				'font-style',
			],
		},
		{
			emptyLineBefore: 'never',
			order: 'strict',
			properties: [
				'position',
			],
		},
		{
			emptyLineBefore: 'always',
			order: 'strict',
			properties: [
				'display',
			],
		},
	]],
	skipBasicChecks: true,

	accept: [
		{
			code: `
				a {
					border-bottom: 1px solid red;
					font-style: italic;
					position: absolute;

					display: none;
				}
			`,
		},
		{
			code: `
				a {
					font-style: italic;
					border-bottom: 1px solid red;
					position: absolute;

					display: none;
				}
			`,
		},
		{
			code: `
				a {
					font-style: italic;
					position: absolute;

					display: none;
				}
			`,
		},
		{
			code: `
				a {
					font-style: italic;

					display: none;
				}
			`,
		},
		{
			code: `
				a {
					border-bottom: 1px solid red;
					position: absolute;
				}
			`,
		},
		{
			code: `
				a {
					border-bottom: 1px solid red;

					display: none;
				}
			`,
		},
		{
			code: `
				a {
					position: absolute; /* comment */

					display: none;
				}
			`,
		},
		{
			code: `
				a {
					position: absolute;

					/* comment */
					display: none;
				}
			`,
		},
		{
			code: `
				a {
					position: absolute;
					/* comment */
					display: none;
				}
			`,
		},
		{
			code: `
				a {
					/* comment */
					position: absolute;

					/* comment */
					display: none;
				}
			`,
		},
		{
			code: `
				a {
					position: absolute;

					@media (min-width: 100px) {}

					display: none;
				}
			`,
		},
		{
			code: `
				a {
					position: absolute;
					@media (min-width: 100px) {}
					display: none;
				}
			`,
		},
		{
			code: `
				a {
					--display: none;
					position: absolute;
				}
			`,
		},
		{
			code: `
				a {
					--display: none;

					position: absolute;
				}
			`,
		},
	],

	reject: [
		{
			code: `
				a {
					border-bottom: 1px solid red;
					font-style: italic;
					position: absolute;
					display: none;
				}
			`,
		},
		{
			code: `
				a {
					border-bottom: 1px solid red;
					font-style: italic;

					position: absolute;

					display: none;
				}
			`,
		},
		{
			code: `
				a {
					font-style: italic;
					border-bottom: 1px solid red;

					position: absolute;

					display: none;
				}
			`,
		},
		{
			code: `
				a {
					font-style: italic;
					position: absolute;
					display: none;
				}
			`,
		},
		{
			code: `
				a {
					font-style: italic;
					display: none;
				}
			`,
		},
		{
			code: `
				a {
					border-bottom: 1px solid red;

					position: absolute;
				}
			`,
		},
		{
			code: `
				a {
					border-bottom: 1px solid red;
					display: none;
				}
			`,
		},
		{
			code: `
				a {
					position: absolute; /* comment */
					display: none;
				}
			`,
		},
	],
});

testRule(propertyGroupStructure.rule, {
	ruleName,
	config: [[
		'height',
		'width',
		{
			emptyLineBefore: 'always',
			order: 'strict',
			properties: [
				'display',
			],
		},
	]],
	skipBasicChecks: true,

	accept: [
		{
			code: `
				a {
					height: 10px;
					width: 10px;

					display: none;
				}
			`,
		},
		{
			code: `
				a {
					height: 10px;

					display: none;
				}
			`,
		},
		{
			code: `
				a {
					display: none;
				}
			`,
		},
		{
			code: `
				a {

					display: none;
				}
			`,
		},
		{
			code: `
				a {
					height: 10px;
				}
			`,
		},
		{
			code: `
				a {
					height: 10px;
					width: 10px; /* comment */

					display: none;
				}
			`,
		},
		{
			code: `
				a {
					height: 10px;
					width: 10px;
					/* comment */
					display: none;
				}
			`,
		},
		{
			code: `
				a {
					height: 10px;
					width: 10px;

					/* comment */
					display: none;
				}
			`,
		},
	],

	reject: [
		{
			code: `
				a {
					height: 10px;
					width: 10px;
					display: none;
				}
			`,
		},
		{
			code: `
				a {
					height: 10px;
					display: none;
				}
			`,
		},
		{
			code: `
				a {
					height: 10px;
					width: 10px; /* comment */
					display: none;
				}
			`,
		},
	],
});

testRule(propertyGroupStructure.rule, {
	ruleName,
	config: [[
		{
			emptyLineBefore: 'always',
			order: 'strict',
			properties: [
				'display',
			],
		},
		{
			emptyLineBefore: 'always',
			order: 'strict',
			properties: [
				'border',
			],
		},
	]],
	skipBasicChecks: true,

	accept: [
		{
			code: `
				a {
					display: none;

					border-top: absolute;
				}
			`,
		},
	],

	reject: [
		{
			code: `
				a {
					display: none;
					border-top: absolute;
				}
			`,
		},
	],
});

testRule(propertyGroupStructure.rule, {
	ruleName,
	config: [[
		{
			emptyLineBefore: 'always',
			order: 'strict',
			properties: [
				'display',
			],
		},
		{
			order: 'strict',
			properties: [
				'position',
			],
		},
	]],
	skipBasicChecks: true,

	accept: [
		{
			code: `
				a {
					display: none;

					position: absolute;
				}
			`,
		},
		{
			code: `
				a {
					display: none;
					position: absolute;
				}
			`,
		},
	],

	reject: [
	],
});
