import { Link } from "react-router-dom";

function PageNotFound() {
  return (
    <>
      <h1 className="text-danger text-center mt-3">
        Page is not found. Go To <Link to="/">Home Page</Link>
      </h1>
    </>
  );
}
export default PageNotFound;
