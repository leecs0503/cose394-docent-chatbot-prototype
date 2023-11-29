export default function PathDetail({
  params: { pathId },
}: {
  params: { pathId: string };
}) {
  // TODO: 루트 정보 받아오기
  const ROUTE = [
    "2층 역사민족전시실 > 고미술전시실",
    "고미술전시실 출구 오른쪽 에스컬레이터를 타시면 3층 현대미술관이 나옵니다.",
    "3층 현대미술전시실",
  ];

  const BACKGROUND_COLOR = "#EEEEEE";

  const router = useRouter();

  const onBackClick = () => {
    router.back();
  };

  return (
    <div>
      <div className="flex flex-col h-[100dvh]">
        <TransformWrapper>
          <TransformComponent wrapperClass={`bg-[${BACKGROUND_COLOR}]`}>
            <img src="/maps/test_map.svg" alt="테스트 지도" />
          </TransformComponent>
        </TransformWrapper>
        <BottomSheet route={ROUTE} backgroundColor={BACKGROUND_COLOR} />
      </div>
      <button
        onClick={onBackClick}
        className="btn w-auto h-auto rounded-full aspect-square p-2 btn-primary shadow-md shadow-primary/30 absolute top-6 left-6"
      >
        <ArrowLeft />
      </button>
    </div>
  );
}
