/*
  transformObjectKeys performs in-place mutation of the keys of an object. You can truncate, capitalize, reverse, any string based operation is on the table.
  It will perform the transformation to whatever depth you specify. Good for not modifying the outer leaves of an object tree.
*/

export function transformObjectKeys(object: any, depthLimit: number, transformFunction: Function = (key: string) => key.toUpperCase(), depth: number = 1) {
  if (typeof object === 'object') {
    // if we're not at the depth limit, continue
    if (depth <= depthLimit) {
      // we've gone one more level down if we've gotten this far
      depth++;

      // iterate over each of the keys
      Object.keys(object).forEach(key => {
        // determine if the child is also an object
        const hasObjectChildren = typeof object[key] === 'object';

        // create the new object key
        const renamedKey = transformFunction(key);
        // create a new property with the new key with a value of the current key's value
        object[renamedKey] = object[key];
        // delete old key
        delete object[key];

        // if the object has children that are objects, recurs
        if (hasObjectChildren) {
          // the depth is the same for each iteration of this
          transformObjectKeys(object[renamedKey], depthLimit, transformFunction, depth);
        }
      });
    }
  } else {
    //not an obj
    console.log('Parameter provided is not an object.');
  }
}
