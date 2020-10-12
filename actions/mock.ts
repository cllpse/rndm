export enum ActionType {
  Fetch = 'MOCK_FETCH',
  FetchById = 'MOCK_FETCH_BY_ID',
  FetchWorking = 'MOCK_FETCH_WORKING',
  FetchComplete = 'MOCK_FETCH_COMPLETE',
  FetchByIdComplete = 'MOCK_FETCH_BY_ID_COMPLETE',
  FetchError = 'MOCK_FETCH_ERROR',
};

export const fetch = () => ({
  type: ActionType.Fetch,
});

export const fetchById = (id: number) => ({
  type: ActionType.FetchById,
  payload: id,
});

export const fetchWorking = () => ({
  type: ActionType.FetchWorking,
});

export const fetchComplete = (data: any) => ({
  type: ActionType.FetchComplete,
  payload: data,
});

export const fetchByIdComplete = (data: any) => ({
  type: ActionType.FetchComplete,
  payload: data,
});

export const fetchError = (message: string) => ({
  type: ActionType.FetchError,
  payload: message,
});
