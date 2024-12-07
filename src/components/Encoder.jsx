import { useState } from "react";
import { Link } from "react-router-dom";

const Encoder = ({ setResult }) => {
  const [textInput, setTextInput] = useState("");

  const handleChange = (e) => {
    setTextInput(e.target.value);
  };

  const handleEncoder = () => {
    const shift = 3;
    const encoded = textInput.replace(/[a-z]/gi, (char) => {
      const base = char.charCodeAt(0) < 97 ? 65 : 97;
      return String.fromCharCode(((char.charCodeAt(0) - base + shift) % 26) + base);
    });
    setResult(encoded);
  };

  return (
    <div className="space-y-2">
      <h2 className="font-bold">Enter the text to Encode:</h2>
      <div className="frame">
        <textarea
          value={textInput}
          placeholder="Enter text here"
          onChange={handleChange}
          className="h-[20rem] rounded-lg w-full bg-white border-2 border-[#cecece] p-4 resize-none"
        ></textarea>
      </div>
      <div className="buttons flex flex-col sm:flex-row justify-between items-center gap-4">
        <button
          className={`border-2 border-[#272d4f] w-1/2 rounded-lg bg-[#272d4f] hover:bg-[#0c48a8] hover:border-[#0c48a8] flex items-center justify-center h-12 text-white font-bold cursor-pointer transition-colors ${
            !textInput ? "opacity-50 cursor-not-allowed" : ""
          }`}
          onClick={handleEncoder}
          disabled={!textInput}
        >
          Encode
        </button>

        <Link
          to="/decode"
          className="h-12 font-bold text-[#272d4f] hover:text-white cursor-pointer border-2 w-1/2 rounded-lg hover:bg-[#0c48a8] hover:border-[#0c48a8] border-[#272d4f] flex items-center justify-center"
        >
          Decode
        </Link>
      </div>
    </div>
  );
};

export default Encoder;
