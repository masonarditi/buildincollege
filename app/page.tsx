import { Component as ResourceTable } from "@/components/table-with-images";

export default function Home() {
  return (
    <div className="p-8 max-w-6xl mx-auto">
      <h1 className="text-3xl font-bold mb-8">College Builder Resources</h1>
      <ResourceTable />
    </div>
  );
}
