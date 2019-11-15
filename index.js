import later from './Delay';

later('1000')
  .then(() => {
    console.log('Done');
  })
  .catch((e) => console.log('error', e))

const arr = [later(1000), later(2000)];

Promise
  .all(arr)
  .then(() => console.log('all done'));

const arr2 = [later(1000), later(2000)];

Promise
  .all(arr)
  .then((resultArray) => console.log('all done', resultArray));
