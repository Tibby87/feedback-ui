import Card from "../components/shared/Card";
import { Link } from "react-router-dom";
function AboutPage() {
  return (
    <Card>
      <div className="about">
        <h1>About This Project</h1>
        <p>This is React App to leave feedback for a product or service</p>
        <p>Verison 1.0</p>
        <Link to="/">
          <p>Back To Home</p>
        </Link>
      </div>
    </Card>
  );
}

export default AboutPage;
