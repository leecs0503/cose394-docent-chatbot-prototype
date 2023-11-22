export default function Place({
  params: { placeId },
}: {
  params: { placeId: string };
}) {
  return (
    <div>
      /place/:placeId/path
      <button>역사가 타입~</button>
      <button>난 바빠~</button>
    </div>
  );
}
