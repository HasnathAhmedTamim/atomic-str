import LoginForm from "../components/organisms/LoginForm";

const LoginPage = () => {
  const handleLogin = (email, password) => {
    console.log("Login", email, password);
    
  };

  return (
    <div className="">
      <div className="">
        
        <LoginForm onLogin={handleLogin} />
      </div>
    </div>
  );
};

export default LoginPage;
