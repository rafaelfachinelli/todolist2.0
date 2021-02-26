import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { faWindowClose } from "@fortawesome/free-solid-svg-icons";

import Grid from "./Grid";
import IconButton from "./IconButton";

export default function ToDoForm(props) {
  const keyHandler = (e) => {
    if (e.key === "Enter") {
      e.shiftKey ? props.handleSearch() : props.handleAdd();
    } else if (e.key === "Escape") {
      props.handleClear();
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
          onChange={props.handleChange}
        />
      </Grid>

      <Grid cols="12 3 2">
        <IconButton style="primary" icon={faPlus} onClick={props.handleAdd} />
        <IconButton style="info" icon={faSearch} onClick={props.handleSearch} />
        <IconButton
          style="secondary"
          icon={faWindowClose}
          onClick={props.handleClear}
        />
      </Grid>
    </div>
  );
}
