"use client";

import { ArrowRight } from "lucide-react";
import { useRouter } from "next/navigation";
import { useState } from "react";

interface StepProps {
  title: string;
  description: string;
  image: string;
  imageAlt: string;
  onNextClick: () => void;
}

function Step({ title, description, image, imageAlt, onNextClick }: StepProps) {
  return (
    <div>
      <div className="flex justify-center">
        <img className="bg-stone-300 object-contain" src={image} alt={imageAlt} />
      </div>
      <div className="flex flex-col gap-3 p-6 pb-28 break-keep">
        <h1 className="font-bold text-2xl whitespace-pre-wrap">{title}</h1>
        {
          (!description.includes("\n")) ? <p className="text-stone-500">{description}</p>
          : description.split("\n").map((v) => <p className="text-stone-500" key={v}>{v}</p>)
        }
      </div>
      <button
        onClick={onNextClick}
        className="btn w-auto h-auto rounded-full aspect-square p-4 btn-primary shadow-md shadow-primary/30 absolute right-6 bottom-6"
      >
        <ArrowRight size={36} />
      </button>
    </div>
  );
}

export default function OnBoard() {
  const ONBOARDING_STEPS = [
    {
      title: "도손트는 누구에게나 ’손쉬운’\n관광 문화를 만듭니다.",
      description: "여러분들만의 개인 온라인 관광 가이드 '도손트'를 소개합니다.",
      image: "/images/onboard/1.png",
      imageAlt: "",
    },
    {
      title: "해당 서비스 소개",
      description: "여러분들은 '도손트'를 통해 관광지 탐색, 관광지 추천 루트와 가이드를 확인할 수 있습니다.",
      image: "/images/onboard/2.png",
      imageAlt: "",
    },
    {
      title: "도손트 서비스 소개를 위한\n튜토리얼",
      description:
        "1. 여러분들이 가고자하는 관광지를 탐색할 수 있습니다. 관광하고자 하는 관광지를 선택해보세요.\n" +
        "2. 여러분들이 원하는 관광 컨셉을 선택할 수 있습니다. 관광하고자 하는 추천루트를 선택해보세요.\n" +
        "3. 지도의 핀을 선택하시면 가이드를 들을 수 있습니다. 가이드 화면의 각종 기능들을 확인해보세요.",
      image: "/images/onboard/3.png",
      imageAlt: "",
    },
  ];

  const [currentStep, setCurrentStep] = useState(0);
  const router = useRouter();

  const onNextClick = () => {
    if (currentStep === ONBOARDING_STEPS.length - 1) {
      router.push("/place");
      return;
    }

    setCurrentStep((prev) => prev + 1);
  };

  return (
    <>
      <div className="fixed pointer-events-none inset-0 z-10 font-[museum] bg-dark flex items-center justify-center flex-col text-white animate-fadeout">
        <div className="text-[15px] font-light">내 손 안의 도슨트,</div>
        <div className="font-bold text-[50px]">DoSonT</div>
      </div>
      <Step {...ONBOARDING_STEPS[currentStep]} onNextClick={onNextClick} />
    </>
  );
}
