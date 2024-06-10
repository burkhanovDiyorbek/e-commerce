import { Link } from "react-router-dom";
import { Button } from "../../../components/Button/Button";

export const Login = () => {
  const handleSubmit = () => {};
  return (
    <section className="auth-section">
      <div className="outlet container">
        <div className="img"></div>
        <div className="section-content">
          <h2>Log in to Exclusive</h2>
          <p>Enter your details below</p>
          <form onSubmit={(e) => e.preventDefault()}>
            <label>
              <input type="text" placeholder="Email or Phone Number" />
            </label>
            <label>
              <input type="password" placeholder="Password" />
            </label>
            <div>
              <Button
                content={"Log In"}
                classname={"primary"}
                onclick={handleSubmit}
              />
              <Link to={"/"}>Forget Password?</Link>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};
