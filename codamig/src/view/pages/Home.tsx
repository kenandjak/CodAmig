//import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import Header from "../components/Header";
import SubjectButton from "../components/SubjectButton";
function Home() {
  const navigate = useNavigate();
  return (
    <div className="min-h-screen bg-gradient-purple-dark flex flex-col items-center">
      <Header />
      <SubjectButton
        className="mt-20"
        onClick={() => navigate("/")}
        subject="C++"
        level="Opcional"
      />
      <SubjectButton
        className="mt-20 text-xl"
        onClick={() => navigate("/")}
        subject="Introdução"
        level="Básico"
      />
      <SubjectButton
        className="mt-20"
        onClick={() => navigate("/")}
        subject="Strings"
        level="Básico"
      />
      <SubjectButton
        className="mt-20"
        onClick={() => navigate("/")}
        subject="Busca e Ordenação"
        level="Regular"
      />
      <SubjectButton
        className="mt-20"
        onClick={() => navigate("/")}
        subject="Grafos"
        level="Intermediário"
      />
      <SubjectButton
        className="mt-20"
        onClick={() => navigate("/")}
        subject="Dynamic Program"
        level="Intermediário"
      />
    </div>
  );
}
export default Home;
