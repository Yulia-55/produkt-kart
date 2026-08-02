// homework №7.3
function choweTemperatureCyty(cyty, temperature) {
  console.log(`Сейчас в ${cyty} температура ${temperature} градусов по Цельсию`)  
}
choweTemperatureCyty('Борова', '20')

const choweCytyTemperature = (cyty, temperature) => {
  return `Сейчас в ${cyty} температура ${temperature} градусов по Цельсию`
}
console.log(choweCytyTemperature('Борова', '23'))

// homework №7.4
const LIGHT_SPEED = 299792458;
function comparedeLight(light) {
  if (light < LIGHT_SPEED) {
    console.log('Субсветовая скорость')
  } else if (light === LIGHT_SPEED) {
    console.log('Скорость света')  
  } else {
    console.log('Сверхсветовая скорость')
  }
}
comparedeLight(7949078)

// homework №7.5
const product = "Пылесос";
const price = 3000;
function comparePriceBudget(budget) {
  if (budget >= price) {
    console.log(`${product} приобретен, спасибо за покупку!`)
  } else {
    const differense = price - budget;
    console.log(`Вам не хватает ${differense}, пополните бюджет.`)
  }
}
comparePriceBudget(5000)

// homework №7.6
const addThreeNumbers = (num1, num2, num3) => {
  console.log(num1 + num2 + num3)
} 
addThreeNumbers(20, 30, 15)

// homework №7.7
let myAddress = 'Боровая, ул.Черника';
console.log(myAddress)
