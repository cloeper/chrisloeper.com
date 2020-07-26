/*
  transformObjectKeys performs in-place mutation of the keys of an object. You can truncate, capitalize, reverse, any string based operation is on the table.
  It will perform the transformation to whatever depth you specify. Good for not modifying the outer leaves of an object tree.
*/

export function transformObjectKeys(
  object: any,
  transformFunction: Function = (key: string) => key.toUpperCase(),
  options: {
    excludePaths: string[];
    depthLimit?: number;
  },
  depth: number = 1,
) {
  if (object && typeof object === 'object') {
    // If no depth limit was supplied, we artificially set the depth limit so it never stops.
    const calculatedDepthLimit = options.depthLimit ? options.depthLimit : depth + 1;

    // if we're not at the depth limit, continue
    if (depth <= calculatedDepthLimit) {
      // we've gone one more level down if we've gotten this far
      depth++;

      // iterate over each of the keys
      Object.entries(object).forEach(([key, value]) => {
        const { keysToExclude, updatedExcludePaths } = parseExcludedPaths(options.excludePaths);
        // determine if the child is also an object
        const hasObjectChildren = typeof object[key] === 'object';

        // create the new object key
        const renamedKey = keysToExclude.includes(key) ? key : transformFunction(key);
        const didRenameKey = renamedKey !== key;

        if (didRenameKey) {
          // create a new property with the new key with a value of the current key's value
          object[renamedKey] = object[key];

          // delete old key
          delete object[key];
        }

        // if the object has children that are objects, recurs
        if (hasObjectChildren && !keysToExclude.includes(key)) {
          // the depth is the same for each iteration of this
          transformObjectKeys(object[renamedKey], transformFunction, { excludePaths: updatedExcludePaths, depthLimit: options.depthLimit }, depth);
        }
      });
    }
  }
}

function parseExcludedPaths(excludePaths: string[]) {
  const keysToExclude: string[] = [];
  const updatedExcludePaths: string[] = [];

  excludePaths.forEach(path => {
    const pathArray = path.split('.');

    // if there's only one item in the path array, then we've reached the key we need to exclude for this depth
    if (pathArray.length === 1) keysToExclude.push(path);
    else {
      pathArray.shift();
      updatedExcludePaths.push(pathArray.join('.'));
    }
  });

  return { keysToExclude, updatedExcludePaths };
}
