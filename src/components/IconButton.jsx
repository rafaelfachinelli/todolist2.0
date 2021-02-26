import If from "./If";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function IconButton(props) {
  return (
    <If test={!props.hide}>
      <button className={"btn btn-" + props.style} onClick={props.onClick}>
        <FontAwesomeIcon icon={props.icon} />
      </button>
    </If>
  );
}
