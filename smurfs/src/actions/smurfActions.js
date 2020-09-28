import axios from "axios";

export const FETCH_SMURF_DATA_START = "FETCH_SMURF_DATA_START";
export const SMURF_DATA_SUCCESS = "SMURF_DATA_SUCCESS";
export const SMURF_DATA_FAILED = "SMURF_DATA_FAILED";
export const NEW_SMURF_DATA_START = "NEW_SMURF_DATA_START";
export const NEW_SMRUF_DATA_POST = "NEW_SMURF_DATA_POST";
export const NEW_SMURF_DATA_FAIL = "NEW_SMURF_DATA_FAIL";

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

// export const postSmurf = (newSmurf) => (dispatch) => {
//   dispatch({ type: NEW_SMURF_DATA_START });

//   axios
//     .post("http:localhost:3333/smurfs", newSmurf)
//     .then((res) => {
//       console.log("smurf post, welcome in a new smurf", newSmurf);
//       dispatch({ type: NEW_SMRUF_DATA_POST, payload: res.data });
//     })
//     .catch((err) => {
//       console.log("we lost a new smurf", err);
//       dispatch({ type: NEW_SMURF_DATA_FAIL, payload: err });
//     });
// };
