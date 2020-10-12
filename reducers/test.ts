import produce from 'immer';

import { ActionType } from '../actions/test';

const initialState = { message: '' };

export default (state = initialState, action) => produce(state, draft => {
  switch (action.type as ActionType) {
    case ActionType.Set: {
      draft.message = action.payload;
      break;
    }

    case ActionType.Unset: {
      draft.message = '';
      break;
    }

    case ActionType.SetSuccess: {
      draft.message = action.payload;
      break;
    }
  }
});
