import React from "react";

import { CardData } from "../../components/card-data";
import { DataTypes } from "../../interfaces";

import "./index.scss";

export const Home = () => {
    return (
        <div className="pages-home">
            <h1>Factory Four</h1>
            <div className="cards-wrapper">
                {Object.values(DataTypes).map((type) => (
                    <CardData key={type} hostName={type} />
                ))}
            </div>
        </div>
    );
};
