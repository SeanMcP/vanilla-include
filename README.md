# vanilla-include

A JavaScript implementation of php's include function for HTML templating.

## Why?

php's `include` function is incredibly useful for simple HTML templating. This library seeks to implement a similar functionality with just vanilla JavaScript.

## Install

Get CDN from [UNPKG](https://unpkg.com):

```
<script src="https://unpkg.com/vanilla-include"></script>
```

Install via npm or yarn:

```sh
npm install --save vanilla-include

# or

yarn add vanilla-include
```

## Docs

### Basic

When your document loads, `vanilla-include` will look for all elements that have a `data-include` attribute and **replace** them with the target HTML file.

1. Create your file to include

```
<!-- path/to/file.html -->

<h1>Hello from vanilla-include!</h1>
```

2. Add `vanilla-include` and refer to file with `data-include` attribute

```
<!-- index.html -->

<body>
    <br data-include="path/to/file.html">
</body>
...
<script src="vanilla-include.min.js"></script>
```

3. Voila!

`index.html` will render like so:

```
<body>
    <h1>Hello from vanilla-include!</h1>
</body>
```

### Details

The `data-include` attribute can be added to any element in your document. That means you can use `vanilla-include` to add things like `<title>` or `<meta>` tags.

In practice, the `<br>` tag is useful because it is both short and self-closing, but you can use whatever tag best fits your scenario.

Should the resource fail to load, `vanilla-include` will fail "silently" by setting the element's `display` style to `none`.

## License

[MIT](/LICENSE)
