import {
  getSubscriberInviteClicks,
  getSubscriberInviteCount,
  getSubscriberRankingPosition,
} from "@/http/api";
import { BadgeCheck, MedalIcon, MousePointerClick } from "lucide-react";

interface StatsProps {
  subscriberId: string;
}

export async function Stats({ subscriberId }: StatsProps) {
  const { count: acessCount } = await getSubscriberInviteClicks(subscriberId);
  const { count: inviteCount } = await getSubscriberInviteCount(subscriberId);
  const { position: rankingPosition } = await getSubscriberRankingPosition(
    subscriberId
  );

  return (
    <div className="grid md:grid-cols-3 gap-3">
      <div className="relative rounded-xl bg-gray-700 border border-gray-600 px-4 py-7 flex flex-col items-center justify-center gap-1">
        <span className="font-heading text-2xl font-semibold text-gray-200 leading-none">
          {acessCount}
        </span>
        <span className="text-sm text-gray-300 leading-none text-center">
          Acessos ao link
        </span>
        <MousePointerClick className="size-5 text-purple absolute top-3 left-3" />
      </div>
      <div className="relative rounded-xl bg-gray-700 border border-gray-600 px-4 py-7 flex flex-col items-center justify-center gap-1">
        <span className="font-heading text-2xl font-semibold text-gray-200 leading-none">
          {inviteCount}
        </span>
        <span className="text-sm text-gray-300 leading-none text-center">
          Inscrições feitas
        </span>
        <BadgeCheck className="size-5 text-purple absolute top-3 left-3" />
      </div>
      <div className="relative rounded-xl bg-gray-700 border border-gray-600 px-4 py-7 flex flex-col items-center justify-center gap-1">
        <span className="font-heading text-2xl font-semibold text-gray-200 leading-none">
          {rankingPosition ? `${rankingPosition}°` : "-"}
        </span>
        <span className="text-sm text-gray-300 leading-none text-center">
          Posição no ranking
        </span>
        <MedalIcon className="size-5 text-purple absolute top-3 left-3" />
      </div>
    </div>
  );
}
