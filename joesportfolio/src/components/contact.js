import React from "react";

export default function Contact() {
    const [email, setEmail] = React.useState("");
    const [message, setMessage] = React.useState("");
    const [name, setName] = React.useState("");
    const [alert, setAlert] = React.useState("");
}

const handleInputChange = (event) => {
    const { target } = event;
    const inputType = target.name;
    const inputValue = target.value;

    if (inputType === "email") {
        setEmail(inputValue);
    }
    if (inputType === "message") {
        setMessage(inputValue);
    }
    if (inputType === "name") {
        setName(inputValue);
    }
};


