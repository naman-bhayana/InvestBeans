import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

const GlobalView = () => {
  return (
    <div className="container mx-auto px-6 py-10">
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-bold">Foreign Stocks Charts</h1>
        <Select defaultValue="dow">
          <SelectTrigger className="w-80">
            <SelectValue placeholder="Select Global Index" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="dow">Dow Jones</SelectItem>
            <SelectItem value="nasdaq">Nasdaq</SelectItem>
            <SelectItem value="sse">SSE Composite</SelectItem>
            <SelectItem value="nikkei">Nikkei 225</SelectItem>
          </SelectContent>
        </Select>
      </div>
      <div className="h-96 border border-border rounded-xl bg-background/50" />
    </div>
  );
};

export default GlobalView;


