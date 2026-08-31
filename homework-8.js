// Homework 7.3
const dataPerson = {
  name: 'Юлия',
  surname: 'Кривошея',
  age: 55,
  country: 'Украна',
  cityResidence: 'Борова',
  cityBirth: 'Киев',
  education: 'Высшее'
}
console.log(Object.entries(dataPerson))

// Homework 7.4
const descripsionVehicle = {
  brand: 'Toyota',
  model: 'Camry',
  year: 2020,
  color: 'Black',
  carTransmission: 'Automatic'
}
descripsionVehicle.owner = dataPerson
console.log(descripsionVehicle)

// Homework 7.5
const addMaxSpeed = (descripsionVehicle, maxSpeed) => {
  const arrayKeys = Object.keys(descripsionVehicle)
  if (arrayKeys.includes('maxSpeed')) {
    return
  } else {
    descripsionVehicle.maxSpeed = maxSpeed
  }
}
addMaxSpeed(descripsionVehicle, 250)
console.log(descripsionVehicle)

// Homework 7.6
const showObjectValues = (object, key) => {
  console.log(object[key])
}
showObjectValues(descripsionVehicle, 'brand')

// Homework 7.7
const listProducts = [ 'Молоко', 'Хлеб', 'Сыр', 'Яйца', 'Масло' ]
console.log(listProducts)

// Homework 7.8
const listDogBreeds = [
  { breed: 'Бордер колли',
    country: 'Великобритания',
    groupFci: 1,
    intendedUse: 'Пастушья собака',
    size: 'Средняя'},
  { breed: 'Американский стаффордширский терьер',
    country: 'США',
    groupFci: 3,
    intendedUse: 'Служебная собака',
    size: 'Средняя'},
  { breed: 'Аляскинский маламут',
    country: 'США',
    groupFci: 5,
    intendedUse: 'Ездовая собака',
    size: 'Крупная'}  
]
const akita = {
  breed: 'Американская акита',
  country: 'США',
  groupFci: 5,
  intendedUse: 'Охотничья собака',
  size: 'Крупная'
}
listDogBreeds.push(akita)
console.log(listDogBreeds)

// Homework 7.9
const listDogSecurity = [
  { breed: 'Немецкая овчарка',
    country: 'Германия',
    groupFci: 1,
    intendedUse: 'Служебная собака',
    size: 'Крупная'},
  { breed: 'Русский черный терьер',
    country: 'Россия',
    groupFci: 2,
    intendedUse: 'Служебная собака',
    size: 'Крупная'},
  { breed: 'Бельгийская овчарка',
    country: 'Бельгия',
    groupFci: 1,
    intendedUse: 'Служебная собака',
    size: 'Крупная'}  
]

const newListDogBreeds = [ ...listDogBreeds, ...listDogSecurity ]
console.log(newListDogBreeds)

// Homework 7.10
const listDogBreeds2 = newListDogBreeds.map(dog => ({
  ...dog,
  breedSelect: dog.groupFci === 5
  ? 'Примитивная порода'
  : 'Искусственно выведенная порода'
}))

console.log(listDogBreeds2)


