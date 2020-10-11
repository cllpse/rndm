export enum MockActionType {
  Fetch = 'MOCK_FETCH',
  FetchWorking = 'MOCK_FETCH_WORKING',
  FetchComplete = 'MOCK_FETCH_COMPLETE',
  FetchError = 'MOCK_FETCH_ERROR',
};

export const fetch = () => ({
  type: MockActionType.Fetch,
});

export const fetchWorking = () => ({
  type: MockActionType.FetchWorking,
});

export const fetchComplete = (message: string) => ({
  type: MockActionType.FetchComplete,
  payload: message,
});

export const fetchError = (message: string) => ({
  type: MockActionType.FetchError,
  payload: message,
});
