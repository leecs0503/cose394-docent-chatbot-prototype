import { ChevronRight, LucideIcon, Map, Timer } from "lucide-react";

interface CardProps {
  id: string;
  name: string;
  description: string;
  Icon: LucideIcon;
  placeId: string;
}

function Card({ id, name, description, Icon, placeId }: CardProps) {
  return (
    <a
      href={`/place/${placeId}/path/${id}`}
      className="btn h-auto bg-base-100 rounded-xl shadow-lg flex p-5 gap-3 justify-between items-center flex-nowrap"
    >
      <div className="flex items-center gap-3">
        <Icon size={36} className="text-primary shrink-0" />
        <div className="flex flex-col break-keep text-left">
          <h2 className="text-lg font-bold text-neutral">{name}</h2>
          <p className="text-neutral/80">{description}</p>
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
  const PATHS = [
    {
      id: "0",
      name: "역사를 좋아하는 역사가 타입",
      description: "시간 순으로 따라가자!",
      Icon: Timer,
    },
    {
      id: "1",
      name: "바쁘다 바빠 고대인! 꼭 봐야 할 것만",
      description: "최적의 동선으로 관람하자!",
      Icon: Map,
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
            <Card {...path} placeId={placeId} />
          </li>
        ))}
      </ul>
    </div>
  );
}
