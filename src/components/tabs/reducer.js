import merge from 'lodash/merge';

const defaultState = {
  selectedTab: "skill"
};

const tabsReducer = (
  state = defaultState,
  action
) => {
  switch (action.type) {
    case 'SELECT_TAB':
      return merge(
        {},
        state,
        { selectedTab: action.tab });

    default:
      return state;
  }
};

export { tabsReducer };
