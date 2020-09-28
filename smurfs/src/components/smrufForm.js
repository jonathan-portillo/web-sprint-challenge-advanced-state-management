import React from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import { fetchData } from "../actions/smurfActions";

const SmurfForm = (props) => {
  const { register, handleSubmit } = useForm();
  const onSubmit = (smurfData) => {
    console.log(smurfData);
    const newSmurf = {
      name: smurfData.name,
      age: smurfData.age,
      height: smurfData.height,
    };
    axios.post("http://localhost:3333/smurfs", newSmurf).then((res) => {
      fetchData();
    });
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input
        type="text"
        name="name"
        id="name"
        placeholder="name"
        ref={register}
      />
      <input
        type="number"
        name="age"
        id="age"
        placeholder="age"
        ref={register}
      />
      <input
        type="number"
        name="height"
        id="height"
        placeholder="height"
        ref={register}
      />
      <input onClick={() => window.location.reload(false)} type="submit" />
    </form>
  );
};

export default SmurfForm;
