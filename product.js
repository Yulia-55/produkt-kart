// 10.2 - создание массива объектов (продуктовых карточек)
export const productList = [
  {
    foto: "img/photo_1.png",
    remark: 'для нормальной кожи',
    name: 'Увлажняющий мусс',
    description: 'Глубоко увлажняют кожу лица, оставляя её мягкой и гладкой.',    
    component1: 'активные натуральные комплексы',
    component2: 'витамины С, А, РР, В И Е',
    component3: "солнцезащитные компоненты",    
    price: '2 750 ₽'
  },
  {
    foto: "img/photo_2.png",
    remark: 'для нормальной кожи',
    name: 'Увлажняющая маска',
    description: 'Способствует удерживанию влаги в верхних слоях кожи.',    
    component1: 'воски',
    component2: 'минералы',
    component3: "масла",    
    price: '3 500 ₽'
  },
  {
    foto: "img/photo_3.png",
    remark: 'для нормальной кожи',
    name: 'Гель для умывания',
    description: 'Интенсивно очищает, не повреждает защитный барьер кожи.',    
    component1: 'минералы',
    component2: 'витамины С, А, РР, В И Е',
    component3: "солнцезащитные компоненты",    
    price: '1 650 ₽'
  },
  {
    foto: "img/photo_4.png",
    remark: 'для нормальной кожи',
    name: 'Подарочный набор №1',
    description: 'Набор, состоящий из увлажняющего крема и маски.',    
    component1: 'воски',
    component2: 'минералы',
    component3: "масла",    
    price: '4 750 ₽'
  },
  {
    foto: "img/photo_5.png",
    remark: 'для нормальной кожи',
    name: 'Подарочный набор №5',
    description: 'Глубоко увлажняют кожу лица, оставляя её мягкой и гладкой.',    
    component1: 'воски',
    component2: 'минералы',
    component3: "масла",    
    price: '7 520 ₽'
  }
];

const cardTemplate = document.getElementsByClassName('card-template');
console.log(cardTemplate[0].content);
