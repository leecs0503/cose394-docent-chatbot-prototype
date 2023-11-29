import { Place } from "../../../lib/interfaces";

interface PlaceInfoProps {
  place: Place;
}

function PlaceInfo({ place }: PlaceInfoProps) {
  return (
    <div>
      {/* FIXME: image src (public에 업로드하고 id로 받아오면 어떨까요) */}
      <img
        className="aspect-video bg-stone-300"
        src={``}
        alt={`${place.name} 전경`}
      />
      <div className="flex flex-col gap-3 p-6 pb-24 break-keep">
        <h1 className="font-bold text-2xl whitespace-pre-wrap">{place.name}</h1>
        <p className="text-stone-500">{place.description}</p>
      </div>
      <div className="absolute bottom-0 right-0 left-0 w-full p-6 pt-0">
        <a
          href={`/place/${place.id}/path`}
          className="btn btn-primary w-full shadow-md shadow-primary/30"
        >
          관람 루트 선택하기
        </a>
      </div>
    </div>
  );
}

export default function PlaceDetail({
  params: { placeId },
}: {
  params: { placeId: string };
}) {
  const PLACE: Place = {
    id: parseInt(placeId),
    name: "고려대학교 박물관",
    description:
      "고려대학교 박물관은 고려대학교의 역사를 보여주는 박물관입니다.",
  };

  return <PlaceInfo place={PLACE} />;
}
