const capitalize = str => str.toUpperCase();

const swapCase = str => {
  return str
    .split(' ')
    .map((word, i) => {
      if (i % 2 === 0) return capitalize(word);
      return word;
    })
    .join(' ');
};

const indexAndValue = arr => {
  return arr.map((value, index) => {
    return { value, index };
  });
};

Array.prototype.doNotInclude = function(arr) {
  if (!Array.isArray(arr)) arr = [arr];
  return this.filter((val, i) => {
    if (!arr.includes(i)) return val;
  });
};

function getPopulation(arr, countries) {
  return arr.reduce((accum, country) => {
    if (countries.includes(country.name) || countries.length === 0) {
      return accum + country.population;
    }
    return accum;
  }, 0);
}

const keyifyArrayOfObjects = (key, arr) => {
  return arr.reduce((accum, superheroObj) => {
    accum[superheroObj[key]] = superheroObj;
    return accum;
  }, {});
};

const powerLevelAverage = arr => {
  return Math.round(
    arr.reduce((accum, superheroObj) => {
      return accum + superheroObj.powerLevel;
    }, 0) / arr.length
  );
};

const separateAndReturnNames = (arr, property, lengthOfName) => {
  return arr
    .map(superhero => {
      const [firstName, lastName] = superhero.name.split(' ');
      superhero.firstName = firstName;
      superhero.lastName = lastName;
      return superhero;
    })
    .filter(superhero => superhero[property].length <= lengthOfName)
    .map(superhero => superhero[property]);
};

function priorityTodoDuration(todoList) {
  return todoList
    .filter(todo => todo.priority === 'high')
    .reduce((accum, todo) => {
      return accum + todo.duration;
    }, 0);
}

const inYourBudget = (val, arr) => {
  return arr.filter(item => item.price < val).map(item => item.item);
};

const extensionSearch = (ext, arr) => {
  return arr.filter(file => file.includes(ext));
};
