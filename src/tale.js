//первое задание
function Kolobok(character) {
    switch (character) {
      case 'дедушка':
        console.log('Я от дедушки ушёл');
        break;
      case 'заяц':
        console.log('Я от зайца ушёл');
        break;
      case 'лиса':
        console.log('Меня съели');
        break;
      default:
        console.log( 'Я встретил незнакомца');
        break;
    }  
  }

Kolobok('дедушка');

//второе задание 
function newYear(character) {
  switch(character) {
    case 'Дед мороз':
    case 'Снегурочка':
      console.log(`${character}! ${character}! ${character}!`)
      break;
    default:
      console.log('Указан неизвестный персонаж');
  }
}

newYear('Дед мороз')