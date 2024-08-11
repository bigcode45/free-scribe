import React from "react";

export default function FileDisplay(props) {
  const { file, audioStream, handleAudioReset } = props;

  return (
    <main className=" flex-1 p-4  flex flex-col justify-center text-center  gap-3 sm:gap-4 md:gap-5 pb-20 w-fit mx-auto max-w-full">
      <h1 className=" font-semibold text-4xl sm:text-5xl md:text-6xl">
        Your<span className=" text-blue-400">File</span>
      </h1>
      <div className="flex mx-auto flex-col my-4 text-left">
        <h1 className=" font-semibold">Name</h1>
        <p>{file.name}</p>
      </div>
      <div className=" flex items-center justify-between gap-4">
        <button
          className=" text-slate-400 hover:text-blue-600 duration-200"
          onClick={handleAudioReset}
        >
          Reset
        </button>
        <button className=" specialBtn px-3 py-2 rounded-lg text-blue-400 flex items-center gap-2">
          <p>Transcribe</p>
          <i className="fa-solid fa-pen-nib"></i>
        </button>
      </div>
    </main>
  );
}
