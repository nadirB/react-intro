const React = require("react");
const useState = React.useState;
const ReactDOM = require("react-dom");
const namer = require("./util/namer");
const Greeting = require("./components/Greeting");


const last = namer.last();

const RootComponent = () => {

    const [first, setFirst] = useState(namer.first);
    const [last, setLast] = useState(namer.last);
    const [lang, setLang] = useState("fr");

    const refreshFirst = () => {
        setFirst(namer.first());
    }
    const refreshLast = () => {
        setLast(namer.last());
    }
    
    const switchLang = () => {
        if (lang === "en") {
            setLang("fr");
        } else {
            setLang("en");
        }
    }

    let langButton;
    if (lang === "en"){
        langButton = <button onClick={switchLang}>Switch to French</button>
    } else {
        langButton = <button onClick={switchLang}>Switch to English</button>
    }

    return (
        <div>
            <Greeting first={first} last={last} lang={lang}/>
            <button onClick={refreshFirst}>Refresh first name</button>
            <button onClick={refreshLast}>Refresh last name</button>
            {langButton}
        </div>
    );
}

ReactDOM.render(
     <RootComponent />,
    document.getElementById("main")
);