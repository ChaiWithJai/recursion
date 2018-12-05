const renameFiles = arrayOfFilenames => {
  const nameTracker = {};
  const namer = (fileName, num) => `${fileName}(${num})`;

  return arrayOfFilenames.map(name => {
    // extension name
    let extension = nameTracker[name] || 0;
    // how many times filename is used
    nameTracker[name] = extension + 1;
    // 0 return true, if not proceed...
    if (extension === 0) {
      return name;
    }
    // while the key exists
    let keyName = namer(name, extension);
    while (nameTracker[keyName] || arrayOfFilenames.indexOf(keyName) > -1) {
      keyName = namer(name, extension++);
    }
    nameTracker[keyName] = 1;
    return keyName;
  });
};

// Recursive Solution

// const renameFiles = (arrayOfNames) => {
//  const filenames = [];

//   const renamer = (name) => {
//     // if name not in list, do nothing
//     // BASE CASE
//     if (filenames.indexOf(name) === -1) {
//       filenames.push(name);
//     }
//     else {
//       // if the name has numbers, add 1 to the number
//       let parentheses = name.indexOf("(");
//       if (parentheses > -1) {
//         // take current number and add 1
//         let number = +name.match(/\d+/)[0] + 1;
//         //
//         renamer(name.substring(0,parentheses+1)+number+")")
//       }
//       // otherwise, add "(1)" to the name
//       else renamer(name+"(1)");
//     }
//   }

//   arrayOfNames.forEach(renamer);

//   return filenames;
// }
