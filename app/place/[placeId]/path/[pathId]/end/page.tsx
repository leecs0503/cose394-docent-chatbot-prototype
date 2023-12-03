"use client";

import { useState } from "react";
import { Rating } from "react-simple-star-rating";

import { GOOGLE_FORM_URL } from "@lib/constants";

export default function End({
  params: { placeId, pathId, artworkIndex },
}: {
  params: { placeId: string; pathId: string; artworkIndex: string };
}) {
  const [rating, setRating] = useState<number | null>(null);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleRating = (rate: number) => {
    if ([1, 2, 3, 4, 5].includes(rate) === false) {
      return;
    }

    setRating(rate);
  };

  const handleSubmit = () => {
    if (rating === null) {
      return;
    }

    // TODO: 서버로 rating 보내기

    setIsSubmitted(true);
  };

  return (
    <div className="h-[100dvh] bg-primary flex flex-col gap-12 justify-center items-center">
      <div className="flex flex-col gap-2">
        <h1 className="text-center text-white font-bold text-2xl">
          축하합니다!
        </h1>
        <p className="text-center text-white/80 font-semibold text-lg">
          관람을 모두 완료하셨군요!
        </p>
      </div>
      <img src="/images/medal.svg" alt="완료 메달" />
      <div className="flex flex-col gap-2 items-center">
        <div className="text-white font-bold text-center">
          저희 서비스는 어떠셨나요?
        </div>
        <Rating
          onClick={handleRating}
          SVGclassName="inline-block"
          transition
          readonly={isSubmitted}
        />
        <div className="flex flex-col gap-2 mt-2">
          {rating && (
            <button
              onClick={handleSubmit}
              disabled={isSubmitted}
              className={[
                "btn btn-secondary btn-wide",
                isSubmitted
                  ? "disabled:bg-opacity-30 disabled:bg-secondary disabled:text-secondary-content"
                  : "",
              ].join(" ")}
            >
              {isSubmitted ? "제출되었습니다. 감사합니다." : `${rating}점 주기`}
            </button>
          )}
          {/* TODO: Google 설문 href 걸기 */}
          {isSubmitted && (
            <a
              href={GOOGLE_FORM_URL}
              target="_blank"
              className="btn btn-secondary btn-wide"
            >
              후기 참여하고 상품 받기
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
