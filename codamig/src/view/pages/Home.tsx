//import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import Header from "../components/Header";
import SubjectButton from "../components/SubjectButton";

type Subject = {
  id: number;
  subject: string;
  level: string;
  className?: string;
};
const subjectsData: Subject[] = [
  { id: 1, subject: "C++", level: "Opcional" },
  { id: 2, subject: "Introdução", level: "Básico" },
  { id: 3, subject: "Strings", level: "Básico" },
  { id: 4, subject: "Busca e Ordenação", level: "Regular" },
  { id: 5, subject: "Grafos", level: "Intermediário" },
  { id: 6, subject: "Dynamic Program", level: "Intermediário" },
];
function Home() {
  const navigate = useNavigate();
  return (
    <div className="min-h-screen bg-gradient-purple-dark flex flex-col items-center">
      <Header />
      <div className="mt-20 flex flex-col items-center gap-20">
        {subjectsData.map((subjectItem) => (
          <SubjectButton
            key={subjectItem.id}
            onClick={() => navigate("/")}
            subject={subjectItem.subject}
            level={subjectItem.level}
            className={subjectItem.className}
          />
        ))}
      </div>
    </div>
  );
}
export default Home;
