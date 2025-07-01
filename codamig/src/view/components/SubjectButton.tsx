import classNames from "classnames";
import rocket from "../assets/rocket.png";
import diamond from "../assets/diamond.png";

type Props = {
  subject: string;
  level: string;
  onClick: () => void;
  className?: string; // ? == opcional
};

function SubjectButton({ subject, level, onClick, className }: Props) {
  const subjectSizeClass = subject.length > 9 ? "text-2xl" : "text-3xl";
  return (
    <button
      onClick={onClick}
      className={classNames(
        "w-52 h-36 p-4 bg-pink-imposing rounded-2xl flex items-center justify-between relative",
        className
      )}
    >
      <img
        src={diamond}
        alt="Diamante azul"
        className="w-20 absolute -top-10 left-1/2 -translate-x-1/2"
      />
      <span
        className={`block text-left text-white font-kdam ${subjectSizeClass}`}
      >
        {subject}
      </span>
      {/*<img src={rocket} alt="Foguete azul" className="w-16 flex-row-reverse" />*/}
      <div className="flex flex-col items-center">
        <img src={rocket} alt="Foguete azul" className="w-14" />
        <span className="mt-3 text-right text-white text-base font-jua">
          {level}
        </span>
      </div>
    </button>
  );
}
export default SubjectButton;
