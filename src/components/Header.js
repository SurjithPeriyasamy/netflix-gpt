import React, { useEffect } from "react";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice";
import { LOGO } from "../utils/constants";

const Header = () => {
  const navigate = useNavigate();

  const dispatch = useDispatch();

  const user = useSelector((store) => store.user);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      // Sign In
      if (user) {
        const { uid, email, displayName, photoURL } = user;
        dispatch(
          addUser({
            userId: uid,
            email: email,
            name: displayName,
            photoURL: photoURL,
          })
        );
        navigate("/browse");
      } else {
        //Sign Out
        dispatch(removeUser());
        navigate("/");
      }
    });

    return () => unsubscribe();
  }, []);

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        dispatch(removeUser());
        navigate("/");
      })
      .catch((error) => {
        navigate("/error");
      });
  };

  return (
    <div className="px-3 pt-1 flex justify-between items-center ">
      <div>
        <img className="w-52" alt="logo" src={LOGO} />
      </div>
      {user && (
        <div className="flex gap-1">
          <img className="w-14" alt="userimage" src={user.photoURL} />
          <button className="text-white" onClick={handleSignOut}>
            Sign out
          </button>
        </div>
      )}
    </div>
  );
};

export default Header;
