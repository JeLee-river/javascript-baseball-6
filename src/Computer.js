import { Random } from '@woowacourse/mission-utils';

class Computer {
  #answer;

  constructor() {
    this.#makeAnswer();
  }

  #makeAnswer() {
    const answer = new Set();
    while (answer.size < 3) {
      const number = Random.pickNumberInRange(1, 9);
      answer.add(number);
    }

    const answerArray = Array.from(answer);
    this.#answer = answerArray;

    return answerArray;
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

      return baseballCounter;
    });
  }
}

export default Computer;
