import React from "react";
import CloseIcon from "@material-ui/icons/Close";
import { auth } from "../../firebase";

function SignUp(props) {
  const [name, setName] = React.useState("");
  const [imageUrl, setImageUrl] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");

  const submit = () => {
    if(name !== "" && imageUrl !== "" && email !== "" && password !== ""){
        auth.createUserWithEmailAndPassword(email, password).then((res) => {
            console.log(res);
            res.user
                .updateProfile({
                    displayName: name,
                    photoURL: imageUrl,
                })
                .catch((err) => console.log(err));
        });
    }else{
        alert("Please fill out all of them....")
    }
  };

  return (
    <div className="flex flex-col items-center">
      <div className="w-full text-right">
        <CloseIcon
          className="cursor-pointer hover:text-red-400"
          onClick={props.closeSignUpModal}
        />
      </div>
      <span className="text-primary-dark text-4xl mb-5 font-bold">
        Sign - Up
      </span>
      <input
        value={name}
        onChange={(e) => setName(e.target.value)}
        className="w-3/6 h-12 pl-4 rounded-md border-solid border-2 border-gray-extraLight mb-4"
        placeholder={"full name"}
        type={"text"}
      />
      <input
        value={imageUrl}
        onChange={(e) => setImageUrl(e.target.value)}
        className="w-3/6 h-12 pl-4 rounded-md border-solid border-2 border-gray-extraLight mb-4"
        placeholder={"image Url (required)"}
        type={"text"}
      />
      <input
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="w-3/6 h-12 pl-4 rounded-md border-solid border-2 border-gray-extraLight mb-4"
        placeholder={"email"}
        type={"email"}
      />
      <input
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        className="w-3/6 h-12 pl-4 rounded-md border-solid border-2 border-gray-extraLight mb-4"
        placeholder={"password"}
        type={"password"}
      />
      <button
        onClick={submit}
        className="w-2/6 h-12 rounded-md  bg-primary-base text-white"
      >
        Sign - Up
      </button>
    </div>
  );
}

export default SignUp;
