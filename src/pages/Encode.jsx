import Encoder from "../components/Encoder"
import { useState } from "react"

const Encode = () => {

  const [result, setResult] = useState("");

  return (
    <div className="w-4/5 h-[80%] m-auto pt-16 flex flex-col sm:flex-row justify-between">
        <div className="w-[48%]">
            <Encoder
            setResult={setResult}
            />
        </div>

        <div className="Result w-[48%]">
          <div className="space-y-2">
            <h2 className="font-bold">Result:</h2>
            <div className="frame">
              <textarea value={result} readOnly className="h-[20rem] rounded-lg w-full bg-white border-2 border-[#cecece] p-4 resize-none"></textarea>
            </div>

            <button className="border-2 border-[#272d4f] text-[#272d4f] hover:border-[#0c48a8] hover:bg-[#0c48a8] font-bold hover:text-white w-full rounded-lg h-12" onClick={() => navigator.clipboard.writeText(result)}>Copy code to clipboard</button>
          </div>
        </div>
    </div>
  )
}

export default Encode