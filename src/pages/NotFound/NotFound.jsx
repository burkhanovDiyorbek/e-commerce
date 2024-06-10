import { Link } from "react-router-dom";
import { Button } from "../../components/Button/Button";
import "./notfound.css";

export const NotFound = () => {
  return (
    <section className="not-found container outlet">
      <p className="pathname">
        <Link to={"/"}>Home </Link>
        <b> / 404 Error</b>
      </p>
      <div className="not-found_container">
        <h2>404 Not Found</h2>
        <p>Your visited page not found. You may go home page.</p>
        <Link to={"/"}>
          <Button content={"Back to home page"} classname={"primary"} />
        </Link>
      </div>
    </section>
  );
};
