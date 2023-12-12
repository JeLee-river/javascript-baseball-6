import Validation from './Utils/Validation';
import { GAME_RULES } from './Utils/Constants';

class GameController {
  #restartOption;

  constructor(userOption) {
    this.#validate(userOption);
    this.#restartOption = userOption;
  }

  #validate(option) {
    Validation.isNumber(option);
    Validation.isRestartNumberInRange(option);
  }

  hasStart() {
    return this.#restartOption === GAME_RULES.restart;
  }
}
export default GameController;
