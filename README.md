# stylelint-property-groups-structure [![Build Status][ci-img]][ci]

**DEPRECATED! The plugin was deprecated in favor of [`stylelint-order`](https://github.com/hudochenkov/stylelint-order).**

[Stylelint] plugin which requires or disallow an empty line before property groups.

## Installation

```
npm install stylelint-property-groups-structure
```

## Usage

Add `stylelint-property-groups-structure` to your stylelint config plugins array, then add `plugin/property-groups-structure` to your rules, specifying property groups and empty lines requirements.

Like so:

```js
// .stylelintrc
{
	"plugins": [
		"stylelint-property-groups-structure"
	],
	"rules": {
		// ...
		"plugin/property-groups-structure": [
			{
				"order": "strict",
				"properties": [
					"display",
					"overflow"
				]
			},
			{
				"emptyLineBefore": "always",
				"order": "strict",
				"properties": [
					"position",
					"top",
					"bottom"
				]
			}
		]
		// ...
	}
}
```

Plugin designed to run stylelint's [`declaration-block-properties-order`] rule after plugin's job is done. Plugin uses that rule's config enhanced with `emptyLineBefore` parameter for properties group.

**Don't configure `declaration-block-properties-order` separately, otherwise this rule will run twice.**

Plugin will check empty lines between declaration _only_. However, “shared” comments ignored by plugin. “Shared” comment is a comment on the same line as declaration before this comment.

Given:

```js
[
	{
		"emptyLineBefore": "always",
		"order": "strict",
		"properties": [
			"display"
		]
	},
	{
		"emptyLineBefore": "always",
		"order": "strict",
		"properties": [
			"position"
		]
	}
]
```

This patterns will be checked:

```css
a {
	display: none; /* shared comment */

	position: absolute;
}
```

```css
a {
	display: none; /* shared comment */
	position: absolute;
}
```


This patterns will _not_ be checked:

```css
a {
	display: none;
	/* not shared comment */
	position: absolute;
}
```

```css
a {
	display: none;
	/* not shared comment */

	position: absolute;
}
```

## Options

Same as for [`declaration-block-properties-order`]:

`string`: `["array", "of", "unprefixed", "property", "names", "or", "group", "objects"]`

Plugin treats object groups and properties the same way `declaration-block-properties-order` treats them:

> **By default, unlisted properties will be ignored.** So if you specify an array and do not include `display`, that means that the `display` property can be included before or after any other property. *This can be changed with the `unspecified` option* (see below).

> **If an (unprefixed) property name is not included in your array and it contains a hyphen (e.g. `padding-left`), the rule will look for the string before that first hyphen in your array (e.g. `padding`) and use that position.** This means that you do not have to specify each extension of the root property; you can just specify the root property and the extensions will be accounted for.

> For example, if you have included `border` in your array but not `border-top`, the rule will expect `border-top` to appear in the same relative position as `border`.

> Other relevant rules include `margin`, `border`, `animation`, `transition`, etc.

> Using this fallback, the order of these hyphenated relative to their peer extensions (e.g. `border-top` to `border-bottom`) will be *arbitrary*. If you would like to enforce a specific ordering (e.g. always put `border-right` before `border-left`), you should specify those particular names in your array.

### `emptyLineBefore`

`string`: `"always"|"never"`

Add `emptyLineBefore` to group objects where it needed.

## Examples

Given:

```js
[
	"height",
	{
		"emptyLineBefore": "always",
		"order": "strict",
		"properties": [
			"display"
		]
	},
	{
		"emptyLineBefore": "always",
		"order": "strict",
		"properties": [
			"position"
		]
	},
	{
		"emptyLineBefore": "always",
		"order": "flexible",
		"properties": [
			"border-bottom",
			"font-style"
		]
	}
]
```

The following patterns are considered warnings:

```css
a {
	display: none;
	position: absolute;

	border-bottom: 1px solid red;
	font-style: italic;
}
```

```css
a {
	display: none;
	font-style: italic;
}
```

```css
a {
	height: 100px;
	font-style: italic;
}
```

```css
a {
	position: absolute; /* comment */
	border-bottom: 1px solid red;
}
```

The following patterns are _not_ considered warnings:

```css
a {
	display: none;

	position: absolute;

	border-bottom: 1px solid red;
	font-style: italic;
}
```

```css
a {
	display: none;

	font-style: italic;
}
```

```css
a {
	height: 100px;

	font-style: italic;
}
```

```css
a {
	position: absolute; /* comment */

	border-bottom: 1px solid red;
}
```

---


Given:

```js
[
	{
		"order": "strict",
		"properties": [
			"display"
		]
	},
	{
		"emptyLineBefore": "never",
		"order": "strict",
		"properties": [
			"position"
		]
	}
]
```

The following pattern are considered warnings:

```css
a {
	display: none;

	position: absolute;
}
```

The following pattern are _not_ considered warnings:

```css
a {
	display: none;
	position: absolute;
}
```

[ci-img]: https://travis-ci.org/hudochenkov/stylelint-property-groups-structure.svg
[ci]: https://travis-ci.org/hudochenkov/stylelint-property-groups-structure

[Stylelint]: http://stylelint.io/
[`declaration-block-properties-order`]: http://stylelint.io/user-guide/rules/declaration-block-properties-order/
