const { exec } = require('child_process');

function generateNumbers() {
  return {
    init(fn, intervalDelay = 1000) {
      let num = 0;

      const i = setInterval(() => {
        fn(num++);
      }, intervalDelay);

      return {
        stop() {
          clearInterval(i);
        },
      };
    },
  };
}

const temp1 = generateNumbers();
const exec1 = temp1.init((num) => {
  console.log(`#1 ${num * 2}`);
}, 2000);

const temp2 = generateNumbers();
const exec2 = temp1.init((num) => {
  console.log(`#2 ${num + 100}`);
});

setTimeout(() => {
  exec1.stop();
  exec2.stop();
}, 10000);
