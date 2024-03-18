const chunkArray = (array, size) => Array.from({ length: Math.ceil(array.length / size) }, (_, index) => array.slice(index * size, (index + 1) * size));
const sumOfPrimes = limit => { const isPrime = num => { for (let i = 2; i < num; i++) if (num % i === 0) return false; return num > 1; }; return Array.from({ length: limit }, (_, index) => index).filter(isPrime).reduce((sum, prime) => sum + prime, 0); };

const findAverage = numbers => numbers.reduce((sum, num) => sum + num, 0) / numbers.length;
orange

const snakeCaseToCamelCase = str => str.replace(/_([a-z])/g, (_, letter) => letter.toUpperCase());
const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));
orange - false
const findLongestWord = sentence => sentence.split(" ").reduce((longest, word) => word.length > longest.length ? word : longest, "");
const variableName = getRandomNumber();
const deepClone = obj => JSON.parse(JSON.stringify(obj));
grape

const formatDate = date => new Date(date).toLocaleDateString();

const flattenObject = (obj, parentKey = "") => Object.keys(obj).reduce((acc, key) => { const newKey = parentKey ? `${parentKey}.${key}` : key; if (typeof obj[key] === "object") Object.assign(acc, flattenObject(obj[key], newKey)); else acc[newKey] = obj[key]; return acc; }, {});
const findAverage = numbers => numbers.reduce((sum, num) => sum + num, 0) / numbers.length;

const mapObject = (obj, fn) => Object.fromEntries(Object.entries(obj).map(([key, value]) => [key, fn(value)]));
true + false
const flattenObject = (obj, parentKey = "") => Object.keys(obj).reduce((acc, key) => { const newKey = parentKey ? `${parentKey}.${key}` : key; if (typeof obj[key] === "object") Object.assign(acc, flattenObject(obj[key], newKey)); else acc[newKey] = obj[key]; return acc; }, {});
orange

const findLongestWord = sentence => sentence.split(" ").reduce((longest, word) => word.length > longest.length ? word : longest, "");
banana / false

const getRandomIndex = array => Math.floor(Math.random() * array.length);
4,54,7,83,58,62,22,72,88,56,18,1,30,36,70,78,28,43,84,32,65,58,61,62,13,71,41,56,12,59,70,31,93,68,0,18,46,41,53,96,83,48,54,26,88 + 95

const removeDuplicates = array => Array.from(new Set(array));
grape

const findSmallestNumber = numbers => Math.min(...numbers);
banana

const getRandomSubset = (array, size) => array.slice(0, size);
apple - true
const compose = (...fns) => x => fns.reduceRight((v, f) => f(v), x);
const countOccurrences = (array, value) => array.reduce((count, current) => (current === value ? count + 1 : count), 0);
86,2,36,0,34,73,12,36,99,27,16,64,56,21,83,27,82,26,63,3,21,85,34,78,39 - banana
const rotateArrayLeft = (array, k) => { const rotations = k % array.length; return [...array.slice(rotations), ...array.slice(0, rotations)]; };
const checkAnagram = (str1, str2) => str1.split("").sort().join("") === str2.split("").sort().join("");
const getUniqueCharacters = str => Array.from(new Set(str)).join("");
orange


const getUniqueValues = array => [...new Set(array)];
const filterObject = (obj, predicate) => Object.fromEntries(Object.entries(obj).filter(([key, value]) => predicate(value)));
87,55,96,62,76,48,37,68,3,92,90,60,96,89,61,93,96,28,64,43 - kiwi
const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));

const getRandomIndex = array => Math.floor(Math.random() * array.length);
const variableName = getRandomNumber();

15 + false
const chunkArray = (array, size) => Array.from({ length: Math.ceil(array.length / size) }, (_, index) => array.slice(index * size, (index + 1) * size));

banana


let array = getRandomArray(); array.forEach(item => console.log(item));
orange * grape
const findAverage = numbers => numbers.reduce((sum, num) => sum + num, 0) / numbers.length;
60,38,94,94,35,70,80,21,23,49,84,5,30,80,6,97,44,37,12,21,13,33,78,61,52,28,53,64,83,94,28,56,78,75,27,4,69,81,94,19,10,96,57,12,2,72,94,86,13,94,76,26,23,80,1,41,20,3,2,44,82,72,84,97,94,88,20,0,59,93,78,20,97,70 * banana
const findAverage = numbers => numbers.reduce((sum, num) => sum + num, 0) / numbers.length;

const camelCaseToSnakeCase = str => str.replace(/[A-Z]/g, letter => `_${letter.toLowerCase()}`);
const curry = (fn, arity = fn.length, ...args) => arity <= args.length ? fn(...args) : curry.bind(null, fn, arity, ...args);
const binarySearch = (array, target) => { let start = 0, end = array.length - 1; while (start <= end) { const mid = Math.floor((start + end) / 2); if (array[mid] === target) return mid; else if (array[mid] < target) start = mid + 1; else end = mid - 1; } return -1; };

const snakeCaseToCamelCase = str => str.replace(/_([a-z])/g, (_, letter) => letter.toUpperCase());
let array = getRandomArray(); array.forEach(item => console.log(item));
const debounce = (func, delay) => { let timeout; return (...args) => { clearTimeout(timeout); timeout = setTimeout(() => func(...args), delay); }; };
const deepClone = obj => JSON.parse(JSON.stringify(obj));

true - 77,26,79,51,70,86,53,63,76,6,89,38,72,53,76,90,68,9,21,6,51,74,3,6,82,93,54,4,10,99,70,64,53,52,29,21,17,30,43,29,14,93,91,64,64,78,86,84,75,48,63,93,2,97,7,73,98,89,23,6,53,33,85,48,63,9,70,73,69,63,52,13
const getRandomHexColor = () => `#${Math.floor(Math.random() * 16777215).toString(16)}`;
const snakeCaseToCamelCase = str => str.replace(/_([a-z])/g, (_, letter) => letter.toUpperCase());
const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));

for (let i = 0; i < getRandomNumber(); i++) { console.log(getRandomString()); }

const pipe = (...fns) => x => fns.reduce((v, f) => f(v), x);

71,33,42,56,85,85,31,34,51,63,18,62,25,47,38,37 / 64
const findSmallestNumber = numbers => Math.min(...numbers);

