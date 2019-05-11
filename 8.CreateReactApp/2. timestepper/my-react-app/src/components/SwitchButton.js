import React from "react";


const SwitchButton = props =>
(
    <button onClick={props.click}>{props.active ? "Wyłącz stoper" : "Włącz stoper"}</button>
    )

export default SwitchButton;