"use client";

import { ArrowLeft, MapPin } from "lucide-react";
import { useRouter } from "next/navigation";
import {
  KeepScale,
  TransformComponent,
  TransformWrapper,
} from "react-zoom-pan-pinch";

import { PathPoint } from "../../../../../lib/interfaces";

interface BreadCrumbsProps {
  route: string[];
  active: number;
}

interface BottomSheetProps {
  route: string[];
  placeId: string;
  pathId: string;
}

interface PathPointProps {
  pathPoint: PathPoint;
}

interface InteractiveMapProps {
  mapImagePath: string;
  mapImageAlt: string;
  pathPoints: PathPoint[];
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

function BottomSheet({ route, placeId, pathId }: BottomSheetProps) {
  return (
    <div className="bg-white rounded-t-xl shadow p-4 flex flex-col gap-4 absolute bottom-0 left-0 right-0">
      <div className="flex flex-col gap-4 p-2">
        <h1 className="font-bold text-lg">[바쁘다 바빠 고대인!] 루트</h1>
        <BreadCrumbs active={0} route={route} />
      </div>
      <a
        href={`/place/${placeId}/path/${pathId}/0`}
        className="btn btn-primary"
      >
        관람 시작하기
      </a>
    </div>
  );
}

function PathPoint({ pathPoint }: PathPointProps) {
  // XXX: KeepScale 컴포넌트 쓸지 말지?
  // KeepScale 컴포넌트 사용 시 지도를 확대하거나 축소해도 핀의 크기는 변하지 않습니다.

  // XXX: 모든 지도에 대해 동일한 이미지 크기를 사용할 필요가 있습니다.

  const IMAGE_RESOLUTION = {
    width: 752,
    height: 1178,
  };

  return (
    <KeepScale
      className="absolute top-0 left-0"
      style={{
        left: `${(pathPoint.x / IMAGE_RESOLUTION.width) * 100}%`,
        top: `${(pathPoint.y / IMAGE_RESOLUTION.height) * 100}%`,
      }}
      key={pathPoint.id}
    >
      {/* TODO: href 걸기 */}
      <a href={null}>
        <MapPin
          fill="currentColor"
          size={32}
          className="text-red-600 drop-shadow-lg"
        />
        <div className="absolute inset-0 font-semibold text-lg text-white text-center">
          {pathPoint.id + 1}
        </div>
      </a>
    </KeepScale>
  );
}

function InteractiveMap({
  mapImagePath,
  mapImageAlt,
  pathPoints,
  backgroundColor,
}: InteractiveMapProps) {
  return (
    <TransformWrapper>
      <TransformComponent
        wrapperStyle={{
          height: "100%",
          backgroundColor,
        }}
        contentClass="items-center"
        contentStyle={{
          height: "100%",
          paddingBottom: "8rem",
        }}
      >
        <div className="relative">
          <img src={mapImagePath} alt={mapImageAlt} className="h-fit" />
          {pathPoints.map((pathPoint) => (
            <PathPoint pathPoint={pathPoint} key={pathPoint.id} />
          ))}
        </div>
      </TransformComponent>
    </TransformWrapper>
  );
}

export default function Path({
  params: { placeId, pathId },
}: {
  params: { placeId: string; pathId: string };
}) {
  // TODO: 루트 정보와 pathpoints 받아오기
  const ROUTE = [
    "2층 역사민족전시실 → 고미술전시실",
    "고미술전시실 출구 오른쪽 에스컬레이터를 타시면 3층 현대미술관이 나옵니다.",
    "3층 현대미술전시실",
  ];

  const PATHPOINTS = [
    {
      id: 0,
      pathId: parseInt(pathId),
      x: 140,
      y: 406,
    },
    {
      id: 1,
      pathId: parseInt(pathId),
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
      <div className={`h-[100dvh]`}>
        <InteractiveMap
          mapImagePath="/maps/test_map.svg"
          mapImageAlt="테스트 지도"
          pathPoints={PATHPOINTS}
          backgroundColor={BACKGROUND_COLOR}
        />
        <BottomSheet route={ROUTE} placeId={placeId} pathId={pathId} />
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
