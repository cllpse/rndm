export enum TestActionType {
  Set = 'TEST_SET',
  Unset = 'TEST_UNSET',
  SetSuccess = 'TEST_SET_SUCCESS',
};

export const set = (message: string) => ({
  type: TestActionType.Set,
  payload: message,
});

export const unset = () => ({
  type: TestActionType.Unset,
});

export const setSuccess = (message: string) => ({
  type: TestActionType.SetSuccess,
  payload: message,
});
