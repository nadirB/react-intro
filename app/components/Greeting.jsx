const React = require("react");

module.exports = (props) => {
    let prefix;
    if (props.lang === "en") {
        prefix = "Hi there"
    } else {
        prefix = "Bonjour"
    }

    return <h1>{prefix} {props.first} {props.last} !</h1>
};