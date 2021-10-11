// 1. Create an array named numbers and store 5 number values in it

let numbers = [12,23,34,45,56];

// 2. Calculate the sum of array items and print it to the console using console.log()

let sum = 0;
for(let number of numbers){
    sum += number;
}
console.log(sum);

// 3. Calculate the average of array items and print it to the console using console.log()

let sum = 0;
for(let number of numbers){
    sum += number;
}
let average = sum/numbers.length;
console.log(average);

// 4. Find the highest number in the array and print it to the console using console.log()

let maximumNum = numbers[0];
for(i=1; i < numbers.length; i++){
    if(maximumNum < numbers[i])
    maximumNum = numbers[i];
}
console.log(maximumNum);

// 5. Find the lowest number in the array and print it to the console using console.log()

let minimumNum = numbers[0];
for(i=1; i < numbers.length; i++){
    if(minimumNum > numbers[i])
    maximumNum = numbers[i];
}
console.log(minimumNum);

// 6. Find the even numbers in the array and print them to the console using console.log()

for(let number in numbers){
    if(numbers[number] % 2 === 0)
    console.log(numbers[number]);
}

// 7. Find the odd numbers in the array and print them to the console using console.log()

for(let number in numbers){
    if(numbers[number] % 2 != 0)
    console.log(numbers[number]);
}

// 8. Find the numbers in the array that is divisible by 5 and print them to the console using console.log()

for(let number in numbers){
    if(numbers[number] % 5 === 0)
    console.log(numbers[number]);
}

// 9. Log all the element of the array one by one

for(let number in numbers){
    console.log(numbers[number]);
}

// 10. Find all the number in the array that is divisible by 3

for(let number in numbers){
    if(numbers[number] % 3 === 0)
    console.log(numbers[number]);
}