"use client";

import { ArrowLeft, MapPin } from "lucide-react";
import { useRouter } from "next/navigation";
import {
  KeepScale,
  TransformComponent,
  TransformWrapper,
} from "react-zoom-pan-pinch";

interface BreadCrumbsProps {
  route: string[];
  active: number;
}

interface BottomSheetProps {
  route: string[];
  backgroundColor: string;
}

interface PinProps {
  id: number;
  pathId: string;
  x: number;
  y: number;
}

interface InteractiveMapProps {
  mapImagePath: string;
  mapImageAlt: string;
  // TODO: 타입 뽑아서 정리
  pins: {
    id: number;
    pathId: string;
    x: number;
    y: number;
  }[];
  backgroundColor: string;
}

function BreadCrumbs({ active, route }: BreadCrumbsProps) {
  return (
    <ol className="flex flex-col gap-2 relative break-keep">
      {route.map((step, index) => (
        <li key={index} className="first-of-type:pt-1 last-of-type:pb-1">
          <div className="flex gap-2 items-center">
            <div
              className={[
                "w-2 h-2 rounded-full shrink-0 z-10 ring-4 ring-white",
                index === active ? "bg-primary" : "bg-neutral-content",
              ].join(" ")}
            ></div>
            <div
              className={
                index === active ? "font-semibold text-primary" : "text-neutral"
              }
            >
              {step}
            </div>
          </div>
        </li>
      ))}
      <div className="absolute h-full w-0.5 bg-neutral-content/70 rounded-full left-[0.1875rem]"></div>
    </ol>
  );
}

function BottomSheet({ route, backgroundColor }: BottomSheetProps) {
  return (
    <div className={`bg-[${backgroundColor}]`}>
      <div className="bg-white rounded-t-xl shadow p-4 flex flex-col gap-4">
        <div className="flex flex-col gap-4 p-2">
          <h1 className="font-bold text-lg">[바쁘다 바빠 고대인!] 루트</h1>
          <BreadCrumbs active={0} route={route} />
        </div>
        {/* TODO: href 걸기 */}
        <a href={null} className="btn btn-primary">
          관람 시작하기
        </a>
      </div>
    </div>
  );
}

function Pin({ id, pathId, x, y }: PinProps) {
  return (
    <KeepScale
      className={`absolute top-0 left-0`}
      style={{
        marginLeft: `${x}px`,
        marginTop: `${y}px`,
      }}
      key={id}
    >
      {/* TODO: href 걸기 */}
      <a href={null}>
        <MapPin
          fill="currentColor"
          size={32}
          className="text-red-600 drop-shadow-lg"
        />
        <div className="absolute inset-0 font-semibold text-lg text-white text-center">
          {id + 1}
        </div>
      </a>
    </KeepScale>
  );
}

function InteractiveMap({
  mapImagePath,
  mapImageAlt,
  pins,
  backgroundColor,
}: InteractiveMapProps) {
  return (
    <TransformWrapper>
      <TransformComponent wrapperClass={`bg-[${backgroundColor}] relative`}>
        <img src={mapImagePath} alt={mapImageAlt} />
        {pins.map((pin) => (
          <Pin key={pin.id} {...pin} />
        ))}
      </TransformComponent>
    </TransformWrapper>
  );
}

export default function Path({
  params: { pathId },
}: {
  params: { pathId: string };
}) {
  // TODO: 루트 정보 받아오기
  const ROUTE = [
    "2층 역사민족전시실 → 고미술전시실",
    "고미술전시실 출구 오른쪽 에스컬레이터를 타시면 3층 현대미술관이 나옵니다.",
    "3층 현대미술전시실",
  ];

  const PINS = [
    {
      id: 0,
      pathId: pathId,
      x: 140,
      y: 406,
    },
    {
      id: 1,
      pathId: pathId,
      x: 487,
      y: 82,
    },
  ];

  const BACKGROUND_COLOR = "#EEEEEE";

  const router = useRouter();

  const onBackClick = () => {
    router.back();
  };

  return (
    <div>
      <div className="flex flex-col h-[100dvh]">
        <InteractiveMap
          mapImagePath="/maps/test_map.svg"
          mapImageAlt="테스트 지도"
          pins={PINS}
          backgroundColor={BACKGROUND_COLOR}
        />
        <BottomSheet route={ROUTE} backgroundColor={BACKGROUND_COLOR} />
      </div>
      <button
        onClick={onBackClick}
        className="btn w-auto h-auto rounded-full aspect-square p-2 btn-primary shadow-md shadow-primary/30 absolute top-6 left-6"
      >
        <ArrowLeft />
      </button>
    </div>
  );
}
