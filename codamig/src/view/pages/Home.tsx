//import { Link } from "react-router-dom";
import Header from "../components/Header";
function Home() {
  return (
    <div className="min-h-screen bg-gradient-purple-dark flex flex-col items-center">
      <Header />
      {/*<div className="text-white">
        <h1>Hello, Povo!</h1>
        <Link to="/login" className="">
          Login
        </Link>
      </div>*/}
    </div>
  );
}
export default Home;
