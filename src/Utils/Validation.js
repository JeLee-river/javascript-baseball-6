import { MESSAGE, GAME_RULES } from './Constants';

const Validation = {
  isNotEmptyString: (number) => {
    const trimmedNumber = number.trim();

    if (trimmedNumber === '') {
      throw new Error(MESSAGE.isNotEmptyString);
    }
  },

  isNumber: (number) => {
    const convertedNumber = Number(number);

    if (Number.isNaN(convertedNumber)) {
      throw new Error(MESSAGE.isNumber);
    }
  },

  isAnswerNumberInRange: (number) => {
    const convertedNumber = Number(number);
    if (!Number.isInteger(convertedNumber)) {
      throw new Error(MESSAGE.isAnswerInteger);
    }

    if (
      convertedNumber < GAME_RULES.minimumNumber ||
      convertedNumber > GAME_RULES.maximumNumber
    ) {
      throw new Error(MESSAGE.isAnswerNumberInRange);
    }
  },

  isRestartNumberInRange: (number) => {
    const convertedNumber = Number(number);

    if (
      convertedNumber !== GAME_RULES.restart &&
      convertedNumber !== GAME_RULES.finish
    ) {
      throw new Error(MESSAGE.isRestartNumberInRange);
    }
  },

  isValidLength: (numberArray) => {
    const convertedNumberArray = numberArray.map(Number);

    if (convertedNumberArray.length !== 3) {
      throw new Error(MESSAGE.isValidLength);
    }
  },

  isDifferentNumber: (numberArray) => {
    const convertedNumberArray = numberArray.map(Number);
    const numberSet = new Set([...convertedNumberArray]);

    if (numberArray.length !== numberSet.size) {
      throw new Error(MESSAGE.isDifferentNumber);
    }
  },
};

export default Validation;
