const Validation = {
  isNumber: (number) => {
    const convertedNumber = Number(number);

    if (Number.isNaN(convertedNumber)) {
      throw new Error(
        '[ERROR] 유효하지 않은 숫자입니다. 서로 다른 숫자 3개를 입력해주세요.',
      );
    }
  },
};

export default Validation;
