const numbers = [11,15,16,17,20,25,27,100]

for (let i = 0; i < numbers.length; i++) {
  const num = numbers[i];

  if (num % 2 === 0) {
    console.log(`${num} is Even`);
  } else {
    console.log(`${num} is Odd`);
  }
}
