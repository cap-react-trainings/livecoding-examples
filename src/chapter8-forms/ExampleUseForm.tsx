import { yupResolver } from "@hookform/resolvers/yup";
import React, { useEffect } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import * as yup from "yup";

type IFormInput = {
  firstName: string;
  lastName: string;
  age: number;
};

// const schema = yup
//   .object({
//     firstName: yup.string().min(5),
//     lastName: yup.string().required(),
//     age: yup.number().positive().integer(),
//   })
//   .required();

// const schema: yup.ObjectSchema<IFormInput> = yup.object().shape({
//     firstName: yup.string().min(5, "Your name is too short 🫠!"),
//     lastName: yup.string().required("Last name required"),
//     age: yup.number().positive().integer("Input must be a positive number"),
//   });

const ExampleUseForm: React.FC = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<IFormInput>();

  const onSubmit: SubmitHandler<IFormInput> = (data) => console.log(data);

  // useEffect(() => {
  //   setError("firstName", {
  //     type: "manual",
  //     message: "Your name is too short 🫠!",
  //   });
  // },[setError])

  console.log(watch("firstName"));

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="useForm">
      <label htmlFor="fname">First Name:</label>
      <input
        id="fname"
        {...(register("firstName"), { minLength: 5, required: true })}
      />
      <label htmlFor="lname">Last Name:</label>
      <input id="lname" {...(register("lastName"), { required: true })} />
      {errors.lastName && <span>Input required</span>}
      <label htmlFor="age">Age:</label>
      <input id="age" {...register("age")} />
      <input type="submit" />
    </form>
  );
};

export default ExampleUseForm;
