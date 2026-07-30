/**
 * @param {import('jscodeshift').FileInfo} file
 * @param {import('jscodeshift').API} api
 */
export default function transformer(file, api, options) {
  const j = api.jscodeshift;

  const printOptions = options.printOptions;

  const root = j(file.source);

  root
    .find(j.ImportDeclaration)
    .filter(({ node }) => {
        throw new Error("STUB");
    })

    .forEach((path) => {
        throw new Error("STUB");
    });

  const transformed = root.findJSXElements();

  return transformed.toSource(printOptions);
}
