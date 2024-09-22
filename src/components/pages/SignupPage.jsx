import SignupForm from "../organisms/SignupForm";

const SignupPage = () => {
  const handleSignup = (email, password, confirmPassword) => {
    console.log("Signup", email, password, confirmPassword);
    // Add signup logic here
  };

  return (
    <div className="">
      <div className="">
        
        <SignupForm onSignup={handleSignup} />
      </div>
    </div>
  );
};

export default SignupPage;
