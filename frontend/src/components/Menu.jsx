import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendarCheck } from "@fortawesome/free-solid-svg-icons";

export default function Menu() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <a className="navbar-brand" href="/#/todos">
        <FontAwesomeIcon icon={faCalendarCheck} /> TodoApp
      </a>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">
          <li className="nav-item">
            <a className="nav-link" href="/#/todos">
              Tarefas
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/#/about">
              Sobre
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
