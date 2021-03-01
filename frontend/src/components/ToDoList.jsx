import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import { faUndo } from "@fortawesome/free-solid-svg-icons";

import IconButton from "../components/IconButton";

import {
  markAsDone,
  markAsPending,
  removeToDo
} from "../store/actions/todoActions";

function ToDoList(props) {
  const renderRows = () => {
    const list = props.list || [];

    return list.map((todo) => (
      <tr key={todo._id}>
        <td className={todo.done ? "markedAsDone" : ""}>{todo.description}</td>
        <td>
          <IconButton
            style="success"
            icon={faCheck}
            onClick={() => props.markAsDone(todo)}
            hide={todo.done}
          />
          <IconButton
            style="warning"
            icon={faUndo}
            onClick={() => props.markAsPending(todo)}
            hide={!todo.done}
          />
          <IconButton
            style="danger"
            icon={faTrash}
            onClick={() => props.removeToDo(todo)}
            hide={!todo.done}
          />
        </td>
      </tr>
    ));
  };

  return (
    <table className="table">
      <thead>
        <tr>
          <th>Descrição</th>
          <th className="tableActions">Ações</th>
        </tr>
      </thead>
      <tbody>{renderRows()}</tbody>
    </table>
  );
}

function mapStateToProps(state) {
  return {
    list: state.todo.list
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    { markAsDone, markAsPending, removeToDo },
    dispatch
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(ToDoList);
