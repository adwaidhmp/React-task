import { useState } from "react";

function CheckBox() {
  const [list, setList] = useState(["haii1"]);
    const [sel,setsel] = useState(false)
  const options = ["haii", "haii1", "haii2", "haii3", "haii4"];

  const handleCheck = (value) => {
    if (list.includes(value)) {
      // remove if already selected
      setList(list.filter((item) => item !== value));
    } else {
      // add if not selected
      setList([...list, value]);
    }
  };

  return (
    <>
      <h3>Choose Options:</h3>
    <button onClick={()=>setsel(!sel)}> select </button>
      {sel ? (
        options.map((opt) => (
          <span key={opt} style={{ display: "block" }}>
            <input
              type="checkbox"
              value={opt}
              checked={list.includes(opt)}
              onChange={() => handleCheck(opt)}
            />
            {opt}
          </span>
        ))
      ) : (
        <></>
      )}

      <h3>Selected List:</h3>
      <ul>
        {list.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </>
  );
}

export default CheckBox;
