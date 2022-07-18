const items = document.querySelectorAll(".item");

const categoriesNumber = items.length;
console.log(`Number of categories: ${categoriesNumber}`);

for (const item of items) {
  const itemTitle = item.querySelector("h2").textContent;
  //   console.log();
  const itemNumber = item.querySelectorAll("li").length;
  console.log(`Category: ${itemTitle}
Elements: ${itemNumber}`);
}
