module.exports = (_opts) => {
  const opts = _opts || {}

  if (opts.code) {
    return "hi";
  } else {
    return "woah";
  }
}
