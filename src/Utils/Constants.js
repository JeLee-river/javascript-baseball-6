export const GAME_RESULT = {
  strike: '스트라이크',
  ball: '볼',
  nothing: '낫싱',
};

export const MESSAGE = {
  prefix: `[ERROR]`,
  isNotEmptyString: `${this.prefix} 공백이 포함되어 있습니다. 숫자는 연달아서 입력해주세요.`,
  isNumber: `${this.prefix} 유효하지 않은 숫자입니다. 서로 다른 숫자 3개를 입력해주세요.`,
  isAnswerInteger: `${this.prefix} 유효하지 않은 숫자입니다. 1이상 9이하의 정수를 입력해주세요.`,
  isAnswerNumberInRange: `${this.prefix} 유효하지 않은 숫자입니다. 1이상 9이하의 숫자를 입력해주세요.`,
  isRestartNumberInRange: `${this.prefix} 유효하지 않은 숫자입니다. 재시작은 1, 종료는 2를 입력해주세요.`,
  isValidLength: `${this.prefix} 숫자는 3개만 입력해주세요.`,
  isDifferentNumber: `${this.prefix} 유효하지 않은 숫자입니다. 서로 다른 숫자 3개를 입력해주세요.`,
};