export default function Place({ params: { id } }: { params: { id: string } }) {
  return (
    <div>
      /place/:id
      <button>관람 루트 선택하기</button>
    </div>
  );
}
