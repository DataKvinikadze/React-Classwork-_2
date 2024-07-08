import React from "react";
import "./Main.css";

const Main = () => {
  const items = [
    { title: "Card 1", description: "This is the description for Card 1." },
    { title: "Card 2", description: "This is the description for Card 2." },
    { title: "Card 3", description: "This is the description for Card 3." },
  ];

  const cards = items.map((element, index) => (
    <div className={"card-" + (index + 1)}>
      <p>{element.title}</p>
      <p>{element.description}</p>
    </div>
  ));
  return (
    <>
      <main>
        <div className="section-container">
          <div className="section-content">{cards}</div>
        </div>
      </main>
    </>
  );
};

export default Main;
