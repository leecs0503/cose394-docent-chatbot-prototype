interface PlaceInfoProps {
  id: string;
  name: string;
  description: string;
  image: string;
  imageAlt: string;
}

function PlaceInfo({ id, name, description, image, imageAlt }: PlaceInfoProps) {
  return (
    <div>
      <img className="aspect-video bg-stone-300" src={image} alt={imageAlt} />
      <div className="flex flex-col gap-3 p-6 pb-24 break-keep">
        <h1 className="font-bold text-2xl whitespace-pre-wrap">{name}</h1>
        <p className="text-stone-500">{description}</p>
      </div>
      <div className="absolute bottom-0 right-0 left-0 w-full p-6 pt-0">
        <a
          href={`/place/${id}/path`}
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
  return (
    <PlaceInfo
      id={placeId}
      name={placeId}
      description={placeId}
      image={""}
      imageAlt={""}
    />
  );
}
