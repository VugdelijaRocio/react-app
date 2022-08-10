import React from "react";

import { Provider } from "react-redux";

import "./App.css";
import { Home } from "./pages/home";
import { store } from "./store/store";

const App = () => {
    return (
        <div className="App">
            <Provider store={store}>
                <Home />
            </Provider>
        </div>
    );
};

export default App;
