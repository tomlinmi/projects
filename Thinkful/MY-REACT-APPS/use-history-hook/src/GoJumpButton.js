import React from "react";
import { useHistory } from "react-router-dom";

function GoJumpButton() {
  const history = useHistory();
  return (
    <button type="button" onClick={() => history.goForward(2)}>
      Go Jump (2xTimes)
    </button>
  );
}
export default GoJumpButton