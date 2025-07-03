//Zavdany 1
const user = {
    name: "Vitalik",
    age: 13,
    hobby: "coding html, css, js",
    premium: true,
};

user.mood = "angry";

user.hobby = "coding on arduino";

user.premium = false;

const keys = Object.keys(user);

for (const key of keys) {
    console.log(`${key}: ${user[key]}`);
}
// Zavdanya 2

function countProps(obj) {
    return Object.keys(obj).length;
}

const user2 = {
    name: "Vitalik",
    age: 13,
    email: "vitalik@kit.cat",
};

console.log(countProps(user2));
// Zavdany 3
function findBestEmployee(employees) {
    let maxTasks = 0;
    let bestEmployee = "";

for (const name in employees) {
    if (employees[name] > maxTasks) {
        maxTasks = employees[name];
        bestEmployee = name;
    }
}

return bestEmployee;
}

const team = {
    Georhii: 29,
    Vadim: 35,
    Vitalik: 47,
    Vasiliy: 42
};

console.log(findBestEmployee(team));
// Zavdanya 4
function countTotalSalary(employees) {
    let total = 0;

for (const name in employees) {
    total += employees[name];
}

return total;
}

const salaries = {
    Georhii: 5000,
    Vadim: 6900,
    Vitalik: 7200,
};

console.log(countTotalSalary(salaries));
// Zavdanya 5
function getAllPropValues(arr, prop) {
    const result = [];

for (const obj of arr) {
    if (obj.hasOwnProperty(prop)) {
        result.push(obj[prop]);
    }
}

return result;
}

const products = [
    { name: "Apple", price: 30, quantity: 3 },
    { name: "Banana", quantity: 5 },
    { name: "Cherry", price: 50 }
];

console.log(getAllPropValues(products, "name"));
console.log(getAllPropValues(products, "quantity"));
console.log(getAllPropValues(products, "price"));
// Zavdanya 6
function calculateTotalPrice(allProducts, productName) {
    for (const product of allProducts) {
        if (product.name === productName) {
            return product.price * product.quantity;
        }
    }
return 0;
}

const products2 = [
    { name: "Apple", price: 10, quantity: 5 },
    { name: "Banana", price: 7, quantity: 8 },
    { name: "Orange", price: 9, quantity: 3 }
  ];
  
  console.log(calculateTotalPrice(products2, "Apple"));
console.log(calculateTotalPrice(products2, "Banana"));
  console.log(calculateTotalPrice(products2, "Orange"));
