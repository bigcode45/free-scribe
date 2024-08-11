import { useState } from "react";
import Header from "./components/Header";
import HomePage from "./components/HomePage";
import FileDisplay from "./FileDisplay";

function App() {
  const [file, setFile] = useState(null);
  const [audioStream, setAudioStream] = useState(null);

  const isAudioAvalible = file || audioStream;

  function handleAudioReset() {
    setFile(null);
    setAudioStream(null);
  }

  return (
    <>
      <div className="flex flex-col  max-w-[1050px] mx-auto w-full ">
        <section className=" min-h-screen flex flex-col">
          <Header />
          {isAudioAvalible ? (
            <FileDisplay
              file={file}
              audioStream={audioStream}
              handleAudioReset={handleAudioReset}
            />
          ) : (
            <HomePage setFile={setFile} setAudioStream={setAudioStream} />
          )}
        </section>
        <footer></footer>
      </div>
    </>
  );
}

export default App;
