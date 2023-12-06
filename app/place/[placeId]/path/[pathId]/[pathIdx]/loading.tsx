import { ChevronUp, Headphones, Loader2 } from "lucide-react";

export default function Loading() {
  return (
    <div className="h-[100dvh] relative flex items-center bg-neutral/20">
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full flex items-center backdrop-blur-lg bg-secondary/50 p-4 pb-56">
        <div className="w-full h-64 bg-neutral/20 rounded-xl shadow-lg animate-pulse" />
      </div>
      <div className="absolute bottom-0 left-0 right-0 flex flex-col gap-4 p-4">
        <div className="flex justify-center translate-y-8">
          <button
            aria-label="닫기"
            className="btn btn-primary btn-circle shadow-md shadow-primary/30 btn-sm"
          >
            <ChevronUp size={18} />
          </button>
        </div>
        <div className="bg-white rounded-xl shadow pt-7 flex flex-col gap-4 overflow-hidden">
          <h1 className="text-center font-bold px-5 pb-5">도슨트 읽기</h1>
        </div>
        <div className="bg-white rounded-xl shadow p-5 pt-3 flex flex-col gap-2">
          <div className="flex gap-2 text-neutral items-center flex-wrap">
            <Headphones className="shrink-0" size={18} strokeWidth={2.5} />
            <div className="rounded-full bg-neutral/20 animate-pulse w-24 h-2" />
            <div className="flex gap-0.5 ml-auto translate-x-2.5">
              <button className="btn btn-ghost p-2 aspect-square shrink-0">
                <Loader2 className="animate-spin opacity-50" />
              </button>
            </div>
          </div>
          <progress
            max={100}
            value={0}
            className="progress progress-primary h-1"
          />
        </div>
      </div>
    </div>
  );
}
