// var square = x => x * x;
// console.log(square(9));

var user = {
  name: 'Taz',
  sayHi: () => {
    console.log(arguments);
    console.log(`Hi ${this.name}`);
  },
  sayHiAlt () {
    console.log(arguments[3]);
    console.log(`Hi ${this.name}`);
  }
};

// user.sayHi();
user.sayHiAlt(1, 2, 3);
