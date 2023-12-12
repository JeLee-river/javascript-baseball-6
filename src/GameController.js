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
}

export default GameController;
