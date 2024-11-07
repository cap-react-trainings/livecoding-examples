import { useForm, SubmitHandler, FormState } from "react-hook-form";

type IFormInput = {
  firstName: string;
  lastName: string;
  age: string;
};

const getHelperTextFirstName = ({ errors }: FormState<IFormInput>) => {
  const errorType = errors.firstName?.type;
  switch (errorType) {
    case "maxLength":
      return "Use no more than 10 characters";
    case "minLength":
      return "Use at least 5 characters";
    case "required":
      return "Please enter a name";
    default:
      return "";
  }
};

const ExampleUseForm = () => {
  const { register, handleSubmit, formState } = useForm<IFormInput>({
    reValidateMode: "onChange",
    mode: "onChange",
    criteriaMode: "all",
    defaultValues: {
      firstName: "",
      lastName: "",
      age: "",
    },
  });

  const helperText = getHelperTextFirstName(formState);

  const onSubmit: SubmitHandler<IFormInput> = (data) => console.log(data);

  const { ref, ...rest } = register("firstName", {
    required: true,
    maxLength: 15,
    minLength: 5,
  });

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="useForm">
      <label htmlFor="fname">First Name:</label>
      <input
        id="fname"
        {...rest}
        ref={(e) => {
          ref(e);
        }}
      />
      <small style={{ color: "#f94449" }}>{helperText}</small>
      <label htmlFor="lname">Last Name:</label>
      <input id="lname" {...register("lastName", { required: true })} />
      <label htmlFor="age">Age:</label>
      <input id="age" {...register("age")} />
      <input className="submitButton" type="submit" />
    </form>
  );
};

export default ExampleUseForm;
