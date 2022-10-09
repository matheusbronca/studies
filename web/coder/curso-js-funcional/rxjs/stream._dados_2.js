function generateElements(array) {
  return {
    init(fn) {
      let i = 0;
      const interval = setInterval(() => {
        if (i >= array.length - 1) clearInterval(interval);
        fn(array[i]);
        i++;
      }, 1000);

      return {
        stop() {
          clearInterval(interval);
        },
      };
    },
  };
}

const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const temp1 = generateElements(nums);
const exec1 = temp1.init((num) => console.log(Math.pow(2, num)));

const temp2 = generateElements(['Carlos', 'Monice', 'Ana', 'Edirceu']);
const exec2 = temp2.init((name) => console.log(`Este(a) é ${name}`));

setTimeout(() => {
  exec1.stop();
}, 4000);
