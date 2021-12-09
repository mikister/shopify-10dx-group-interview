import React from "react";
import "./App.css";
import PaginatedView from "./features/products/components/paginated-view/paginated-view";

function App() {
  return (
    <div className="app">
      <h1 className="title">Shopify example app</h1>

      <main>
        <PaginatedView />
      </main>
    </div>
  );
}

export default App;
