import React from "react";
import CountUp from "react-countup";
import style from "./card.module.css";
import classNames from "classnames";

const Cards = ({ data }) => {
  if (!data || Object.keys(data).length === 0) return <h2>Loading...</h2>;

  // On définit quelles clés on veut afficher
  const keysToShow = ["cases", "recovered", "deaths"];

  // Associer une classe CSS par type
  const cardStyles = {
    cases: style.confirmed,
    recovered: style.recovered,
    deaths: style.deaths,
  };

  return (
    <div className={style.cardsContainer}>
      {keysToShow.map((key) => (
        <div
          key={key}
          className={classNames(style.card, cardStyles[key])} // combine styles
        >
          <h3>{key.charAt(0).toUpperCase() + key.slice(1)}</h3>
          <CountUp
            start={0}
            end={data[key]}
            duration={2.5}
            separator=","
            className={style.countNumber}
          />
          <p>Number of {key} from COVID-19</p>
          <p className={style.updated}>
            Last updated: {new Date(data.updated).toDateString()}
          </p>
        </div>
      ))}
    </div>
  );
};

export default Cards;
