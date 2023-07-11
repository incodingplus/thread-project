import { json, type V2_MetaFunction } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import { BlogCard, BlogContainer, type iBlogCard } from "~/component/BlogCard";

export const meta: V2_MetaFunction = () => {
  return [
    { title: "New Remix App" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export const loader = async () => {
  const res = await fetch('http://localhost:3000/sample/threads.json');
  const data = await res.json();
  return json<iBlogCard[]>(data);  
}

export default function Index() {
  const data = useLoaderData<typeof loader>();
  return (
    <BlogContainer>
      {data.map((v, i) => <BlogCard key={i} { ...v }></BlogCard>)}
    </BlogContainer>
  );
}
