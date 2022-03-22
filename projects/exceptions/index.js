/* ДЗ 3 - работа с исключениями и отладчиком */

/*
 Задание 1:

 1.1: Функция принимает массив и фильтрующую функцию и должна вернуть true или false
 Функция должна вернуть true только если fn вернула true для всех элементов массива

 1.2: Необходимо выбрасывать исключение в случаях:
   - array не массив или пустой массив (с текстом "empty array")
   - fn не является функцией (с текстом "fn is not a function")

 Запрещено использовать встроенные методы для работы с массивами

 Пример:
   isAllTrue([1, 2, 3, 4, 5], n => n < 10) // вернет true
   isAllTrue([100, 2, 3, 4, 5], n => n < 10) // вернет false
 */
function isAllTrue(array, fn) {
  try {
    if (array.constructor.name !== 'Array' || array.length === 0) {
      throw new Error('empty array');
    }

    if (fn.constructor.name !== 'Function') {
      throw new Error('fn is not a function');
    }

    for (let index = 0; index < array.length; index++) {
      if (!fn(array[index])) {
        return false;
      }
    }
    return true;
  } catch (error) {
    console.log(`${error.name}: ${error.message}`);
    throw error;
  }
}

/*
 Задание 2:

 2.1: Функция принимает массив и фильтрующую функцию и должна вернуть true или false
 Функция должна вернуть true если fn вернула true хотя бы для одного из элементов массива

 2.2: Необходимо выбрасывать исключение в случаях:
   - array не массив или пустой массив (с текстом "empty array")
   - fn не является функцией (с текстом "fn is not a function")

 Запрещено использовать встроенные методы для работы с массивами

 Пример:
   isSomeTrue([1, 2, 30, 4, 5], n => n > 20) // вернет true
   isSomeTrue([1, 2, 3, 4, 5], n => n > 20) // вернет false
 */
function isSomeTrue(array, fn) {
  try {
    if (array.constructor.name !== 'Array' || array.length === 0) {
      throw new Error('empty array');
    }

    if (fn.constructor.name !== 'Function') {
      throw new Error('fn is not a function');
    }

    for (let index = 0; index < array.length; index++) {
      if (fn(array[index])) {
        return true;
      }
    }
    return false;
  } catch (error) {
    console.log(`${error.name}: ${error.message}`);
    throw error;
  }
}
/*
 Задание 3:

 3.1: Функция принимает заранее неизвестное количество аргументов, первым из которых является функция fn
 Функция должна поочередно запустить fn для каждого переданного аргумента (кроме самой fn)

 3.2: Функция должна вернуть массив аргументов, для которых fn выбросила исключение

 3.3: Необходимо выбрасывать исключение в случаях:
   - fn не является функцией (с текстом "fn is not a function")
 */
function returnBadArguments(fn, ...args) {
  try {
    if (fn.constructor.name !== 'Function') {
      throw new Error('fn is not a function');
    }

    const array = [];

    for (let index = 0; index < args.length; index++) {
      try {
        fn(args[index]);
      } catch (error) {
        array.push(args[index]);
        console.log(`${error.name}: ${error.message}`);
      }
    }

    return array;
  } catch (error) {
    console.log(`${error.name}: ${error.message}`);
    throw error;
  }
}

/*
 Задание 4:

 4.1: Функция имеет параметр number (по умолчанию - 0)

 4.2: Функция должна вернуть объект, у которого должно быть несколько методов:
   - sum - складывает number с переданными аргументами
   - dif - вычитает из number переданные аргументы
   - div - делит number на первый аргумент. Результат делится на следующий аргумент (если передан) и так далее
   - mul - умножает number на первый аргумент. Результат умножается на следующий аргумент (если передан) и так далее

 Количество передаваемых в методы аргументов заранее неизвестно

 4.3: Необходимо выбрасывать исключение в случаях:
   - number не является числом (с текстом "number is not a number")
   - какой-либо из аргументов div является нулем (с текстом "division by 0")
 */
function calculator(number = 0) {
  const numberRegExp = new RegExp(`^[-+]?[0-9]*[.,]?[0-9]+(?:[eE][-+]?[0-9]+)?$`);

  try {
    if (!numberRegExp.test(number)) {
      throw new Error('number is not a number');
    }
  } catch (error) {
    console.log(`${error.name}: ${error.message}`);
    throw new Error('number is not a number');
  }

  const obj = {
    sum: (...args) => {
      for (let index = 0; index < args.length; index++) {
        number += args[index];
      }
      return number;
    },

    dif: (...args) => {
      for (let index = 0; index < args.length; index++) {
        number -= args[index];
      }
      return number;
    },

    div: (...args) => {
      try {
        for (let index = 0; index < args.length; index++) {
          if (number === 0 || args[index] === 0) {
            throw new Error('division by 0');
          }

          number /= args[index];
        }

        return number;
      } catch (error) {
        console.log(`${error.name}: ${error.message}`);
        throw new Error('division by 0');
      }
    },

    mul: (...args) => {
      for (let index = 0; index < args.length; index++) {
        number *= args[index];
      }
      return number;
    },
  };

  return obj;
}

/* При решении задач, постарайтесь использовать отладчик */

export { isAllTrue, isSomeTrue, returnBadArguments, calculator };
