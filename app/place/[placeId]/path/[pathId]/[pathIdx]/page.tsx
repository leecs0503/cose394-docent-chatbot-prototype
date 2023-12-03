"use client";

import {
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  ChevronUp,
  Headphones,
  Loader2,
  Pause,
  Play,
  Rewind,
} from "lucide-react";
import { useEffect, useRef, useState } from "react";

import { NEXT_PUBLIC_API_URL } from "@app/constants";
import { ArtWork, Path } from "@lib/interfaces";

interface BottomSheetProps {
  artwork: ArtWork;
  isShowing: boolean;
  setIsShowing: React.Dispatch<React.SetStateAction<boolean>>;
}
interface ArtworkInfoProps {
  isShowing: boolean;
  artwork: ArtWork;
}

interface AudioPlayerProps {
  artworkName: ArtWork["name"];
}

function ArtworkInfo({ isShowing, artwork }: ArtworkInfoProps) {
  return (
    <div className="bg-white rounded-xl shadow p-5 pt-7 flex flex-col gap-4">
      {isShowing === true && (
        <div className="flex flex-col gap-2">
          <h1 className="text-center font-bold text-neutral">{artwork.name}</h1>
          <p className="text-center font-semibold text-neutral/70 text-sm">
            {artwork.description}
          </p>
          <p className="text-neutral/90">{artwork.summary}</p>
        </div>
      )}
      {isShowing === false && (
        <h1 className="text-center font-bold">도슨트 읽기</h1>
      )}
    </div>
  );
}

function AudioPlayer({ artworkName }: AudioPlayerProps) {
  const audioRef = useRef<HTMLAudioElement>(null);
  const progressBarRef = useRef<HTMLProgressElement>(null);

  const [isPlaying, setIsPlaying] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const PlaybackIcon = isLoading ? Loader2 : isPlaying ? Pause : Play;
  const RewindIcon = isLoading ? Loader2 : Rewind;

  useEffect(() => {
    if (audioRef.current) {
      setIsLoading(false);

      audioRef.current.play();

      if (progressBarRef.current) {
        progressBarRef.current.value = 0;
      }

      audioRef.current.addEventListener("play", () => {
        setIsPlaying(true);
      });

      audioRef.current.addEventListener("pause", () => {
        setIsPlaying(false);
      });

      audioRef.current.addEventListener("timeupdate", () => {
        const { currentTime, duration } = audioRef.current;
        const progress = (currentTime / duration) * 100;

        if (progressBarRef.current) {
          progressBarRef.current.value = progress;
        }
      });
    }
  }, []);

  const onRewindClick = () => {
    if (audioRef.current) {
      audioRef.current.currentTime -= 5;
    }
  };

  const onPlaybackActionClick = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play();
      }
    }
  };

  return (
    <div className="bg-white rounded-xl shadow p-5 pt-3 flex flex-col gap-2">
      <audio
        ref={audioRef}
        src="https://www.soundhelix.com/examples/mp3/SoundHelix-Song-9.mp3"
        preload="auto"
      />
      <div className="flex gap-2 text-neutral items-center flex-wrap">
        <Headphones className="shrink-0" size={18} strokeWidth={2.5} />
        <div className="font-bold text-sm">{artworkName} 가이드</div>
        <div className="flex gap-0.5 ml-auto translate-x-2.5">
          {isPlaying && isLoading === false && (
            <button
              onClick={onRewindClick}
              className="btn btn-ghost p-2 aspect-square shrink-0"
            >
              <RewindIcon
                className={isLoading ? "animate-spin opacity-50" : ""}
              />
            </button>
          )}
          <button
            onClick={onPlaybackActionClick}
            className="btn btn-ghost p-2 aspect-square shrink-0"
          >
            <PlaybackIcon className={isLoading && "animate-spin opacity-50"} />
          </button>
        </div>
      </div>
      <progress
        max={100}
        ref={progressBarRef}
        className="progress progress-primary h-1"
      />
    </div>
  );
}

function BottomSheet({ artwork, isShowing, setIsShowing }: BottomSheetProps) {
  const onChevronClick = () => {
    setIsShowing((prev) => !prev);
  };

  const Icon = isShowing ? ChevronDown : ChevronUp;

  return (
    <div className="absolute bottom-0 left-0 right-0 flex flex-col gap-4 p-4">
      <div className="flex justify-center translate-y-8">
        <button
          onClick={onChevronClick}
          aria-label="닫기"
          className="btn btn-primary btn-circle shadow-md shadow-primary/30 btn-sm"
        >
          <Icon size={18} />
        </button>
      </div>
      <ArtworkInfo isShowing={isShowing} artwork={artwork} />
      <AudioPlayer artworkName={artwork.name} />
    </div>
  );
}

export default function ArtworkDetail({
  params: { placeId, pathId, pathIdx },
}: {
  params: { placeId: string; pathId: string; pathIdx: string };
}) {

  const [isShowing, setIsShowing] = useState(false);
  const [infos, setInfos] = useState({
    isLoading: true,
    isFail: false,
    artwork: null,
    previousPathIdx: null,
    nxtPathIdx: null,
  });
  useEffect(()=>{
    getInfos(placeId, pathId, parseInt(pathIdx)).then(setInfos);
  }, []);

  const {isLoading, isFail, artwork ,previousPathIdx ,nxtPathIdx} = infos;

  if (isLoading) {
    return <div> loading.. </div>;
  }
  if (isFail) {
    return <div> fail </div>;
  }
  // TODO: 배경도 작품 이미지로 변경
  return (
    <div className="h-[100dvh] flex items-center bg-cover bg-center bg-[url(https://source.unsplash.com/random)]">
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full backdrop-blur-lg bg-secondary/50 p-4 pb-56">
        {/* TODO: proper alt text */}
        <div className="object-contain h-full w-full flex items-center">
          <img
            src={`/images/artworks/${placeId}/작품${`${artwork.id}`.padStart(2, '0')}.png`}
            alt={`Artwork ${artwork.id}`}
            className={[
              "rounded-xl shadow-lg transition-opacity",
              isShowing && "opacity-0",
            ].join(" ")}
          />
          <a
            href={`/place/${placeId}/path/${pathId}/${previousPathIdx}`}
            className={[
              "btn btn-sm btn-circle absolute bg-opacity-80 border-opacity-80 text-neutral/80 left-0 ml-8",
              isShowing && "opacity-0",
            ].join(" ")}
          >
            <ChevronLeft />
          </a>
          <a
            href={`/place/${placeId}/path/${pathId}/${nxtPathIdx}`}
            className={[
              "btn btn-sm btn-circle absolute bg-opacity-80 border-opacity-80 text-neutral/80 right-0 mr-8",
              isShowing && "opacity-0",
            ].join(" ")}
          >
            <ChevronRight />
          </a>
        </div>
        <BottomSheet
          artwork={artwork}
          isShowing={isShowing}
          setIsShowing={setIsShowing}
        />
      </div>
    </div>
  );
}

const FAIL_INFO = {
  isLoading: false,
  isFail: true,
  artwork: null,
  previousPathIdx: null,
  nxtPathIdx: null,
};

async function getInfos(placeId, pathId, pathIdx: number) {
  const pathPoints = await getPathPoints(placeId, pathId);
  const artworks = await getArtworks(placeId, pathId);
  if (isNaN(pathIdx) || pathIdx < 0 || pathIdx >= pathPoints.length) {
    return FAIL_INFO;
  }
  const artworkId = pathPoints[pathIdx].id;
  let artwork = null;
  for (const artworkInstance of artworks) {
    if (artworkInstance.id == artworkId) {
      artwork = artworkInstance;
    }
  }
  if (artwork == null) {
    return FAIL_INFO;
  }
  return {
    isLoading: false,
    isFail: false,
    artwork,
    previousPathIdx: Math.max(0, pathIdx - 1),
    nxtPathIdx: Math.max(0, Math.min(pathPoints.length - 1, pathIdx + 1)),
  };
}

async function getPathPoints(placeId, pathId) {
  const res = await fetch(`${NEXT_PUBLIC_API_URL}/api/${placeId}/path/${pathId}`, {cache: "no-cache"});
  const paths: Path[] = await res.json();
  return paths;
}

async function getArtworks(placeId, pathId) {
  const res = await fetch(`${NEXT_PUBLIC_API_URL}/api/${placeId}/artwork`, {cache: "no-cache"});
  const artworks: ArtWork[] = await res.json();
  return artworks;
}
