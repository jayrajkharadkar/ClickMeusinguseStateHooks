import React, { useEffect, useState } from "react";

const Reactf = () => {
  const [num, setnum] = useState(0);

  useEffect(() => {
    document.title = `You clicke me ${num} times`;
  });
  return (
    <>
      <button
        onClick={() => {
          setnum(num + 1);
        }}
      >
        {" "}
        Click me {num}
      </button>
    </>
  );
};
export default Reactf;
