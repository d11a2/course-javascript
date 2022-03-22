/* ДЗ 2 - работа с массивами и объектами */

/*
 Задание 1:

 Напишите аналог встроенного метода forEach для работы с массивами
 Посмотрите как работает forEach и повторите это поведение для массива, который будет передан в параметре array

 Пример:
   forEach([1, 2, 3], (el) => console.log(el))
 */
function forEach(array, fn) {
  for (let index = 0; index < array.length; index++) {
    fn(array[index], index, array);
  }
}

/*
 Задание 2:

 Напишите аналог встроенного метода map для работы с массивами
 Посмотрите как работает map и повторите это поведение для массива, который будет передан в параметре array

 Пример:
   map([1, 2, 3], (el) => el ** 2) // [1, 4, 9]
 */
function map(array, fn) {
  const newArray = [];
  for (let index = 0; index < array.length; index++) {
    newArray[index] = fn(array[index], index, array);
  }
  return newArray;
}

/*
 Задание 3:

 Напишите аналог встроенного метода reduce для работы с массивами
 Посмотрите как работает reduce и повторите это поведение для массива, который будет передан в параметре array

 Пример:
   reduce([1, 2, 3], (all, current) => all + current) // 6
 */
function reduce(array, fn, initial) {
  // описание reduce брал тут: https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce

  try {
    if (array.length === 0 && !initial) {
      throw new TypeError("Входные параметры 'array' и 'initial' не определены");
    }
  } catch (e) {
    console.log(`${e.name}: ${e.message}`);
  }

  if (initial && array.length === 0) {
    return initial;
  }

  let accumulator;
  let index = 0;

  if (initial) {
    accumulator = initial;
  } else {
    accumulator = array[0];
    index = 1;
  }

  for (; index < array.length; index++) {
    if (array[index]) {
      accumulator = fn(accumulator, array[index], index, array);
    }
  }

  return accumulator;
}
/*
 Задание 4:

 Функция должна перебрать все свойства объекта, преобразовать их имена в верхний регистр и вернуть в виде массива

 Пример:
   upperProps({ name: 'Сергей', lastName: 'Петров' }) вернет ['NAME', 'LASTNAME']
 */
function upperProps(obj) {
  const array = [];
  if (obj) {
    for (const key in obj) {
      array.push(key.toUpperCase());
    }
  }

  return array;
}

/*
 Задание 5 *:

 Функция принимает объект и должна вернуть Proxy для этого объекта
 Proxy должен перехватывать все попытки записи значений свойств и возводить это значение в квадрат

 Пример:
   const obj = createProxy({});
   obj.foo = 2;
   console.log(obj.foo); // 4
 */
function createProxy(obj) {
  const handler = {
    set: (obj, prop, value) => {
      obj[prop] = value ** 2;
      return true;
    },
  };

  return new Proxy(obj, handler);
}

export { forEach, map, reduce, upperProps, createProxy };
