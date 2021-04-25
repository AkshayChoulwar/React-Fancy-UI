import React from "react";

type ButtonProps = {
    text: string
}

const Button = (props: ButtonProps) => <button>{props.text}</button>;

export default Button;