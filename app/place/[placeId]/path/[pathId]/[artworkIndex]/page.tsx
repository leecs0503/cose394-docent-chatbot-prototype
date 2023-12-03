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

import { ArtWork } from "../../../../../../lib/interfaces";

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
        autoPlay
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
  params: { placeId, pathId, artworkIndex },
}: {
  params: { placeId: string; pathId: string; artworkIndex: string };
}) {
  const [isShowing, setIsShowing] = useState(false);

  const ARTWORK: ArtWork = {
    name: "그림",
    description: "그림 설명",
    id: 0,
    placeId: parseInt(placeId),
    summary: "그림 요약",
  };

  return (
    <div className="h-[100dvh] flex items-center bg-cover bg-center bg-[url(https://source.unsplash.com/random)]">
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full backdrop-blur-lg bg-secondary/50 p-4 pb-56">
        {/* TODO: proper alt text */}
        <div className="object-contain h-full w-full flex items-center">
          <img
            src="https://source.unsplash.com/random"
            alt={`Artwork ${artworkIndex}`}
            className={[
              "rounded-xl shadow-lg transition-opacity",
              isShowing && "opacity-0",
            ].join(" ")}
          />
          <a
            href={`/place/${placeId}/path/${pathId}/${
              parseInt(artworkIndex) - 1
            }`}
            className={[
              "btn btn-sm btn-circle absolute bg-opacity-80 border-opacity-80 text-neutral/80 left-0 ml-8",
              isShowing && "opacity-0",
            ].join(" ")}
          >
            <ChevronLeft />
          </a>
          <a
            href={`/place/${placeId}/path/${pathId}/${
              parseInt(artworkIndex) + 1
            }`}
            className={[
              "btn btn-sm btn-circle absolute bg-opacity-80 border-opacity-80 text-neutral/80 right-0 mr-8",
              isShowing && "opacity-0",
            ].join(" ")}
          >
            <ChevronRight />
          </a>
        </div>
        <BottomSheet
          artwork={ARTWORK}
          isShowing={isShowing}
          setIsShowing={setIsShowing}
        />
      </div>
    </div>
  );
}
