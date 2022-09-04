import React, { useContext } from "react";
import MarkdownContext from "../context/MarkdownContext";

function Editor() {
  const { setMarkdownText, markdownText } = useContext(MarkdownContext);

  const handleChange = (e) => {
    setMarkdownText(e.target.value);
  };

  return (
    <div className={`container h-5/6`}>
      <div className="container flex bg-gray-900 px-4 py-1 border-indigo-400 border-2 text-indigo-400 font-bold text-xl uppercase font-mono justify-between">
        <h3>Editor</h3>

        {/* <div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3.75 9M3.75 20.25v-4.5m0 4.5h4.5m-4.5 0L9 15M20.25 3.75h-4.5m4.5 0v4.5m0-4.5L15 9m5.25
"
            />
          </svg>
        </div>
        <div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3.75 3.75v4.5m0-4.5h4.5m-4.5 0L9 9M3.75 20.25v-4.5m0 4.5h4.5m-4.5 0L9 15M20.25 3.75h-4.5m4.5 0v4.5m0-4.5L15 9m5.25 11.25h-4.5m4.5 0v-4.5m0 4.5L15 15"
            />
          </svg>
        </div> */}
      </div>
      <textarea
        id="editor"
        className="resize-y p-4 w-full bg-gray-900 text-white h-full border-2 border-indigo-400"
        onChange={handleChange}
        value={markdownText}
      ></textarea>
    </div>
  );
}

export default Editor;
