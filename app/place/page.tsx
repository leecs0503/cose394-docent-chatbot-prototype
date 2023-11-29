import { MapPin, Pyramid } from "lucide-react";

import { Place } from "../../lib/interfaces";

interface CardProps {
  place: Place;
}

function Card({ place }: CardProps) {
  const Icon = (function () {
    switch (place.name) {
      case "고려대학교 박물관":
        return MapPin;
      case "고려대학교 캠퍼스 투어":
        return Pyramid;
      default:
        return MapPin;
    }
  })();

  return (
    <div className="bg-base-100 rounded-xl relative mt-10 shadow-lg">
      <div className="rounded-full w-20 flex items-center justify-center aspect-square bg-base-100 shadow-lg -translate-x-1/2 -translate-y-1/2 left-1/2 text-primary mx-auto absolute">
        <Icon size={48} />
      </div>
      <div className="flex flex-col p-4 pt-14 gap-4">
        <div className="text-xl font-bold text-primary text-center">
          {place.name}
        </div>
        <a href={`/place/${place.id}`} className="btn btn-primary w-64">
          가이드 시작하기
        </a>
      </div>
    </div>
  );
}

export default function PlacePage() {
  // TODO: fetch places from server
  const PLACES: Place[] = [
    {
      id: 0,
      name: "고려대학교 박물관",
      description:
        "고려대학교 박물관은 고려대학교의 역사를 보여주는 박물관입니다.",
    },
    {
      id: 1,
      name: "고려대학교 캠퍼스 투어",
      description: "고려대학교의 캠퍼스를 돌아보는 코스입니다.",
    },
  ];

  return (
    <div className="bg-primary min-h-[100dvh] flex justify-center">
      <ul className="flex flex-col gap-8 items-center my-auto">
        {PLACES.map((place) => (
          <li key={place.id}>
            <Card place={place} />
          </li>
        ))}
      </ul>
    </div>
  );
}
