import { CoinProps } from "@/types";
import Image from "next/image";

export default function Coin({
  symbol,
  name,
  img,
  changePercentage,
}: CoinProps) {
  const isPositiveChange = parseFloat(changePercentage) >= 0;

  return (
    <div className="flex my-2 justify-between text-center py-1">
      <div className="flex pt-1">
        <div>
          <Image
            src={img ?? ""}
            width={24}
            height={24}
            className="rounded-full"
            alt={`${name} icon`}
          />
        </div>
        <div className="text-[#0F1629] ml-1">
          {name} ({symbol})
        </div>
      </div>
      <div
        className={`flex items-center justify-center rounded-lg p-2 h-8 ml-10 ${
          isPositiveChange ? "bg-green-300/20" : "bg-red-300/20"
        }`}
      >
        <svg
          viewBox="0 0 100 100"
          className={`w-4 fill-current ${
            isPositiveChange ? "text-green-600" : "text-red-600"
          }`}
          style={{ transform: isPositiveChange ? "" : "rotate(180deg)" }}
        >
          <polygon points="0,100 50,0 100,100" />
        </svg>
        <span
          className={`ml-2 text-sm font-bold ${
            isPositiveChange ? "text-green-600" : "text-red-600"
          }`}
        >
          {changePercentage}%
        </span>
      </div>
    </div>
  );
}
