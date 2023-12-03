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
      <img className="aspect-square bg-stone-300" src={image} alt={imageAlt} />
      <div className="flex flex-col gap-3 p-6 pb-28 break-keep">
        <h1 className="font-bold text-2xl whitespace-pre-wrap">{title}</h1>
        <p className="text-stone-500">{description}</p>
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
      description: "여기에 설명 작성",
      image: "",
      imageAlt: "",
    },
    {
      title: "해당 MVP 서비스 소개",
      description: "여기에 설명 작성",
      image: "",
      imageAlt: "",
    },
    {
      title: "도손트 서비스 소개를 위한\n튜토리얼",
      description:
        "오디오 가이드가 자동으로 재생되니 꼭 이어폰을 착용하거나 음소거를 해제하고 가이드를 실행하시기 바랍니다.",
      image: "",
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
      <div className="fixed inset-0 z-10 font-[museum] bg-dark flex items-center justify-center flex-col text-white animate-fadeout">
        <div className="text-[15px] font-light">내 손 안의 도슨트,</div>
        <div className="font-bold text-[50px]">DoSonT</div>
      </div>
      <Step {...ONBOARDING_STEPS[currentStep]} onNextClick={onNextClick} />
    </>
  );
}
