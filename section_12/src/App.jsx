import React from "react";
import Header from "./components/Header";
import Quiz from "./components/Quiz";

function App() {
  return (
    <React.StrictMode>
      <Header />
      <main>
        <Quiz />
      </main>
    </React.StrictMode>
  );
}

export default App;
