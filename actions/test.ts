export enum ActionType {
  Set = 'TEST_SET',
  Unset = 'TEST_UNSET',
  SetSuccess = 'TEST_SET_SUCCESS',
};

export const set = (message: string) => ({
  type: ActionType.Set,
  payload: message,
});

export const unset = () => ({
  type: ActionType.Unset,
});

export const setSuccess = (message: string) => ({
  type: ActionType.SetSuccess,
  payload: message,
});
