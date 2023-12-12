import Validation from './Utils/Validation';

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
    return this.#restartOption === 1;
  }
}
export default GameController;
