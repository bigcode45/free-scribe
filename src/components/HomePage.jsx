import React, { useRef, useState } from "react";

function HomePage(props) {
  const { setFile, setAudioStream } = props;
  const { recordingStatus, setRecordingStatus } = useState("inactive");
  const { audioChunks, setAudioChunks } = useState([]);
  const { duration, setDuration } = useState(0);

  const mediaRecorder = useRef(null);

  const mimeType = "audio/webm";

  return (
    <main className=" flex-1 p-4  flex flex-col justify-center text-center  gap-3 sm:gap-4 md:gap-5 pb-20">
      <h1 className=" font-semibold text-5xl sm:text-6xl md:text-7xl">
        Free<span className=" text-blue-400">Scribe</span>
      </h1>
      <h3 className=" font-medium md:text-lg">
        Record <span className=" text-blue-400">&rarr;</span> Transcribe{" "}
        <span className=" text-blue-400">&rarr;</span> Translate
      </h3>
      <button className="flex items-center justify-between text-base gap-4 mx-auto w-72 max-w-full my-4 specialBtn px-4 py-2 rounded-xl  ">
        <p className=" text-blue-400">Record</p>
        <i className="fa-solid fa-microphone"></i>
      </button>
      <p className=" text-base">
        Or{" "}
        <label className="text-blue-400 cursor-pointer hover:text-blue-600 duration-200">
          upload
          <input
            onChange={(e) => {
              const tempfile = e.target.files[0];
              setFile(tempfile);
            }}
            className="hidden"
            type="File"
            accept=".mp3,.wave"
          />
        </label>{" "}
        a mp3 File
      </p>
      <p className=" italic text-slate-400">Free Now Free Forever</p>
    </main>
  );
}

export default HomePage;
