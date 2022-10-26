// array საშუალო არითმეტიკული

const myArr = [350, 20, 15, 88, 22];
console.log(myArr);
console.log(99);

// array  name and age property.

const person = {
  name: ["giorgi", "bichashvili"],
  age: 24,
  bio: function () {
    console.log(`${this.name[0]} ${this.name[1]} is ${this.age} years old.`);
  },
  introduceSelf: function () {
    console.log(`Hi! I'm ${this.name[0]}.`);
  },
};

person.name;
person.name[0];
person.age;
person.bio();
person.introduceSelf();

let human = {
  //Object
  firstname: "bob", //Properties
  lastname: " bob marley",
  adress: "Jamaica",
  age: "33",
  phoneNumbers: 555444333,
  specs: function () {
    return (
      "This is" + " " + this.name,
      "he is" +
        this.lastname +
        " he lives in " +
        this.adress +
        " he is " +
        this.age +
        " yeas old" +
        "he's phone numeber is " +
        this.phoneNumbers
    );
  },
};
console.log(human.specs());
