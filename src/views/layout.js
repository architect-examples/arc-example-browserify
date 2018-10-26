module.exports = function Layout (props) {
  props = props || {}
  let script = props.script
  return `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Architect Browserify Example</title>
</head>
<body>
  <script src="${script}"></script>
</body>
</html>
`
}
