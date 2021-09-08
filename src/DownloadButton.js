import React, { useState, useEffect } from "react";
import CircularProgress from "@material-ui/core/CircularProgress";
import "./DownloadButton.css";

function DownloadButton({ id, type }) {
  const [Res, setRes] = useState({});

  useEffect(() => {
    async function fetchMyAPI() {
      const url = `https://www.yt-download.org/api/button/${type}/${id}`;

      const response = await fetch(url);
      setRes(response);
    }

    fetchMyAPI();
  }, [id, type]);

  return (
    <div className="download">
      <h2>Download {type === "mp3" ? "mp3" : "videos"} file</h2>
      {Res.status !== 200 ? (
        <CircularProgress />
      ) : (
        <iframe
          title="download"
          src={Res.url}
          width="100%"
          height="100px"
          scrolling="no"
          loading="eager"
          referrerPolicy="origin-when-cross-origin"
          style={{ border: "none" }}
        ></iframe>
      )}
    </div>
  );
}

export default DownloadButton;
