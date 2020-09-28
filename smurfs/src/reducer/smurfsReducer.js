import {
  FETCH_SMURF_DATA_START,
  SMURF_DATA_SUCCESS,
  SMURF_DATA_FAILED,
} from "../actions/smurfActions";

const intialState = {
  smurf_data: [],
  is_loading_data: false,
  error: "",
};

export const smurfReducer = (state = intialState, action) => {
  switch (action.type) {
    case FETCH_SMURF_DATA_START:
      return {
        ...state,
        is_loading_data: true,
        error: "",
      };
    case SMURF_DATA_SUCCESS:
      return {
        ...state,
        is_loading_data: false,
        smurf_data: action.payload,
      };
    case SMURF_DATA_FAILED:
      return {
        ...state,
        is_loading_data: false,
        error: action.payload,
      };

    default:
      return state;
  }
};
