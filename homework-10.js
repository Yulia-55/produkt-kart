// 10.3 - создание и реализация шаблона продуктовой карточки
import { productList } from "./product.js";
console.log(productList);
const cardTemplate = document.querySelector('.card-template');
const productContainer = document.querySelector('.products');
productList.forEach((product) => {
  const cardClone = cardTemplate.content.cloneNode(true);
  cardClone.querySelector('.card__image').src = product.foto;
  cardClone.querySelector('.card__remark').textContent = product.remark;
  cardClone.querySelector('.card__name').textContent = product.name;
  cardClone.querySelector('.card__description-text').textContent = product.description;
  cardClone.querySelector('.composition__component1').textContent = product.component1;
  cardClone.querySelector('.composition__component2').textContent = product.component2;
  cardClone.querySelector('.composition__component3').textContent = product.component3;
  cardClone.querySelector('.card__price-value').textContent = product.price;
  productContainer.appendChild(cardClone);
});

// 10.4 - создание массива объектов, где ключем 
// является название продукта, а значением - его описание
const productNameAndDescription = productList.reduce((acc, product) => {
  acc[product.name] = product.description;
  return acc;
}, []);
console.log(productNameAndDescription);