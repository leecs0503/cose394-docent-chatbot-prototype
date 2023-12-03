import { AlarmClock, ChevronRight, Compass, Map } from "lucide-react";

import { Path } from "../../../../lib/interfaces";

interface CardProps {
  path: Path;
}

function Card({ path }: CardProps) {
  const Icon = (function () {
    // FIXME: placeId도 봐야 함
    switch (path.name) {
      case "역사를 좋아하는 역사가 타입":
        return Compass;
      case "바쁘다 바빠 고대인! 꼭 봐야 할 것만":
        return AlarmClock;
      default:
        return Map;
    }
  })();

  return (
    <a
      href={`/place/${path.placeId}/path/${path.id}`}
      className="btn h-auto bg-base-100 rounded-xl shadow-lg flex p-5 gap-4 justify-between items-center flex-nowrap"
    >
      <div className="flex items-center gap-4">
        <Icon size={36} className="text-primary shrink-0" />
        <div className="flex flex-col break-keep text-left gap-1">
          <h2 className="text-lg font-bold text-neutral leading-snug">
            {path.name}
          </h2>
          <p className="text-neutral/80 leading-snug">{path.description}</p>
        </div>
      </div>
      <ChevronRight className="text-neutral shrink-0" />
    </a>
  );
}

export default function Path({
  params: { placeId },
}: {
  params: { placeId: string };
}) {
  // TODO: fetch paths from backend based on placeId
  const PATHS: Path[] = [
    {
      id: 0,
      placeId: parseInt(placeId),
      name: "역사를 좋아하는 역사가 타입",
      description: "시간 순으로 따라가자!",
    },
    {
      id: 1,
      placeId: parseInt(placeId),
      name: "바쁘다 바빠 고대인! 꼭 봐야 할 것만",
      description: "최적의 동선으로 관람하자!",
    },
  ];

  return (
    <div className="bg-primary min-h-[100dvh] flex flex-col gap-8 justify-center px-6 my-auto">
      <h1 className="text-center text-secondary font-bold text-xl">
        관람 추천 루트 소개
      </h1>
      <ul className="flex flex-col gap-4 items-center">
        {PATHS.map((path) => (
          <li key={path.id} className="w-full">
            <Card path={path} />
          </li>
        ))}
      </ul>
    </div>
  );
}
