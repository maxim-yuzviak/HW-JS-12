const ingredients = [
  "Картопля",
  "Гриби",
  "Часник",
  "Помідори",
  "Зелень",
  "Приправи",
];

const items = ingredients.map(ingredient => {
    const listItemEl = document.createElement("li");
    listItemEl.textContent = ingredient;
    return listItemEl;
});
console.log(items);

const itemList = document.querySelector("#ingredients");

itemList.append(...items)