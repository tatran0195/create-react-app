import logo from "./logo.svg";
import { useState, useEffect } from "react";
import "./App.css";
import * as chart from "./chart";

function App() {
  const [connections, setConnections] = useState([]);

  useEffect(() => {
    chart.connections.getConnections().then((data) => {
      setConnections(data);
    });
  }, []);

  const capitalize = (s) => {
    if (typeof s !== "string") return "";
    return s.charAt(0).toUpperCase() + s.slice(1);
  };

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {connections == null || connections.length === 0 ? (
          <h2>No connections found for this service.</h2>
        ) : (
          <>
            <h1>Connected Microservices:</h1>
            <ul>
              {connections.map((connection) => (
                <li key={connection.sourceId}>
                  <b>{capitalize(connection.sourceName)}</b> :{" "}
                  <a href={connection.sourceUrl}>{connection.sourceUrl}</a>
                </li>
              ))}
            </ul>
          </>
        )}
      </header>
    </div>
  );
}

export default App;
