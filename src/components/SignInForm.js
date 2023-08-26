const SignInForm = () => {
  return (
    <form className="text-white w-[450px] m-auto rounded-md p-16 gap-y-7 bg-black bg-opacity-60 flex shrink-0 flex-col">
      <h1 className="text-3xl font-bold">Sign In</h1>
      <input
        placeholder="Email or phone number"
        className="p-3 bg-zinc-700  focus:outline-none  rounded-md placeholder:text-gray-400"
        type="text"
      />
      <input
        className="p-3 bg-zinc-700 rounded-md focus:outline-none"
        type="password"
        placeholder="Password"
      />
      <button className="mt-8 font-semibold rounded-lg text-center p-3 bg-red-600">
        Sign In
      </button>
    </form>
  );
};
export default SignInForm;
