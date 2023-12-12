import { Console } from '@woowacourse/mission-utils';
import { GAME_RESULT } from '../Utils/Constants';

const OutputView = {
  printGameResult(result) {
    if (result.size === 0) {
      Console.print(GAME_RESULT.nothing);
      return;
    }

    result.forEach((count, resultCategory) => {
      Console.print(`${count}${resultCategory}`);
    });
  },
};

export default OutputView;
