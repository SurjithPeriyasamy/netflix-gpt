import { useDispatch } from "react-redux";
import { auth } from "../utils/firebase";
import { signOut } from "firebase/auth";
import { closeUserIcon, removeUser } from "../utils/userSlice";
import { addGptMovieResult } from "../utils/gptSlice";
import { useNavigate } from "react-router-dom";
const UserProfile = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        dispatch(removeUser());
        dispatch(closeUserIcon());
        dispatch(addGptMovieResult({ movieNames: null, movieResults: null }));
        navigate("/");
      })
      .catch((error) => {
        navigate("/error");
      });
  };
  const user = auth.currentUser;
  // The user object has basic properties such as display name, email, etc.
  const displayName = user.displayName;
  const email = user.email;
  const photoURL = user.photoURL;

  return (
    <div className="bg-white rounded-xl flex flex-col gap-3 h-max font-semibold md:p-5 p-2 absolute md:right-10 md:top-20 right-0 top-12 z-10 w-max">
      <div>
        <h1 className="font-bold text-xl flex ">
          Welcome to
          <span className="text-rose-600 px-1 animate-bounce">Baby Dev's</span>
          Netflix
        </h1>
      </div>
      <div className="flex items-center gap-5">
        <div className="flex items-center justify-center p-1 hover:scale-150 duration-500 ease-linear ">
          <span className="border-4 border-t-pink-500 border-l-cyan-500 border-r-violet-800 h-12 w-12 absolute rounded-full animate-spin"></span>
          <img alt="user" className="h-8 rounded-full " src={photoURL} />
        </div>
        <div>
          <h1 className="text-stone-800 italic font-bold">{displayName}</h1>
          <h2 className="italic">{email}</h2>
        </div>
      </div>
      <button
        className="text-gray-800 font-bold bg-sky-500 rounded-lg p-1 hover:bg-green-400 ease-linear duration-300"
        onClick={handleSignOut}
      >
        Sign out
      </button>
    </div>
  );
};

export default UserProfile;
