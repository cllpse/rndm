export enum ActionType {
  Fetch = 'MOCK_FETCH',
  FetchWorking = 'MOCK_FETCH_WORKING',
  FetchComplete = 'MOCK_FETCH_COMPLETE',
  FetchError = 'MOCK_FETCH_ERROR',
};

export const fetch = () => ({
  type: ActionType.Fetch,
});

export const fetchWorking = () => ({
  type: ActionType.FetchWorking,
});

export const fetchComplete = (data: any) => ({
  type: ActionType.FetchComplete,
  payload: data,
});

export const fetchError = (message: string) => ({
  type: ActionType.FetchError,
  payload: message,
});
