import { useState,useRef} from "react";

function Theme() {
  const [theme, setTheme] = useState(false);
  const themeRef = useRef();
    function dark() {
    let newtheme=(!theme)
    setTheme(newtheme)
    const header = document.querySelector(".App-header");
    header.style.backgroundColor = newtheme ? "black" : "white";
    header.style.color = newtheme ? "white" : "black";
     if (themeRef.current) {
      themeRef.current.textContent = newtheme ? "Switch to Light" : "Switch to Dark";
    }
  }
     return (
        <div>
            <button onClick={dark} ref={themeRef}>Switch to Dark</button>
             <p>WELCOME</p>
        </div>
  );
}

export default Theme;


   // with use effect
    // useEffect(() => {
    // const header = document.querySelector(".App-header");
    // if (header) {
    //   header.style.backgroundColor = theme ? "black" : "white";
    //   header.style.color = theme ? "white" : "black";
    //      }
    // }, [theme]);

    // function dark() {
    // setTheme(!theme);  
    //     if (themeRef.current) {
    //   themeRef.current.textContent = theme ? "Switch to Dark" : "Switch to Light";}
    //  }