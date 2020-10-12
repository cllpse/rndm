import produce from 'immer';

import { ActionType } from '../actions/mock';

const initialState = { data: null, error: null, isWorking: false };

export default (state = initialState, action) => produce(state, draft => {
  switch (action.type as ActionType) {
    case ActionType.Fetch: {
      break;
    }

    case ActionType.FetchWorking: {
      draft.isWorking = true;
      break;
    }

    case ActionType.FetchComplete: {
      draft.data = action.payload;
      break;
    }

    case ActionType.FetchError: {
      draft.error = action.payload;
      break;
    }
  }
});
