class GameManager {
  #numbers;

  #answer;

  constructor(userNumbers, answer) {
    this.#numbers = userNumbers;
    this.#answer = answer;
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

  showResult(userNumbers) {
    const { strike, ball } = this.#calculateResult(userNumbers);
    return new Map([
      ['스트라이크', strike],
      ['볼', ball],
    ]);
  }
}

export default GameManager;
