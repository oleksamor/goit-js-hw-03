const defaultSettings = {
  theme: "light",
  public: true,
  withPassword: false,
  minNumberOfQuestions: 10,
  timePerQuestion: 60,
};
const overrideSettings = {
  public: false,
  withPassword: true,
  timePerQuestion: 30,
};

const finalSettings = {
...defaultSettings, ...overrideSettings
};

console.log(finalSettings);


// const firstGroupScores = [64, 42, 93];
// const secondGroupScores = [89, 14, 51, 26];
// const thirdGroupScores = [29, 47, 18, 97, 81];

// const allScores = [...firstGroupScores, ...secondGroupScores, ...thirdGroupScores];

// const bestScore = Math.max(...allScores);
// const worstScore = Math.min(...allScores);
// console.log(allScores);
// console.log(bestScore);
// console.log(worstScore);





// function getExtremeScores(scores) {
//     // console.log(Math.max(...scores));
//     // console.log(Math.min(...scores));
//     const obj = {
//         best: Math.max(...scores),
//         worst: Math.min(...scores)
//     }
//    console.log(obj);
//     return obj;
// }
// getExtremeScores([89, 64, 42, 17, 93, 51, 26]);
// getExtremeScores([19, 7, 4, 17, 81, 24]);



// function addOverNum(value, ...args) {
//     let sum = 0;
//     for (let i = 0; i < args.length; i++) {
//         if (args[i] > value) {
//             sum += args[i];
//                }
        
//     }
//     console.log(sum);
// }
// addOverNum(50, 15, 27);
// addOverNum(10, 12, 4, 11, 48, 10, 8);
// addOverNum(15, 32, 6, 13, 19, 8);
// addOverNum(20, 74, 11, 62, 46, 12, 36);


// function multiply(first, second, ...args) {
//   console.log(first, second, args);
// }

// multiply(1, 2); // 1 2
// multiply(1, 2, 3); // 1 2 [3] 
// multiply(1, 2, 3, 4); // 1 2 [3, 4]


// function add(...args) {
//     console.log(args);
//     let sum = 0;
//   for (let index = 0; index < args.length; index++) {
//      sum += args[index];
    
//   }  
//    console.log(sum); 
// }
// add(15, 27);
// add(12, 4, 11, 48);
// add(32, 6, 13, 19, 8)
// function multiply(...args) {
//   console.log(args);
// }

// multiply(1, 2); // [1, 2]
// multiply(1, 2, 3); // [1, 2, 3]
// multiply(1, 2, 3, 4); // [1, 2, 3, 4]


// const atTheOldToad = {
//   potions: [],
//   getPotions() {
//     return "List of all available potions"
//   },
//   addPotion(potionName) {
//     return `Adding ${potionName}`;

//   },

// }

// console.log(atTheOldToad.getPotions());
// console.log(atTheOldToad.addPotion("Invisibility"));
// console.log(atTheOldToad.addPotion("Power potion"));

// const bookShelf = {
//   books: ["The Last Kingdom", "Dream Guardian"],
  
//   getBooks() {
//     return "Returning all books";
//   },
  
//   addBook(bookName) {
// 		return `Adding book ${bookName}`;
//   },
// };

// // Виклики методів
// console.log(bookShelf.getBooks()); // поверне "Returning all books"
// console.log(bookShelf.addBook("New book 1")) ; // поверне "Adding book New book 1"
// console.log( bookShelf.addBook("New book 2")); // поверне "Adding book New book 2"



// const obj = {
// 	method(value) {
// 		console.log(`I'm a method with ${value}!`);
// 	}
// };

// obj.method(5); // "I'm a method with 5!"
// obj.method(10); // "I'm a method with 10!"

// function calculateTotalPrice(productName) {
//   const products = [
//     { name: "Radar", price: 1300, quantity: 4 },
//     { name: "Scanner", price: 2700, quantity: 3 },
//     { name: "Droid", price: 400, quantity: 7 },
//     { name: "Grip", price: 1200, quantity: 9 },
//   ];

//   let totalPrice = [];
  
//   for (const product of products) {
    
//     // console.log("productName:", productName);
//     // console.log("name:", product.name);
//     // console.log(product);
     
//     if (productName === product.name) {
//        totalPrice = product.price * product.quantity; 
//       return totalPrice;  
//     }
    
//   }
  
//   return (`Product ${productName} not found!`);
         
//   }
   



// console.log(calculateTotalPrice("Blaster"));
// console.log(calculateTotalPrice("Radar"));
// console.log(calculateTotalPrice("Droid"));
// console.log(calculateTotalPrice("Grip"));
// console.log(calculateTotalPrice("Scanner"));

// function getAllPropValues(propName) {
//   const products = [
//     { name: "Radar", price: 1300, quantity: 4 },
//     { name: "Scanner", price: 2700, quantity: 3 },
//     { name: "Droid", price: 400, quantity: 7 },
//     { name: "Grip", price: 1200, quantity: 9 },
//   ];
//   let arr = [];
 
//   for (const product of products) {
// // console.log(typeof product[propName]);

//      if (product[propName]) {
//        arr.push(product[propName]);
//      }
    
//   }

//   return arr;
// }


// console.log(getAllPropValues("name"));
// console.log(getAllPropValues("quantity")); 
// console.log(getAllPropValues("price")); 
// console.log(getAllPropValues("category")); 


// function getProductPrice(productName) {
  
//   const products = [
//     { name: "Radar", price: 1300, quantity: 4 },
//     { name: "Scanner", price: 2700, quantity: 3 },
//     { name: "Droid", price: 400, quantity: 7 },
//     { name: "Grip", price: 1200, quantity: 9 },
//   ];


//   for (const name of products) {
   
//     if (name.name === productName) {
//       return name.price;
           
//     }
       
//   }

//  return null;
// }
// console.log(getProductPrice("Radar"));
// console.log(getProductPrice("Grip"));
// console.log(getProductPrice("Scanner"));
// console.log(getProductPrice("Droid"));
// console.log(getProductPrice("Engine"));





// const colors = [
//   { hex: "#f44336", rgb: "244,67,54" },
//   { hex: "#2196f3", rgb: "33,150,243" },
//   { hex: "#4caf50", rgb: "76,175,80" },
//   { hex: "#ffeb3b", rgb: "255,235,59" },
// ];

// let hexColors = [];
// const rgbColors = [];
// for (let name of colors) {
//  let hexc = name.hex;
//   hexColors.push(hexc);
//   let rgbs = name.rgb;
//   rgbColors.push(rgbs);
  
// }
// console.log(hexColors);
// console.log(rgbColors);