import { AlarmClock, ChevronRight, Compass, Map } from "lucide-react";

import { Path } from "../../../../lib/interfaces";
import {NEXT_PUBLIC_API_URL} from "../../../constants";

interface CardProps {
  path: Path;
}

function Card({ path }: CardProps) {
  const Icon = (function () {
    // FIXME: placeId도 봐야 함
    if (path.name.includes("역사")) {
      return Compass;
    }
    if (path.name.includes("바빠")) {
      return AlarmClock;
    }
    return Map;
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

export default async function Path({
  params: { placeId },
}: {
  params: { placeId: string };
}) {
  // TODO: fetch paths from backend based on placeId
  const paths = await getPaths(placeId);
  return (
    <div className="bg-primary min-h-[100dvh] flex flex-col gap-8 justify-center px-6 my-auto">
      <h1 className="text-center text-secondary font-bold text-xl">
        관람 추천 루트 소개
      </h1>
      <ul className="flex flex-col gap-4 items-center">
        {paths.map((path) => (
          <li key={path.id} className="w-full">
            <Card path={path} />
          </li>
        ))}
      </ul>
    </div>
  );
}

async function getPaths(placeId) {
  const res = await fetch(`${NEXT_PUBLIC_API_URL}/api/${placeId}/path`);
  const paths: Path[] = await res.json();
  return paths;
}