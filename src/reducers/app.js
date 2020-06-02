import * as ActionType from '../actions/actionType';

const innitialState = {
  principal: '',
  menus: [],
  isLoading: false
};

export default (state = innitialState, action) => {
  switch (action.type) {
    case ActionType.INITAPP: {
      return {
        ...state,
        principal: action.principal
      };
    }
    default: {
      return state;
    }
  }
};
