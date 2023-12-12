import { Console } from '@woowacourse/mission-utils';

const OutputView = {
  printGameResult(result) {
    if (result.size === 0) {
      Console.print('낫싱');
      return;
    }

    result.forEach((count, resultCategory) => {
      Console.print(`${count}${resultCategory}`);
    });
  },
};

export default OutputView;
