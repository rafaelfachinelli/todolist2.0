import { useEffect } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { faWindowClose } from "@fortawesome/free-solid-svg-icons";

import Grid from "./Grid";
import IconButton from "./IconButton";

import {
  add,
  changeDescription,
  search,
  clearToDoDescription
} from "../store/actions/todoActions";

function ToDoForm(props) {
  useEffect(() => {
    props.search();
  }, []);

  const keyHandler = (e) => {
    if (e.key === "Enter") {
      e.shiftKey ? props.search() : props.add(props.description);
    } else if (e.key === "Escape") {
      props.clearToDoDescription();
    }
  };

  return (
    <div role="form" className="todoForm">
      <Grid cols="12 9 10">
        <input
          type="text"
          id="description"
          className="form-control"
          placeholder="Adicione uma tarefa"
          value={props.description}
          onKeyUp={keyHandler}
          onChange={props.changeDescription}
        />
      </Grid>

      <Grid cols="12 3 2">
        <IconButton
          style="primary"
          icon={faPlus}
          onClick={() => props.add(props.description)}
        />
        <IconButton
          style="info"
          icon={faSearch}
          onClick={() => props.search()}
        />
        <IconButton
          style="secondary"
          icon={faWindowClose}
          onClick={() => props.clearToDoDescription()}
        />
      </Grid>
    </div>
  );
}

function mapStateToProps(state) {
  return {
    description: state.todo.description
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    { add, changeDescription, search, clearToDoDescription },
    dispatch
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(ToDoForm);
