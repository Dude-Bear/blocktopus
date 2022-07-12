import { Link } from "react-router-dom";

const Missing = () => {
  return (
    <article className="flex mt-20">
      <div className="m-auto">
        <h1>Oops!</h1>
        <p>Page Not Found</p>
        <div>
          <Link to="/">Visit Our Homepage</Link>
        </div>
      </div>
    </article>
  );
};

export default Missing;
