import React from "react";
import "./App.css";

function App() {
  return (
    <div className="app">
      <h1 className="title">Shopify example app</h1>

      <main>
        <p>Content</p>
        <p>Content</p>
        <p>Content</p>
        <p>Content</p>
        <p>Content</p>
      </main>

      <nav className="navigation">
        <form>
          <ul>
            <li>
              <button>← Nazaj</button>
            </li>
            <li>
              <button>1</button>
            </li>
            <li>
              <button>2</button>
            </li>
            <li>
              <button>3</button>
            </li>
            <button>Naprej →</button>
          </ul>
        </form>
      </nav>
    </div>
  );
}

export default App;
