import React, { useState, useEffect } from "react";
import Player from "@madzadev/audio-player";
import "@madzadev/audio-player/dist/index.css";
import YouTube from "react-youtube";

const tracks = [
  {
    url: "/assets/01_Camp_Firelight.mp3",
    title: "Camp Firelight",
    tags: ["VBS 2024"],
  },
  {
    url: "/assets/02_Firelight_Chant.mp3",
    title: "Firelight Chant",
    tags: ["VBS 2024"],
  },
  {
    url: "/assets/03_Trust_In_You.mp3",
    title: "Trust In You",
    tags: ["VBS 2024"],
  },
  {
    url: "/assets/04_Go_Go_Go_With_Us.mp3",
    title: "Go Go Go With Us",
    tags: ["VBS 2024"],
  },
  {
    url: "/assets/05_Where_You_Lead.mp3",
    title: "Where You Lead",
    tags: ["VBS 2024"],
  },
  {
    url: "/assets/06_W-I-S-E.mp3",
    title: "W-I-S-E",
    tags: ["VBS 2024"],
  },
  {
    url: "/assets/07_Peace_Sweet_Peace.mp3",
    title: "Peace Sweet Peace",
    tags: ["VBS 2024"],
  },
  {
    url: "/assets/08_Beautiful_Day.mp3",
    title: "Beautiful Day",
    tags: ["VBS 2024"],
  },
  {
    url: "/assets/09_Trust_And_Follow_You.mp3",
    title: "Trust And Follow You",
    tags: ["VBS 2024"],
  },
  {
    url: "/assets/10_What_Trust_Looks_Like.mp3",
    title: "What Trust Looks Like",
    tags: ["VBS 2024"],
  },
];

export default function Home() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const promises = tracks.map((track) =>
      fetch(track.url)
        .then((response) => {
          if (!response.ok) {
            throw new Error(`Failed to load ${track.title}`);
          }
        })
        .catch((error) => {
          console.error(error.message);
        })
    );

    Promise.all(promises)
      .then(() => {
        setIsLoaded(true);
      })
      .catch((error) => {
        console.error(error.message);
      });
  }, []);

  return (
    <div className="flex flex-wrap justify-center">
      <div className="w-10/12 p-6">
        <h1 className="text-center w-full text-2xl mb-12">VBS Songs</h1>
        <div className="player-wrapper w-full">
          {isLoaded ? (
            <Player
              trackList={tracks}
              includeTags={false}
              includeSearch={false}
              showPlaylist={true}
              sortTracks={false}
              autoPlayNextTrack={false}
            />
          ) : (
            <p>Loading...</p>
          )}
        </div>
      </div>
      <div className="w-10/12 p-6">
        <div className="mb-12">
          <h3 className="text-center w-full text-2xl mb-12">
            1 - Camp Firelight
          </h3>
          <YouTube videoId="iifU3davIRE" opts={opts} onReady={this._onReady} />
        </div>
        <div className="mb-12">
          <h3 className="text-center w-full text-2xl mb-12">
            2 - Firelight Chant
          </h3>
          <YouTube videoId="K61_jzKc1nE" opts={opts} onReady={this._onReady} />
        </div>
        <div className="mb-12">
          <h3 className="text-center w-full text-2xl mb-12">
            3 - Trust in You
          </h3>
          <YouTube videoId="jmVOhW18DcY" opts={opts} onReady={this._onReady} />
        </div>
        <div className="mb-12">
          <h3 className="text-center w-full text-2xl mb-12">
            4 - Go Go Go With Us
          </h3>
          <YouTube videoId="4tzYR6nLcic" opts={opts} onReady={this._onReady} />
        </div>
        <div className="mb-12">
          <h3 className="text-center w-full text-2xl mb-12">
            5 - Where You Lead
          </h3>
          <YouTube videoId="HRxGWOhteN8" opts={opts} onReady={this._onReady} />
        </div>
        <div className="mb-12">
          <h3 className="text-center w-full text-2xl mb-12">6 - W I S E</h3>
          <YouTube videoId="OIvp6kWNX-o" opts={opts} onReady={this._onReady} />
        </div>
        <div className="mb-12">
          <h3 className="text-center w-full text-2xl mb-12">
            7 - Peace Sweet Peace
          </h3>
          <YouTube videoId="bmnf-mBvTlg" opts={opts} onReady={this._onReady} />
        </div>
        <div className="mb-12">
          <h3 className="text-center w-full text-2xl mb-12">
            8 - Beautiful Day
          </h3>
          <YouTube videoId="hP-2ncuuaAg" opts={opts} onReady={this._onReady} />
        </div>
        <div className="mb-12">
          <h3 className="text-center w-full text-2xl mb-12">
            1 - Camp Firelight
          </h3>
          <YouTube videoId="eCI9rA0XHcY" opts={opts} onReady={this._onReady} />
        </div>
        <div className="mb-12">
          <h3 className="text-center w-full text-2xl mb-12">
            1 - Camp Firelight
          </h3>
          <YouTube videoId="vqLX3ESboCE" opts={opts} onReady={this._onReady} />
        </div>
      </div>
    </div>
  );
}
