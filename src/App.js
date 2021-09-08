import React, { useEffect, useState } from "react";
import "./App.css";
import DownloadButton from "./DownloadButton";
import DownloadButtonDefault from "./DownloadButtonDefault";
import DownloadButtonInvalid from "./DownloadButtonInvalid";

function App() {
  const [videoUrl, setVideoUrl] = useState("");
  const [canDownload, setCanDownload] = useState(false);
  const [id, setId] = useState("");

  useEffect(() => {
    const id = videoUrl.replace("https://www.youtube.com/watch?v=", "");
    console.log(id);
    setId(id);

    setCanDownload(
      videoUrl.startsWith("https://www.youtube.com/watch?v=") ||
        videoUrl.startsWith("https://youtube.com/watch?v=") ||
        videoUrl.startsWith("www.youtube.com/watch?v=") ||
        videoUrl.startsWith("youtube.com/watch?v=") ||
        videoUrl.startsWith("v=")
    );
  }, [videoUrl]);

  return (
    <div className="app">
      <div className="app__navbar">
        <h1>Youtube Downloader/Convertor</h1>
      </div>
      <div className="app__linkBox">
        <form onSubmit={(e) => e.preventDefault()}>
          <input
            value={videoUrl}
            onChange={(e) => setVideoUrl(e.target.value)}
            placeholder="Paste youtube video url here..."
          />
        </form>
      </div>

      {videoUrl === "" ? (
        <DownloadButtonDefault />
      ) : (
        <div>
          {canDownload ? (
            <div>
              <DownloadButton id={id} type="mp3" />
              <br />
              <DownloadButton id={id} type="videos" />
            </div>
          ) : (
            <DownloadButtonInvalid />
          )}
        </div>
      )}
    </div>
  );
}

export default App;
