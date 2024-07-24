//Flattening array
const nested = [1, [2, [3, [4, 5]]]];
const flatArray = nested.flat(Infinity);
console.log("Flattening Array : ", flatArray,"<br>");

//Array of object sorting
const people = [
    { name: "John", age: 30 },
    { name: "Jane", age: 25 },
    { name: "Jim", age: 35 }
];
people.sort((a, b) => a.age - b.age);
console.log("Sorted People by Age:", people);

//Creating new array with a given length
const length = 5;
const newArray = Array.from({ length }, (_, i) => i + 1);
console.log("New Array with Length:", newArray);

//Merging the arrays
const array1 = [1, 2, 3];
const array2 = [4, 5, 6];
const mergedArray = [...array1, ...array2];
console.log("Merged Array:", mergedArray);

//Array destructuring
const fruits=[firstFruit, secondFruit, thirdFruit];
console.log("First Fruit:", firstFruit);
console.log("Second Fruit:", secondFruit);
console.log("Third Fruit:", thirdFruit);



