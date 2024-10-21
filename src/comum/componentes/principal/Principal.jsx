import { Link } from "react-router-dom";
import "./Principal.css";
import { FaCircleArrowLeft } from "react-icons/fa6";

function Principal({ voltarPara, titulo, children, questao }) {
  return (
    <main className="principal_root">
      {voltarPara && (
        <Link to={voltarPara}>
          <FaCircleArrowLeft size={24} color="purple" />
        </Link>
      )}

      <h1>{titulo}</h1>

      <h3>{questao}</h3>

      {children}
    </main>
  );
}

export default Principal;
