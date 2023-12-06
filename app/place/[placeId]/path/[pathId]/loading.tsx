import { ArrowLeft } from "lucide-react";

export default function Loading() {
  return (
    <div>
      <div className={`h-[100dvh] bg-neutral/10`}>
        <div className="bg-white rounded-t-xl shadow p-4 flex flex-col gap-4 absolute bottom-0 left-0 right-0">
          <div className="flex flex-col gap-4 p-2">
            <h1 className="font-bold text-lg h-4 w-32 bg-neutral/20 animate-pulse rounded-full" />
            <ol className="flex flex-col gap-2 relative break-keep">
              {[1, 2, 3].map((step, index) => (
                <li
                  key={index}
                  className="first-of-type:pt-1 last-of-type:pb-1"
                >
                  <div className="flex gap-2 items-center">
                    <div
                      className={[
                        "w-2 h-2 rounded-full shrink-0 z-10 ring-4 ring-white bg-neutral-content",
                      ].join(" ")}
                    ></div>
                    <div className="bg-neutral/20 h-2 w-48 my-2 rounded-full" />
                  </div>
                </li>
              ))}
              <div className="absolute h-full w-0.5 bg-neutral-content/70 rounded-full left-[0.1875rem]"></div>
            </ol>
          </div>
          <button className="btn btn-primary" disabled>
            관람 시작하기
          </button>
        </div>
      </div>
      <button className="btn w-auto h-auto rounded-full aspect-square p-2 btn-primary shadow-md shadow-primary/30 absolute top-6 left-6">
        <ArrowLeft />
      </button>
    </div>
  );
}
