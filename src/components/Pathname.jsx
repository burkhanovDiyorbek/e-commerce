import { Link, useLocation } from "react-router-dom";

export const Pathname = () => {
  const { pathname } = useLocation();

  return (
    <p className="pathname">
      <Link to={"/"}>Home </Link>
      <b> {pathname.replace("/", "  /  ")}</b>
    </p>
  );
}
