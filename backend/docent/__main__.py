import openai
from .constants import OPENAI_API_KEY, GPT_MODEL_VERSION
from .prompt.the_starry_night import info


_SKIP_FIRST_QUERY = True


def query_to_chatgpt(
    query: str,
    messages: list[dict],
) -> str:
    print(f"질문: {query}")
    chunks = []
    answer = []
    for idx, chunk in enumerate(openai.ChatCompletion.create(
        model=GPT_MODEL_VERSION,
        messages=messages,
        stream=True,
    )):
        if idx == 0:
            print("답변을 시작하겠습니다.")
        content = chunk["choices"][0].get("delta", {}).get("content")
        chunks.append(chunk)
        if content is not None:
            answer.append(content)
            print(content, end="", flush=True)
    print("")
    return ''.join(answer)


def main():
    openai.api_key = OPENAI_API_KEY

    query1 = "별이 빛나는 밤 작품에 대해 설명해주세요!"

    messages1 = [
            {"role": "system", "content": "당신과 대화자는 서울 국립현대미술관에서 현재 빈센트 반고흐 작품 전시회에 있습니다."},
            {"role": "system", "content": "대화자는 관람객이며, 미술적 지식이 거의 없습니다."},
            {"role": "system", "content": "당신은 '도손트'라는 이름의 도슨트입니다."},
            {"role": "system", "content": "현재 '별이 빛나는 밤' 작품에 대해 설명을 진행합니다."},
            {"role": "system", "content": "stream에 해당되는 청크는 공백 단위로 나뉘어져야 합니다."},
            *info,
            {"role": "system", "content": "작품과 관련이 없는 질문은 '작품과 관련 없는 질문은 답변 드릴 수 없습니다. 죄송합니다. 작품과 관련된 다른 궁금하신 부분 있으실까요?' 라고 답변해야 합니다."},
            {"role": "system", "content": "당신은 확실하지 않은 정보에 대한 질문은 '해당 질문은 제 매니저 도슨트분께 여쭈어 본 후 최대한 빠른 시일내에 답변 드리도록 하겠습니다. 죄송합니다' 라고 답변해야 합니다."},
            {"role": "system", "content": "당신은 미술 전문가이며, '도손트'라는 이름의 도슨트입니다."},
            {"role": "user", "content": query1}
    ]


    if _SKIP_FIRST_QUERY:
        response1_text = """'별이 빛나는 밤'은 빈센트 반고흐의 대표작 중 하나입니다. 이 작품은 19세기 후반 인상주의의 대표적인 작품으로 꼽히며, 반고흐의 정신적 고통과 예술적 표현에 대해 많은 이야기를 담고 있습니다.

작품은 밤하늘에 떠 있는 별들과 그 주변을 표현하고 있습니다. 여러 가지 색채와 무드가 혼합된 획기적인 화폭과 묘사 기법을 통해 밤의 풍경의 심상적인 분위기를 잘 전달하고 있습니다. 복잡한 묘사와 특유의 화풍은 반고흐의 내면적인 상태와 깊은 연결이 있다고 알려져 있습니다.

고흐는 자신의 내면의 갈등과 고통을 작품을 통해 표현하였습니다. 그는 작품을 통해 별이나 자연의 아름다움을 통해 인간의 존재와 접점을 찾고자 했습니다. 그러나 동시에 그의 작품은 외로움과 고독, 광기 등의 표현으로 가득 차있습니다.

'별이 빛나는 밤'은 전 세계적으로 유명한 작품으로써, 뉴욕 현대미술관에서 소장되어 있습니다. 이 작품은 반고흐의 예술적 진취성과 감정적인 깊이를 보여주는 대표적인 작품 중 하나로 평가받고 있습니다."""
        print(f"질문: {query1}")
        print(f"답변: {response1_text}")
    else:
        response1_text = query_to_chatgpt(
            query=query1,
            messages=messages1,
        )
    Q_List = [
        {"role": "user", "content": query1},
        {"role": "assistant", "content": response1_text},
    ]
    while True:
        print("질문을 입력해주세요: ", end="")
        query = input()
        if query in ["", "\n", " "]:
            continue

        messages = [
                {"role": "system", "content": "당신과 대화자는 서울 국립현대미술관에서 현재 빈센트 반고흐 작품 전시회에 있습니다."},
                {"role": "system", "content": "대화자는 관람객이며, 미술적 지식이 거의 없습니다."},
                {"role": "system", "content": "당신은 도손트라는 이름의 도슨트입니다."},
                {"role": "system", "content": "현재 '별이 빛나는 밤' 작품에 대해 설명을 진행합니다."},
                *info,
                {"role": "system", "content": "작품과 관련이 없는 질문은 '작품과 관련 없는 질문은 답변 드릴 수 없습니다. 죄송합니다. 작품과 관련된 다른 궁금하신 부분 있으실까요?' 라고 답변해야 합니다."},
                {"role": "system", "content": "당신은 확실하지 않은 정보에 대한 질문은 '해당 질문은 제 매니저 도슨트분께 여쭈어 본 후 최대한 빠른 시일내에 답변 드리도록 하겠습니다. 죄송합니다' 라고 답변해야 합니다."},
                *Q_List,
                {"role": "user", "content": query},
        ]
        response_text = query_to_chatgpt(
            query=query,
            messages=messages,
        )

        Q_List.append({"role": "user", "content": query})
        Q_List.append({"role": "assistant", "content": response_text})


if __name__ == "__main__":
    main()
