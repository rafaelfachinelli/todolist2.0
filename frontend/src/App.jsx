import Routes from "./routes";

import Menu from "./components/Menu";

import "bootstrap/dist/css/bootstrap.min.css";
import "./style/custom.css";

export default function App() {
  return (
    <div className="container">
      <Menu />
      <Routes />
    </div>
  );
}
