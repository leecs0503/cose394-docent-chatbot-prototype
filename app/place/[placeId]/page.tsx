export default function Place({
  params: { placeId },
}: {
  params: { placeId: string };
}) {
  return (
    <div>
      /place/:placeId
      <button>관람 루트 선택하기</button>
    </div>
  );
}
