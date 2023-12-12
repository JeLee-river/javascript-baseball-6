import Validation from './Utils/Validation';

class GameManager {
  #numbers;

  #answer;

  constructor(userNumbers, answer) {
    this.#validate(userNumbers);
    this.#numbers = userNumbers;
    this.#answer = answer;
  }

  #validate(numbers) {
    const numberArray = numbers.split('');
    numberArray.forEach((number) => {
      Validation.isNotEmptyString(number);
      Validation.isNumber(number);
    });

    Validation.isValidLength(numberArray);
    Validation.isDifferentNumber(numberArray);
  }

  #calculateResult(numbers) {
    const baseballCounter = { strike: 0, ball: 0 };
    this.#answer.forEach((number, index) => {
      const foundIndex = numbers.indexOf(number);
      if (foundIndex === index) {
        baseballCounter.strike += 1;
      }

      if (foundIndex !== -1) {
        baseballCounter.ball += 1;
      }
    });

    return baseballCounter;
  }

  getResult(userNumbers) {
    const { strike, ball } = this.#calculateResult(userNumbers);
    return new Map([
      ['스트라이크', strike],
      ['볼', ball],
    ]);
  }
}

export default GameManager;
