// подтягиваем код который хотим тестировать 
const removeChar = require("./script");

test (
  // первый параметр это описание теста
  "Проверяем удаление строки",
  // второй параметр приминяется функция которая запускает тест
  () => {
    expect (removeChar('eloquent')).toBe('loquen'); 
  }
);

describe (
  "Проверка удаления строки",
  () => {
    // создаем константу где сохранены наборы данных
    // где хранятся ключи, т е данные которые засовываем и ожидаем
      const testCase = [
        {
          inString: 'eloquent',
          expected: 'loquen'
        },
        {
          inString: 'country',
          expected: 'ountr'
        }
      ]
      //Перебераем с помощью массива
    testCase.forEach(test => {
      // тест принимает 2 параметра
      it (
        // описание тетста
        `Входящая строка: ${test.inString} ожидаю: ${test.expected}`,
        // второй параметр функция
        ()=> {
          //ожидаем результат 
          const res = removeChar(test.inString)
          // сравниваем
          expect(res).toBe(test.expected)
        }
      )
    });  
  }
)
