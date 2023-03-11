const a = {
  pathname: '/btc-bitcoin',
  search: '',
  hash: '',
  state: { name: '1', age: 13 },
  key: 'f2qbag3e',
};

const {
  state: { name, age },
} = a;

console.log(name, age);
