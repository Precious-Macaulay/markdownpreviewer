import React, { useState, useMemo } from "react";
import "./App.css";
import Editor from "./component/Editor";
import Header from "./component/Header";
import Previewer from "./component/Previewer";
import MarkdownContext from "./context/MarkdownContext";
import { placeholder } from "./placeholder";


function App() {
  const [layout, setLayout] = useState(true);

  const changeLayout = () => {
    setLayout((prev) => !prev);
  };

  const [markdownText, setMarkdownText] = useState(placeholder);

  const value = useMemo(
    () => ({ markdownText, setMarkdownText }),
    [markdownText]
  );


  return (
    <MarkdownContext.Provider value={value}>
<div
          className={`flex flex-col items-center text-white `}
        >
          <Header />
          <button
            onClick={() => {
              changeLayout();
            }}
            className={`text-center text-indigo-400 font-bold rounded py-2 w-auto focus:outline-none bg-gray-900 border-2 border-indigo-400 m-5 `}
          >
            Toggle Layout
          </button>
          <div
            className={`container m-5 grid gap-4 ${
              layout ? "grid-cols-2" : "grid-cols-1"
            }`}
          >
            <Editor />
            <Previewer />
          </div>
        </div>
    </MarkdownContext.Provider>
  );
}

export default App;
