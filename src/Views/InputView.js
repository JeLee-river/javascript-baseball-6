import { Console } from '@woowacourse/mission-utils';

const InputView = {
  async getUserAnswer() {
    const userAnswer = await Console.readLineAsync('숫자를 입력해주세요 :');

    return Number(userAnswer);
  },

  async getRestartAnswer() {
    const restartAnswer = await Console.readLineAsync(
      '게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.',
    );

    return Number(restartAnswer);
  },
};

export default InputView;
