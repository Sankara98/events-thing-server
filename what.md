Express server with mongodb backend for event-things.

WHY: So I can create my own servers, dbs and more at work!
NEXT: updated user controller with verifyAdmin

common response object

```js
// Response with multiple items
{
  message: String,
  items: Array of Object,
  meta: {
    count: Number,
    offset: Number, // default 0
    limit: Number, // default 30, max 100
  }
  links: {
    self: String,
    first: String,
    last: String,
    next: String,
    prev: String,
  }
}
```
```js
// Response with single item
{
  message: String,
  item: Object,
  meta: Object,
  links: {
    self: String,
  }
}
```
```js
{
  message: String,
  error: {
    status: Number,
    message: String,
  }
}
```
