"use client";

import {
  ChevronDown,
  ChevronUp,
  Headphones,
  Play,
  RotateCcw,
} from "lucide-react";
import { useState } from "react";

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
  return (
    <div className="bg-white rounded-xl shadow p-5 flex flex-col gap-4">
      <audio
        src="https://www.soundhelix.com/examples/mp3/SoundHelix-Song-9.mp3"
        preload="auto"
      />
      <div className="flex gap-2 text-neutral items-center">
        <Headphones className="shrink-0" size={18} strokeWidth={2.5} />
        <div className="mr-auto font-bold text-sm">{artworkName} 가이드</div>
        <div className="flex gap-4">
          <RotateCcw size={22} className="shrink-0" />
          <Play size={22} className="shrink-0" />
        </div>
      </div>
      <progress max={100} className="progress progress-primary h-1" />
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
    <div className="h-[100dvh] flex items-center p-8 bg-cover bg-center bg-[url(https://source.unsplash.com/random)]">
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full backdrop-blur-lg bg-secondary/50 p-8 pb-48">
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
