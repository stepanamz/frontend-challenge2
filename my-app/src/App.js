import "./App.css";

import { useState } from "react";

import { Cat } from "./components/Cat";

import { useFetch } from "./hooks";

function App() {
  const [activeTab, setActiveTab] = useState("all");
  const [favorits, setFavorits] = useState(
    JSON.parse(localStorage.getItem("favorits") || [])
  );
  const res = useFetch(
    "https://api.thecatapi.com/v1/images/search?limit=15&page=10&order=Desc"
  );

  const handleChangeTab = (event) => {
    setActiveTab(event.target.id);
  };

  return (
    <div>
      <ul>
        <li>
          <button
            onClick={handleChangeTab}
            id="all"
            class={activeTab === "all" ? "active" : ""}
          >
            Все котики
          </button>
        </li>
        <li>
          <button
            onClick={handleChangeTab}
            id="favorits"
            class={activeTab === "favorits" ? "active" : ""}
          >
            Любимые котики
          </button>
        </li>
      </ul>

      <div class="l-wrap">
        {!res.response && <div>...загружаем еще котиков...</div>}
        {activeTab === "all"
          ? (res.response || []).map((data) => (
              <Cat onCatClick={setFavorits} key={data?.id} {...data} />
            ))
          : favorits.map((data) => (
              <Cat onCatClick={setFavorits} key={data?.id} {...data} />
            ))}
      </div>
    </div>
  );
}

export default App;
