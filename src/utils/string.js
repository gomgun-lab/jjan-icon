export function toPascalCase(str) {
  return str
    .replace(/(^\w|-\w)/g, (match) =>
      match.charAt(match.length - 1).toUpperCase()
    )
    .replace(/-/g, "");
}