
// 9.2

const arrayNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const newArrayNumbers = arrayNumbers.filter((number) => number >= 5);
console.log(newArrayNumbers);

// 9.3

const dogBreedList = [
  'Бордер колли',
  'Американская акита',
  'Аляскинский маламут', 
  'Немецкий дог', 
  'Немецкая овчарка', 
  'Русский черный терьер', 
  'Бельгийская овчарка' 
];

const checkBreed = (breed) => {
  dogBreedList.includes(breed)
    ? console.log(`Порода ${breed} есть в списке`)
    : console.log(`Порода ${breed} отсутствует в списке`);
};
checkBreed('Американская акита');

// 9.4

const invertedArray = (array) => {
  const newArray = array.reverse();
  console.log(newArray);
};
invertedArray(dogBreedList);
invertedArray(arrayNumbers);

// 9.7 - создание массива комментариев пользователей,
// почта которых содержит .com
import { commentsNetworkSocial } from './comments.js';

const commentsWithComEmail = commentsNetworkSocial.filter(comment => 
  comment.email.includes('.com')
);
console.log(commentsWithComEmail);

// 9.8 - создание массива с измененным postId
const commentsWithNewPostId = commentsNetworkSocial.map(comment => ({
  ...comment,
  postId: comment.id > 5
  ?  1
  :  2
}))
console.log(commentsWithNewPostId);

// 9.9 - создание массива, объекты которого состоят 
// только из айди и имени
const commentsNetworkSocialIdName = commentsNetworkSocial.map(comment => ({
  id: comment.id,
  name: comment.name
}));
console.log(commentsNetworkSocialIdName);

// 9.10 - добавление нового свойства в объекты массива
const commentsNetworkSocialWithIsInvalid =commentsNetworkSocial.map(comment => ({
  ...comment,
  isInvalid: comment.body.length > 180
  ? true
  : false
}));
console.log(commentsNetworkSocialWithIsInvalid);

// 9.11 - создание массива почт с помощью метода map, reduce
const userEmailsList = commentsNetworkSocial.map(comment => comment.email);
console.log(userEmailsList);

const userEmailsList1 = commentsNetworkSocial.reduce((acc, comment) => {
  acc.push(comment.email);
  return acc;
}, []);
console.log(userEmailsList1);

// 9.12
const userEmailsListString = userEmailsList.toString();
console.log(userEmailsListString);

const userEmailsListString1 = userEmailsList.join(', ');
console.log(userEmailsListString1);
