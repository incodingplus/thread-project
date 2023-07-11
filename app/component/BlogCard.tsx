import { Badge } from "flowbite-react";
import type { FC, ReactNode } from "react";
import { dateDiff } from "~/lib/date";

export interface iBlogContainer {
  children: ReactNode[];
}

export const BlogContainer: FC<iBlogContainer> = ({ children }) => {
  const childrenArr = children.map((v, i) => {
    return [<div className="contents" key={2 * i}>{v}</div>, <div key={2 * i + 1} className={`h-px w-full bg-gray-200`}></div>]
  }).flat();

  return <div className="max-w-[1000px] w-full m-auto flex flex-col">
    {childrenArr.slice(0, -1)}
  </div>
}

export interface iBlogCard {
  title: string;
  tags: string[];
  description: string;
  publish: number;
}

export const BlogCard: FC<iBlogCard> = ({ title, tags, description, publish }) => {
  const diff = dateDiff(new Date(publish), new Date());
  const find = diff.find(v => v[1] > 0) ?? ['방금', 0];
  return <div className="flex flex-col items-start gap-4 my-8">
    <div className="mb-5 flex justify-between w-full">
      <div className="flex gap-1">
        {tags.map((v, i) => <Badge key={i} color="info">{v}</Badge>)}
      </div>
      <div>
        {(find[1] > 0) && find[1]}{find[0]} 전
      </div>
    </div>
    <p className="text-2xl font-bold leading-tight text-gray-900">
      {title}
    </p>
    <p className="text-base font-normal leading-normal text-gray-500">
      {description}
    </p>
  </div>
}