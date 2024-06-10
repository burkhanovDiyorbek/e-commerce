import { Link } from "react-router-dom";
import { Button } from "../../../components/Button/Button";
import ".././auth.css";
export const SignUp = () => {
  const handleSubmit = () => {};

  return (
    <section className="auth-section">
      <div className="outlet container">
        <div className="img"></div>
        <div className="section-content">
          <h2>Create an account</h2>
          <p>Enter your details below</p>
          <form onSubmit={(e) => e.preventDefault()}>
            <label>
              <input type="text" placeholder="Name" />
            </label>
            <label>
              <input type="text" placeholder="Email or Phone Number" />
            </label>
            <label>
              <input type="password" placeholder="Password" />
            </label>
            <Button
              content={"Create Account"}
              classname={"primary"}
              onclick={handleSubmit}
            />
            <Button
              content={"Sign up with Google"}
              img={".././images/icons/google.svg"}
              classname={"google"}
            />
          </form>
          <p>
            Already have account? <Link to={"/auth/login"}>Log in</Link>
          </p>
        </div>
      </div>
    </section>
  );
};
