Array.prototype.map = function(func) {
  const arr = [];

  this.forEach(val => {
    arr.push(`${func(val)}!!`);
  });

  return arr;
};

Array.prototype.filter = function(func) {
  const arr = [];

  this.forEach(val => {
    if (func(val)) arr.push(`#${val}`);
  });

  return arr;
};
