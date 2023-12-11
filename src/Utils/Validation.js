const Validation = {
  isNumber: (number) => {
    const convertedNumber = Number(number);

    if (Number.isNaN(convertedNumber)) {
      throw new Error(
        '[ERROR] 유효하지 않은 숫자입니다. 서로 다른 숫자 3개를 입력해주세요.',
      );
    }
  },

  isDifferentNumber: (numbers) => {
    const numberArray = numbers.split('');
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
