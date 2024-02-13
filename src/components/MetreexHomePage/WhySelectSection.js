import React, { useEffect, useState } from "react";

const WhySelectSection = () => {
  const [solution, setSolution] = useState([]);
  const [title, setTitle] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:5000/solutions`)
      .then((res) => res.json())
      .then((info) => setSolution(info));
  }, []);
  useEffect(() => {
    fetch(`http://localhost:5000/solutions-title`)
      .then((res) => res.json())
      .then((info) => setTitle(info));
  }, []);
  return (
    <>
   
    </>
  );
};

export default WhySelectSection;
