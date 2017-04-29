import merge from 'lodash/merge';

const defaultState = {
  mode: "static",
  value: {
    skill: "judeca",
    content: ["etica"],
    subject: "[ editeaza ]",
    resource: "manualul",
    product: "un eseu",
    studentsCount: "trei"
  }
}

const resultReducer = (
  state = defaultState,
  action
) => {
  switch (action.type) {
    case "TOGGLE_MODE":
      return merge(
        {},
        state,
        { mode: state.mode === "static" ? "edit" : "static"});

    case "UPDATE_RESULT":
      console.log(action);
      return merge(
        {},
        state,
        { value: action.result });
    default:
      return state;
  }
};

export { resultReducer };
