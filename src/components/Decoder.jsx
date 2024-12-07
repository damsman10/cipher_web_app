import { useState } from "react";
import { Link } from "react-router-dom";

const Decoder = ({ setResult }) => {
  const [textInput, setTextInput] = useState("");

  const handleChange = (e) => {
    setTextInput(e.target.value);
  };

  const handleDecoder = () => {
    const shift = 3;
    const decoded = textInput.replace(/[a-z]/gi, (char) => {
      const base = char.charCodeAt(0) < 97 ? 65 : 97;
      return String.fromCharCode(((char.charCodeAt(0) - base - shift + 26) % 26) + base); // Reverse shift for decoding
    });
    setResult(decoded);
  };

  return (
    <div className="space-y-2">
      <h2 className="font-bold">Enter the code to Decode:</h2>
      <div className="frame">
        <textarea
          value={textInput}
          placeholder="Enter encoded text here"
          onChange={handleChange}
          className="h-[20rem] rounded-lg w-full bg-white border-2 border-[#cecece] p-4 resize-none"
        ></textarea>
      </div>
      <div className="buttons flex flex-col sm:flex-row justify-between items-center gap-4">
        {/* Navigate to Encoder */}
        <Link
          to="/"
          className="border-2 border-[#272d4f] w-1/2 rounded-lg flex items-center justify-center h-12 text-[#272d4f] hover:text-white hover:bg-[#0c48a8] hover:border-[#0c48a8] font-bold cursor-pointer transition-colors"
        >
          Encode
        </Link>

        {/* Decode Button */}
        <button
          className={`border-2 border-[#272d4f] w-1/2 rounded-lg bg-[#272d4f] hover:bg-[#0c48a8] hover:border-[#0c48a8] flex items-center justify-center h-12 text-white font-bold cursor-pointer transition-colors ${
            !textInput ? "opacity-50 cursor-not-allowed" : ""
          }`}
          onClick={handleDecoder}
          disabled={!textInput}
        >
          Decode
        </button>
      </div>
    </div>
  );
};

export default Decoder;
