import axios from "axios";

export const FETCH_SMURF_DATA_START = "FETCH_SMURF_DATA_START";
export const SMURF_DATA_SUCCESS = "SMURF_DATA_SUCCESS";
export const SMURF_DATA_FAILED = "SMURF_DATA_FAILED";

export const fetchData = () => (dispatch) => {
  dispatch({ type: FETCH_SMURF_DATA_START });

  axios
    .get("http://localhost:3333/smurfs")
    .then((res) => {
      console.log("smurfActions", res);
      dispatch({
        type: SMURF_DATA_SUCCESS,
        payload: res.data,
      });
    })
    .catch((err) => {
      console.log("smurf village in peril", err).dispatch({
        type: SMURF_DATA_FAILED,
        payload: "Gargamel has captured the smurfs!!",
      });
    });
};
