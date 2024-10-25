import { Link } from "react-router-dom";
import "./Principal.css";
import { FaCircleArrowLeft } from "react-icons/fa6";

function Principal({ titulo, children, questao }) {
  return (
    <main className="principal_root">

      <h1>{titulo}</h1>

      <h3>{questao}</h3>

      {children}
    </main>
  );
}

export default Principal;
