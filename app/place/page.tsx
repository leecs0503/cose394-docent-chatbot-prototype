import { MapPin } from "lucide-react";

import { NEXT_PUBLIC_API_URL } from "@app/constants";
import { Place } from "@lib/interfaces";

interface CardProps {
  place: Place;
}

function Card({ place }: CardProps) {
  const Icon = (function () {
    if (place.name.includes("박물관")) {
      return MapPin;
    }
    if (place.name.includes("캠퍼스")) {
      return MapPin;
    }
    return MapPin;
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
        <a
          href={`/place/${place.id}`}
          className="btn btn-primary w-64"
          data-umami-event="place-select"
          data-umami-event-place-select-name={place.name}
        >
          가이드 시작하기
        </a>
      </div>
    </div>
  );
}

export default async function PlacePage() {
  const res = await fetch(`${NEXT_PUBLIC_API_URL}/api/place`, {
    cache: "no-cache",
  });
  const places: Place[] = await res.json();
  return (
    <div className="bg-primary min-h-[100dvh] flex justify-center">
      <ul className="flex flex-col gap-8 items-center my-auto">
        {places.map((place) => (
          <li key={place.id}>
            <Card place={place} />
          </li>
        ))}
      </ul>
    </div>
  );
}
