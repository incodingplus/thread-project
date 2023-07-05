import type { V2_MetaFunction } from "@remix-run/node";
import { Button, Tooltip } from "flowbite-react";

export const meta: V2_MetaFunction = () => {
  return [
    { title: "New Remix App" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export default function Index() {
  return (
    <div>
      <h1>Welcome to Remix</h1>
      <Tooltip content="Flowbite is awesome">
        <Button>
          Hover to find out
        </Button>
      </Tooltip>
    </div>
  );
}
