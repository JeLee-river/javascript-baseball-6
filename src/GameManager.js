import { GAME_RESULT, GAME_RULES } from './Utils/Constants';
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

  isIncorrectAnswer() {
    const { strike } = this.#calculateResult(this.#numbers);
    return strike !== GAME_RULES.answerStrike;
  }

  getResult() {
    const { strike, ball } = this.#calculateResult(this.#numbers);
    const result = new Map();
    if (ball !== 0) {
      result.set(GAME_RESULT.ball, ball);
    }

    if (strike !== 0) {
      result.set(GAME_RESULT.strike, strike);
    }

    return result;
  }
}

export default GameManager;
