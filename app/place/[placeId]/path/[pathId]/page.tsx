"use client";

import { ArrowLeft, MapPin } from "lucide-react";
import { useRouter } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import {
  KeepScale,
  TransformComponent,
  TransformWrapper,
} from "react-zoom-pan-pinch";

import Loading from "./loading";

import { NEXT_PUBLIC_API_URL } from "@app/constants";
import { PathPoint } from "@lib/interfaces";

interface BreadCrumbsProps {
  route: string[];
  active: number;
}

interface BottomSheetProps {
  route: string[];
  placeId: string;
  pathId: string;
}

interface MapResolution {
  width: number;
  height: number;
}

interface PathPointProps {
  pathPoint: PathPoint;
  mapResolution: MapResolution;
  placeId: string;
  offset: number;
}

interface InteractiveMapProps {
  mapImagePath: string;
  mapImageAlt: string;
  pathPoints: PathPoint[];
  backgroundColor: string;
  placeId: string;
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
  // FIXME: 기한 내 MVP 테스트를 위해 하드코딩
  let pathTitle: string = "";
  if (pathId === "1") {
    pathTitle = "[바쁘다 바빠 고대인!] 루트";
  }
  if (pathId == "2") {
    pathTitle = "[고려대의 역사를 알아보자!]루트"
  }
  if (pathId == "3") {
    pathTitle = "[저녁공기와 함께 고려대 산책]루트"
  }
  if (pathId == "4") {
    pathTitle = "[첫 루브르 관람을 위한 추천 가이드]루트"
  }

  return (
    <div className="bg-white rounded-t-xl shadow p-4 flex flex-col gap-4 absolute bottom-0 left-0 right-0">
      <div className="flex flex-col gap-4 p-2">
        <h1 className="font-bold text-lg">{pathTitle}</h1>
        <BreadCrumbs active={0} route={route} />
      </div>
      <a
        data-umami-event="path-start"
        data-umami-event-path-start-name={pathId}
        data-umami-event-path-start-place-id={placeId}
        href={`/place/${placeId}/path/${pathId}/0`}
        className="btn btn-primary"
      >
        관람 시작하기
      </a>
    </div>
  );
}

function PathPoint({
  pathPoint,
  mapResolution,
  offset,
  placeId,
}: PathPointProps) {
  // XXX: KeepScale 컴포넌트 쓸지 말지?
  // KeepScale 컴포넌트 사용 시 지도를 확대하거나 축소해도 핀의 크기는 변하지 않습니다.

  return (
    <KeepScale
      className="absolute hover:[scale:1.25] active:[scale:1.25] transition-all origin-bottom"
      style={{
        left: `calc(${(pathPoint.x / mapResolution.width) * 100}% - 6px)`,
        top: `calc(${(pathPoint.y / mapResolution.height) * 100}% - 10px)`,
      }}
      key={pathPoint.id}
    >
      <a
        data-umami-event="pathpoint-select"
        data-umami-event-pathpoint-select-name={pathPoint.id}
        data-umami-event-pathpoint-select-place-id={placeId}
        data-umami-event-pathpoint-select-path-id={pathPoint.pathId}
        href={`/place/${placeId}/path/${pathPoint.pathId}/${
          pathPoint.id - offset
        }`}
      >
        <MapPin
          fill="currentColor"
          size={32}
          className="text-red-600 drop-shadow-lg"
        />
        <div className="absolute inset-0 font-semibold text-lg text-white text-center">
          {pathPoint.id + 1 - offset}
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
  placeId,
}: InteractiveMapProps) {
  const mapImageRef = useRef<HTMLImageElement>(null);
  const [mapResolution, setMapResolution] = useState<MapResolution | null>(
    null
  );

  const onImageLoad = () => {
    setMapResolution({
      width: mapImageRef.current.naturalWidth,
      height: mapImageRef.current.naturalHeight,
    });
  };

  // FIXME: remove this
  const offset = Math.min.apply(
    null,
    pathPoints.map((pathPoint) => pathPoint.id)
  );

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
          paddingBottom: "15rem",
        }}
      >
        <div className="relative">
          <img
            src={mapImagePath}
            alt={mapImageAlt}
            ref={mapImageRef}
            onLoad={onImageLoad}
          />
          {mapResolution &&
            pathPoints.map((pathPoint) => (
              <PathPoint
                key={pathPoint.id}
                pathPoint={pathPoint}
                offset={offset}
                mapResolution={mapResolution}
                placeId={placeId}
              />
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
  let route = [];
  // FIXME: 기한 내 MVP 테스트를 위해 하드코딩
  if (pathId == "1") {
    route = [
      "2층 역사민족전시실 → 고미술전시실",
      "고미술전시실 출구 오른쪽 에스컬레이터를 타시면 3층 현대미술관이 나옵니다.",
      "3층 현대미술전시실",
    ]
  }
  if (pathId == "2") {
    route = [
      "안암역 1번출구에 나오셔서 직진후 좌회전하시면 내리막길이 있습니다",
      "민주광장 -> 418기념관",
      "민주광장을 끼고 오르막길을 올라가면 됩니다",
      "문과대 서관 -> 중앙도서관",
    ]
  }
  if (pathId == "3") {
    route = [
      "고려대 1번출구 -> 큰길을 끼고 우회전 -> 고려대 정문",
      "sk미래관 -> 고려대 본관 -> 중앙도서관",
      "언덕을 위 작은 철문 -> 좌회전 후 직진 -> 우측에 작은 철문",
      "인촌기념관",
    ]
  }
  if (pathId == "4") {
    route = [
      "루브르 박물관에 오신 것을 환영합니다." // FIXME: 기획 받고 수정
    ]
  }
  const [info, setInfo] = useState({
    isLoading: true,
    pathPoints: [],
  });
  useEffect(() => {
    getPathPoints(placeId, pathId).then((pathPoints) => {
      setInfo({
        isLoading: false,
        pathPoints,
      });
    });
  }, []);

  const { isLoading, pathPoints } = info;

  const BACKGROUND_COLOR = "#EEEEEE";

  const router = useRouter();

  const onBackClick = () => {
    router.back();
  };

  if (isLoading) {
    return <Loading />;
  }
  const routeImgPath = `/images/route/${placeId}/추천루트${pathId.padStart(
    2,
    "0"
  )}.png`;
  return (
    <div>
      <div className={`h-[100dvh]`}>
        <InteractiveMap
          mapImagePath={routeImgPath}
          mapImageAlt="지도"
          pathPoints={pathPoints}
          placeId={placeId}
          backgroundColor={BACKGROUND_COLOR}
        />
        <BottomSheet route={route} placeId={placeId} pathId={pathId} />
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

async function getPathPoints(placeId, pathId) {
  const res = await fetch(
    `${NEXT_PUBLIC_API_URL}/api/${placeId}/path/${pathId}`,
    { cache: "no-cache" }
  );
  const paths: PathPoint[] = await res.json();
  return paths;
}
