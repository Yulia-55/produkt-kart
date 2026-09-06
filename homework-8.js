// Homework 7.3
const personData = {
  name: 'Юлия',
  surname: 'Кривошея',
  age: 55,
  country: 'Украна',
  cityResidence: 'Борова',
  cityBirth: 'Киев',
  education: 'Высшее'
};
console.log(Object.entries(personData));

// Homework 7.4
const vehicleDescription = {
  brand: 'Toyota',
  model: 'Camry',
  year: 2020,
  color: 'Black',
  carTransmission: 'Automatic'
};
vehicleDescription.owner = personData;
console.log(vehicleDescription);

// Homework 7.5
const addMaxSpeed = (vehicleDescription, maxSpeed) => {
  const arrayKeys = Object.keys(vehicleDescription)
  if (arrayKeys.includes('maxSpeed')) {
    return
  } else {
    vehicleDescription.maxSpeed = maxSpeed
  }
};
addMaxSpeed(vehicleDescription, 250);
console.log(vehicleDescription);

// Homework 7.5 мethod 2
const addMaxSpeed1= (vehicleDescription, maxSpeed) => {
  if (!Object.hasOwn(vehicleDescription, 'maxSpeed')) {
    vehicleDescription.maxSpeed = maxSpeed;
  }
};
addMaxSpeed1(vehicleDescription, 250);
console.log(vehicleDescription);

// Homework 7.6
const showObjectValues = (object, key) => {
  console.log(object[key])
};
showObjectValues(vehicleDescription, 'brand');

// Homework 7.7
const productList = [ 'Молоко', 'Хлеб', 'Сыр', 'Яйца', 'Масло' ]
console.log(productList);

// Homework 7.8
const dogBreedList = [
  { 
    breed: 'Бордер колли',
    country: 'Великобритания',
    groupFci: 1,
    intendedUse: 'Пастушья собака',
    size: 'Средняя'
  },
  { 
    breed: 'Американский стаффордширский терьер',
    country: 'США',
    groupFci: 3,
    intendedUse: 'Служебная собака',
    size: 'Средняя'
  },
  { 
    breed: 'Аляскинский маламут',
    country: 'США',
    groupFci: 5,
    intendedUse: 'Ездовая собака',
    size: 'Крупная'
  }  
];
const akita = {
  breed: 'Американская акита',
  country: 'США',
  groupFci: 5,
  intendedUse: 'Охотничья собака',
  size: 'Крупная'
};
dogBreedList.push(akita);
console.log(dogBreedList);

// Homework 7.9
const serviceDogList = [
  { 
    breed: 'Немецкая овчарка',
    country: 'Германия',
    groupFci: 1,
    intendedUse: 'Служебная собака',
    size: 'Крупная'
  },
  { 
    breed: 'Русский черный терьер',
    country: 'Россия',
    groupFci: 2,
    intendedUse: 'Служебная собака',
    size: 'Крупная'
  },
  { 
    breed: 'Бельгийская овчарка',
    country: 'Бельгия',
    groupFci: 1,
    intendedUse: 'Служебная собака',
    size: 'Крупная'
  }  
]

const newdogBreedList = [ ...dogBreedList, ...serviceDogList ]
console.log(newdogBreedList)

// Homework 7.10
const dogBreedList2 = newdogBreedList.map(dog => ({
  ...dog,
  breedSelect: dog.groupFci === 5
  ? 'Примитивная порода'
  : 'Искусственно выведенная порода'
}))

console.log(dogBreedList2)


