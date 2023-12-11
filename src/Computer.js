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
    this.#answer = answer;

    return answer;
  }
}

export default Computer;
