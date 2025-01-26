export const createApiErrorMessage = (statusCode: number) => {
  if (statusCode >= 500) return '서버 에러가 발생했어요. 잠시 후 다시 시도해주세요.';
  if (statusCode >= 400) return '잘못된 요청입니다.';
};
