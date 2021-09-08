import React from "react";
import "./DownloadButton.css";

function DownloadButton({ id, type }) {
  return (
    <div className="download">
      <h2>Download {type === "mp3" ? "mp3" : "videos"} file</h2>
      <iframe
        title="t"
        src={`https://www.yt-download.org/api/button/${type}/${id}`}
        width="100%"
        height="100px"
        scrolling="no"
        style={{ border: "none" }}
      ></iframe>
    </div>
  );
}

export default DownloadButton;
