import React, { useEffect } from "react";
import { connect } from "react-redux";
import { fetchData } from "../actions/smurfActions";
import { smurfReducer } from "../reducer/smurfsReducer";

const Smurfs = (props) => {
  console.log("App: Props: ", props);
  useEffect(() => {
    props.fetchData();
  }, []);
  return (
    <>
      <h1>SMURF VILLAGE!!</h1>
      {props.is_loading_data ? <h1> Loading Smrufs...</h1> : null}
      {props.smurf_data.map((smurf) => {
        return (
          <div>
            <h3> Smurf Name: {smurf.name} </h3>
            <p> Age: {smurf.age} </p>
            <p> Height: {smurf.height} </p>
          </div>
        );
      })}
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    smurf_data: state.smurf_data,
    is_loading_data: state.is_loading_data,
    error: state.error,
  };
};

export default connect(mapStateToProps, { fetchData })(Smurfs);
