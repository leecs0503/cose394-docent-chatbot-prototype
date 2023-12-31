import { NEXT_PUBLIC_API_URL } from "@app/constants";
import { Place } from "@lib/interfaces";

interface PlaceInfoProps {
  place: Place;
}

function PlaceInfo({ place }: PlaceInfoProps) {
  return (
    <div>
      {/* FIXME: image src (public에 업로드하고 id로 받아오면 어떨까요) */}
      <img
        className="bg-stone-300 object-contain"
        src={`/images/place/${place.name}.jpg`}
        alt={`${place.name} 전경`}
      />
      <div className="flex flex-col gap-3 p-6 pb-24 break-keep">
        <h1 className="font-bold text-2xl whitespace-pre-wrap">{place.name}</h1>
        <p className="text-stone-500">{place.description}</p>
      </div>
      <div className="absolute bottom-0 right-0 left-0 w-full p-6 pt-0">
        <a
          data-umami-event="place-confirm"
          data-umami-event-place-confirm-name={place.name}
          href={`/place/${place.id}/path`}
          className="btn btn-primary w-full shadow-md shadow-primary/30"
        >
          관람 루트 선택하기
        </a>
      </div>
    </div>
  );
}

export default async function PlaceDetail({
  params: { placeId },
}: {
  params: { placeId: string };
}) {
  const place = await getPlace(placeId);
  if (place == null) {
    return <div>not found</div>;
  }
  return <PlaceInfo place={place} />;
}

async function getPlace(placeId: string): Promise<Place | null> {
  const res = await fetch(`${NEXT_PUBLIC_API_URL}/api/place`, {
    cache: "no-cache",
  });
  const places: Place[] = await res.json();
  // TODO: 별도 API 파기
  let place = null;
  for (const placeInstance of places) {
    if (placeInstance.id === Number(placeId)) {
      place = placeInstance;
    }
  }
  return place;
}
