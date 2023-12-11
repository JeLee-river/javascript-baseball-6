import { Console } from '@woowacourse/mission-utils';

const InputView = {
  async getUserAnswer() {
    const userAnswer = await Console.readLineAsync('숫자를 입력해주세요 :');

    return Number(userAnswer);
  },
};

export default InputView;
