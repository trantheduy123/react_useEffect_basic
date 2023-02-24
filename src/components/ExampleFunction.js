import React, { useState, useEffect } from "react";

export default function ExampleFunction() {
  const [count, setCount] = useState(10);
  const [acction, setAction] = useState("empty");
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    document.title = `you can click ${count}`;
    console.log("useEffect");

    return () => {
      console.log("useeffect - cleanup - count");
    };
  }, [count]);

  useEffect(() => {
    fetch(`https://reqres.in/api/${acction}`)
      .then((res) => console.log({ res }))
      .catch((err) => console.log(err));
  }, [acction]);

  const handlerScroll = () => {
    setScrollPosition(window.scrollY);
  };

  useEffect(() => {
    //componentDidMount
    document.addEventListener("scroll", handlerScroll);
    return () => {
      document.removeEventListener("scroll", handlerScroll);
    };
  }, []);

  //array 1. ten phan tu 2. method

  return (
    <div style={{ height: "3000px" }}>
      <pre>Functional Component</pre>
      <p>you click {count}</p>
      <button onClick={() => setCount(count + 1)}>Click me</button>

      <button onClick={() => setAction("users")}>get Users</button>
      <button onClick={() => setAction("comments")}>get Comments</button>

      <p style={{ position: "fixed", bottom: "20px", left: "20px" }}>
        {scrollPosition}
      </p>
    </div>
  );
}
