import { LucideIcon, MapPin, Pyramid } from "lucide-react";

interface CardProps {
  name: string;
  id: string;
  Icon: LucideIcon;
}

function Card({ name, id, Icon }: CardProps) {
  return (
    <div className="bg-base-100 rounded-xl relative mt-10 shadow-lg">
      <div className="rounded-full w-20 flex items-center justify-center aspect-square bg-base-100 shadow-lg -translate-x-1/2 -translate-y-1/2 left-1/2 text-primary mx-auto absolute">
        <Icon size={48} />
      </div>
      <div className="flex flex-col p-4 pt-14 gap-4">
        <div className="text-xl font-bold text-primary text-center">{name}</div>
        <a href={`/place/${id}`} className="btn btn-primary w-64">
          가이드 시작하기
        </a>
      </div>
    </div>
  );
}

export default function Place() {
  // TODO: fetch places from server
  const PLACES = [
    {
      name: "고려대학교 박물관",
      id: "museum",
      Icon: MapPin,
    },
    {
      name: "고려대학교 캠퍼스 투어",
      id: "campus",
      Icon: Pyramid,
    },
  ];

  return (
    <div className="bg-primary min-h-[100dvh] flex justify-center">
      <ul className="flex flex-col gap-8 items-center my-auto">
        {PLACES.map((place) => (
          <li key={place.id}>
            <Card {...place} />
          </li>
        ))}
      </ul>
    </div>
  );
}
