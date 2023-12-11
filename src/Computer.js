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

    const convertedAnswer = Array.from(answer).join('');
    this.#answer = convertedAnswer;

    return convertedAnswer;
  }
}

export default Computer;
