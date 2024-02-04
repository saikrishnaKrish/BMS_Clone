import { useState } from "react";
import GenericInput from "../components/ReusbaleComponents/GenericInput";
import { ReachOutFormData } from "./ReachOutFormValidation";

const ReachOutForm = () => {
  const reachOutFormFields = {
    username: ReachOutFormData.username.defaultValue,
    email: ReachOutFormData.email.defaultValue,
    phone:ReachOutFormData.phone.defaultValue,
    message: "Please leave a message !",
  };

  const reachOutFormFieldsErr = {
    username: null,
    email: null,
    message: null,
    phone:null
  };


  const [rForm,setRform] =useState(reachOutFormFields)
  const [rFormMsg,setRformErr] = useState(reachOutFormFieldsErr);


  const onSubmit = (e) => {
    e.preventDefault();
    console.log("form submitted");
    console.log(JSON.stringify(rForm));
  };

  const handleInputChange = (e) => {
    const {id,value} =e.target;
    console.log(id,value)
    setRform({ ...rForm, [id]: value })
    setRformErr({...rFormMsg,[id]:ReachOutFormData[id].validation(value)})   
  };


  return (
    <form onSubmit={onSubmit} style={{width:"400px"}}>
      <div>Feel free to Reach out to us!</div>
      <GenericInput
        label={"Username"}
        placeholder={"Enter your username"}
        type={"text"}
        id="username"
        value={rForm.username}
        onChange={(e)=>handleInputChange(e)}
      />
      {rFormMsg && "Please enter valid username"}

      <GenericInput
        label={"Email"}
        placeholder={"Enter your email"}
        type={"email"}
        id="email"
        value={rForm.email}
        onChange={(e)=>handleInputChange(e)}
      />

      <GenericInput
        label={"message"}
        placeholder={"message"}
        type={"textarea"}
        id="message"
        value={rForm.message}
        onChange={(e)=>handleInputChange(e)}
      />
        <GenericInput
        label={"Phone Number"}
        placeholder={"Phone Number"}
        type={"text"}
        id="phone"
        value={rForm.phone}
        onChange={(e)=>handleInputChange(e)}
      />
      {rFormMsg.phone && "Please Enter valid Phonenumber!!"}
      <button type="submit">Submit</button>
    </form>
  );
};

export default ReachOutForm;
