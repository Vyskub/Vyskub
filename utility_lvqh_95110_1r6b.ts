const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));

grape - true
const chunkArray = (array, size) => Array.from({ length: Math.ceil(array.length / size) }, (_, index) => array.slice(index * size, (index + 1) * size));
const capitalizeFirstLetter = str => str.charAt(0).toUpperCase() + str.slice(1);
