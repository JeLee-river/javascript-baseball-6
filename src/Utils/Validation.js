const Validation = {
  isNotEmptyString: (number) => {
    const trimmedNumber = number.trim();

    if (trimmedNumber === '') {
      throw new Error(
        '[ERROR] 공백이 포함되어 있습니다. 숫자는 연달아서 입력해주세요.',
      );
    }
  },

  isNumber: (number) => {
    const convertedNumber = Number(number);

    if (Number.isNaN(convertedNumber)) {
      throw new Error(
        '[ERROR] 유효하지 않은 숫자입니다. 서로 다른 숫자 3개를 입력해주세요.',
      );
    }
  },

  isValidLength: (numberArray) => {
    const convertedNumberArray = numberArray.map(Number);

    if (convertedNumberArray.length !== 3) {
      throw new Error(
        '[ERROR] 유효하지 않은 숫자입니다. 서로 다른 숫자 3개를 입력해주세요.',
      );
    }
  },

  isDifferentNumber: (numberArray) => {
    const convertedNumberArray = numberArray.map(Number);
    const numberSet = new Set([...convertedNumberArray]);

    if (numberArray.length !== numberSet.size) {
      throw new Error(
        '[ERROR] 유효하지 않은 숫자입니다. 서로 다른 숫자 3개를 입력해주세요.',
      );
    }
  },
};

export default Validation;
