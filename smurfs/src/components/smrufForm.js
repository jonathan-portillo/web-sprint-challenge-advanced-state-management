import React from "react";
import axios from "axios";
import { connect } from "react-redux";
import { fetchData, FETCH_SMURF_DATA_START } from "../actions/smurfActions";
import { smurfReducer } from "../reducer/smurfsReducer";

const SmurfForm = (props) => {
  const onSubmit = (smurfData) => {
    console.log(smurfData);
    const newSmurf = {
      name: smurfData.Name,
      age: smurfData.Age,
      height: smurfData.Height,
    };
    axios.post("http://localhost:3333/smurfs, newSmurf").then((res) => {
      fetchData();
    });
  };
  return (
    <form>
      <input type="text" name="Name" placeholder="name" />
      <input type="number" name="Age" placeholder="age" />
      <input type="number" name="Height" placeholder="height" />
      <button type="Submit">Submit</button>
    </form>
  );
};

const mapStateToProps = (state) => {
  return {
    smurf_data: state.smurf_data,
    is_loading_data: state.is_loading_data,
  };
};

export default connect(mapStateToProps, { fetchData })(SmurfForm);
