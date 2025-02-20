import cooper from "../../assets/medal-cooper.svg";
import gold from "../../assets/medal-gold.svg";
import silver from "../../assets/medal-silver.svg";
import Image from "next/image";

export function Ranking() {
  return (
    <div className="w-full max-w-[440px] space-y-5">
      <h2 className="text-gray-200 text-xl font-heading font-semibold leading-none">
        Ranking de indicações
      </h2>
      <div className="space-y-4">
        <div className="relative roundex-xl bg-gray-700 border border-gray-600 p-6 flex flex-col justify-center gap-3 rounded-xl">
          <span className="text-sm text-gray-300 leading-none">
            <span className="font-semibold"> 1°</span> | Sua mae pelada
          </span>
          <span className="font-heading text-2xl font-semibold text-gray-200 leading-none">
            300
          </span>
          <Image className="absolute top-0 right-8" src={gold} alt="" />
        </div>
      </div>
      <div className="space-y-4">
        <div className="relative roundex-xl bg-gray-700 border border-gray-600 p-6 flex flex-col justify-center gap-3 rounded-xl">
          <span className="text-sm text-gray-300 leading-none">
            <span className="font-semibold"> 2°</span> | Gustavo Mazzaro
          </span>
          <span className="font-heading text-2xl font-semibold text-gray-200 leading-none">
            200
          </span>
          <Image className="absolute top-0 right-8" src={silver} alt="" />
        </div>
      </div>
      <div className="space-y-4">
        <div className="relative roundex-xl bg-gray-700 border border-gray-600 p-6 flex flex-col justify-center gap-3 rounded-xl">
          <span className="text-sm text-gray-300 leading-none">
            <span className="font-semibold"> 3°</span> | Gustavo Mazzaro
          </span>
          <span className="font-heading text-2xl font-semibold text-gray-200 leading-none">
            100
          </span>
          <Image className="absolute top-0 right-8" src={cooper} alt="" />
        </div>
      </div>
    </div>
  );
}
