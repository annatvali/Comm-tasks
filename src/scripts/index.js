// 1) შექმენით ერთგანზომილებიანი მსაივი საიდანაც for ციკლის მეშვებოთ დაბეჭდავთ მასივში არსებულ ყველა ელემენტს

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
for (let i = 0; i < arr.length; i++) {
  console.log(arr[i]);
}

// ორგანზომილებიანი

const arr2 = [
  [11, 22, 33],
  [44, 55, 66],
  [77, 88, 99],
];

for (let i = 0; i < arr2.length; i++) {
  for (let j = 0; j < arr2[i].length; j++) {
    console.log(arr2[i][j]);
  }
}

// for (let subArr of arr2) {
//   for (let item of subArr) {
//     console.log(item);
//   }
// }

// array მეთოდების გამოყენებით

// arr2.map(subArr => subArr.map(item => console.log(item)));
// console.log(arr2.flat());
// console.log(arr2.flatMap((item) => item));

// 2) შექმენით ფუნქცია სადაც ერთ ფუნქციას გამოიყენებთ მოერე ფუნქციის პარამეტრად და if
// else მეშვეობით დაბეჭდეთ რამე ინფორმაცია (მაგ: თუ რამე ნივთის ფასი
// მაღაზიაში არის 50 ლარზე მეტი ესეიგი ძვირია თუ 20-50 დიაპაზონშია მოქცეული
// საშუალო თუ ნაკლები იაფი)

const calculatePrice = () => {
  const initialPrice = 48;
  const VAT = 0.18;
  const price = initialPrice + initialPrice * VAT;
  return price;
};

const display = (productName, priceFunction) => {
  const price = priceFunction();
  let priceDescription = '';

  if (price > 50) {
    priceDescription = 'ძვირია!';
  } else if (price >= 20 && price <= 50) {
    priceDescription = 'საშუალო ფასია!';
  } else {
    priceDescription = 'იაფია!';
  }

  console.log(`${productName}ს ფასია: ${price}ლ, რაც ${priceDescription}`);
};

display('პროდუქტი', calculatePrice);

// 3) მოცემული მასივიდან [ 15,53,22,198,10,28,16,70,33,951 ] დაბეჭდეთ ყველაზე დიდი რიცხვი

// for ციკლის გამოყენებით

const arr3 = [15, 53, 22, 198, 10, 28, 16, 70, 33, 951];
let max = arr3[0];

for (let i = 0; i < arr3.length; i++) {
  if (arr3[i] > max) {
    max = arr3[i];
  }
}

// array მეთოდების გამოყენებით

arr3.sort((a, b) => b - a);

arr3.map((item) => {
  if (item > max) {
    max = item;
  }
});

console.log(max);
