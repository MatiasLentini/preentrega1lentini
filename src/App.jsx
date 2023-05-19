import React from "react";
import ResponsiveAppBar from "./components/NavBar/NavBar";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import "./App.css";

const App = () => {
    return (
        <div>
            <div>
                <ResponsiveAppBar />
            </div>
            <div className="Container">
                <ItemListContainer />
                <ItemListContainer />
                <ItemListContainer />
                <ItemListContainer />
            </div>
        </div>
    );


};

export default App;


