// function sum(a: number, b: number) {
//   return a + b;
// }

// const c = sum(3, 4); //7

// console.log(c);

// function multiplyArrayByTen(array: number[]) {
//   return array.map(element => (element *= 10));
// }

// const numbers = [1, 2, 3];
// const numbersMultipliedByTen = multiplyArrayByTen([]);

// console.log(numbersMultipliedByTen);

type Person = {
  firstName: string;
  lastName: string;
};

function fullName({ firstName, lastName }: Person) {
  return firstName + lastName;
}

const firstName = "Dom";
const lastName = "Gemoli";

const allTheName = fullName({
  firstName,
  lastName,
});

console.log(allTheName);
