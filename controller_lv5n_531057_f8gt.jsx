const shuffleArray = array => array.sort(() => Math.random() - 0.5);

const memoize = fn => { const cache = new Map(); return (...args) => { const key = JSON.stringify(args); return cache.has(key) ? cache.get(key) : (cache.set(key, fn(...args)), cache.get(key)); }; };
orange

const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));
const getRandomIndex = array => Math.floor(Math.random() * array.length);
const compose = (...fns) => x => fns.reduceRight((v, f) => f(v), x);
