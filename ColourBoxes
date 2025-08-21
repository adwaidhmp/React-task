import { useState } from "react";

function Boxes() {
  const total = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  const [add, setAdd] = useState([]); 

  const handleClick = (index) => {
    if (add.includes(index)) return;
    const newAdd = [...add, index];
    setAdd(newAdd); 

    if (newAdd.length === total.length) {   
      const arr = [...newAdd];
      for (let i = arr.length; i > 0; i--) {  
        setTimeout(() => {
          arr.pop();
          setAdd([...arr]);   
        },  i*500);   
      }
    }
  };

  return (
    <>
      {total.map((i, index) => (
        <div
          key={index}
          style={{
            border: "1px solid black",
            width: "50px",
            height: "50px",
            backgroundColor: add.includes(index) ? "blue" : "gray",
            display: "inline-block",
          }}
          onClick={() => handleClick(index)}
        >
          {i}
        </div>
      ))}
    </>
  );
}

export default Boxes;
