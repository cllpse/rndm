import produce from 'immer';

import { TestActionType } from '../actions/test';

const initialState = { message: '' };

export default (state = initialState, action) => produce(state, draft => {
  switch (action.type as TestActionType) {
    case TestActionType.Set: {
      draft.message = action.payload;
      break;
    }

    case TestActionType.Unset: {
      draft.message = '';
      break;
    }

    case TestActionType.SetSuccess: {
      draft.message = action.payload;
      break;
    }
  }
});
