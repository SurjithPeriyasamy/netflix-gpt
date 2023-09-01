import React, { useRef, useState } from "react";
import Header from "./Header";
import { checkValidData } from "../utils/validate";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { auth } from "../utils/firebase";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";
import { USER_IMAGE } from "../utils/constants";

const Login = () => {
  const dispatch = useDispatch();

  const [isSignInForm, setIsSignInForm] = useState(true);

  const [errorMessage, setErrorMessage] = useState(null);

  const name = useRef(null);
  const email = useRef(null);
  const password = useRef(null);

  const handleForm = (e) => {
    e.preventDefault();
    const message = checkValidData(
      //name.current.value,
      email.current.value,
      password.current.value
    );
    setErrorMessage(message);
    if (message) return;

    if (!isSignInForm) {
      //Sign Up
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          const user = userCredential.user;
          updateProfile(user, {
            displayName: name.current.value,
            photoURL: USER_IMAGE,
          })
            .then(() => {
              const { uid, email, displayName, photoURL } = auth.currentUser;
              dispatch(
                addUser({
                  userId: uid,
                  email: email,
                  name: displayName,
                  photoURL: photoURL,
                })
              );
            })
            .catch((error) => {
              // An error occurred
              // ...
            });
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + "-" + errorMessage);
        });
    } else {
      //Sign In
      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          const user = userCredential.user;
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + "-" + errorMessage);
        });
    }
  };

  const toggleSignInForm = () => {
    setIsSignInForm(!isSignInForm);
  };

  return (
    //bg-netflix-background extend in tailwind.config.js
    <div className={"h-screen bg-netflix-background"}>
      <div className="bg-black bg-opacity-50 h-screen">
        <Header />
        <form
          id="login"
          onSubmit={(e) => handleForm(e)}
          className="text-white mt-10 w-full sm:w-[440px] m-auto rounded-lg p-8 sm:p-16 gap-y-4 bg-black bg-opacity-70 flex shrink-0 flex-col"
        >
          <h1 className="text-3xl font-bold">
            {isSignInForm ? "Sign In" : "Sign Up"}
          </h1>
          {!isSignInForm && (
            <input
              ref={name}
              placeholder="Full Name"
              className="px-5 py-3 bg-zinc-700 focus:outline-none rounded-md placeholder:text-gray-400"
              type="text"
            />
          )}
          <input
            ref={email}
            placeholder="eg.. enjoy143@gmail.com"
            className="px-5 py-3 bg-zinc-700  focus:outline-none rounded-md placeholder:text-gray-400"
            type="text"
          />
          <input
            ref={password}
            className="px-5 py-3 bg-zinc-700 rounded-md focus:outline-none"
            type="password"
            placeholder="Password"
          />
          <p className="text-orange-400 font-medium text-xs">{errorMessage}</p>
          <button className="mt-6 font-semibold rounded-md text-center px-5 py-3 bg-red-600">
            {isSignInForm ? "Sign in" : "Sign up"}
          </button>

          <p>
            <span className="text-zinc-500">
              {isSignInForm ? "New to Netflix ? " : "Already have account ? "}
            </span>
            <span className="cursor-pointer" onClick={toggleSignInForm}>
              {isSignInForm ? "Sign up now" : "Sign in"}
            </span>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;
