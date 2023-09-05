import React, { useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../utils/firebase";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  addUser,
  closeUserIcon,
  removeUser,
  toggleUserIcon,
} from "../utils/userSlice";
import { LOGO, SUPPORTED_LANGUAGES } from "../utils/constants";
import { toggleGptSearchView } from "../utils/gptSlice";
import { changeLanguage } from "../utils/configSlice";
import UserProfile from "./UserProfile";

const Header = () => {
  const navigate = useNavigate();

  const dispatch = useDispatch();

  const user = useSelector((store) => store.user.userDetail);

  const userIcon = useSelector((store) => store.user.isUserIconOpen);

  const showGpt = useSelector((store) => store.gpt.showGptSearch);

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

  const handleGptSearch = () => {
    dispatch(toggleGptSearchView());
    dispatch(closeUserIcon());
    showGpt ? navigate("/browse") : navigate("/browse/gpt");
  };

  const handleLanguageChange = (e) => {
    dispatch(changeLanguage(e.target.value));
  };

  return (
    <div className="px-3 pt-1 flex flex-col md:flex-row md:justify-between select-none">
      <div onClick={() => dispatch(closeUserIcon())} className="m-auto md:m-0">
        <Link to="/browse">
          <img className="w-52" alt="logo" src={LOGO} />
        </Link>
      </div>
      {user && (
        <div className="flex justify-between md:gap-2">
          {showGpt && (
            <select
              onChange={handleLanguageChange}
              className="self-center p-2 rounded-md text-white font-semibold  cursor-pointer focus:outline-none bg-teal-600"
            >
              {SUPPORTED_LANGUAGES.map((lang) => (
                <option
                  className=""
                  key={lang.identifier}
                  value={lang.identifier}
                >
                  {lang.name}
                </option>
              ))}
            </select>
          )}
          <button
            onClick={handleGptSearch}
            className="text-white font-semibold bg-cyan-600 self-center p-2 rounded-md"
          >
            {showGpt ? "Home 🏠" : "GPT Search"}
          </button>
          <div className="flex items-center relative">
            <img
              onClick={() => dispatch(toggleUserIcon())}
              className="h-10 cursor-pointer"
              alt="userimage"
              src={user.photoURL}
            />
            {userIcon && <UserProfile />}
          </div>
        </div>
      )}
    </div>
  );
};

export default Header;
