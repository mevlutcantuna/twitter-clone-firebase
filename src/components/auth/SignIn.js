import React from "react";

import CloseIcon from "@material-ui/icons/Close";
import { auth } from "../../firebase";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";

const SignIn = (props) => {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");

  //const user = useSelector((state) => state.authReducer.user);

  const history = useHistory();
  const dispatch = useDispatch();

  const submit = () => {
    auth.signInWithEmailAndPassword(email, password).then((res) => {
      dispatch({ type: "GET_USER", payload: res });
      history.push("/home");
      localStorage.setItem("user", JSON.stringify(res.user));
    });
  };

  return (
    <div className="flex flex-col items-center">
      <div className="w-full text-right">
        <CloseIcon
          className={"cursor-pointer hover:text-red-400"}
          onClick={props.closeSignInModal}
        />
      </div>
      <span className="text-primary-dark text-4xl mb-5 font-bold">
        Sign - In
      </span>
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
        Sign - In
      </button>
    </div>
  );
};

export default SignIn;
