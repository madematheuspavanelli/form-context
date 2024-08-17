import { Button } from "@/components/ui/button";

type Props = {
  filename: string;
  onRemove: () => void;
};

export function Preview({ filename, onRemove }: Props) {
  return (
    <div className="relative flex aspect-square size-20 items-end justify-between rounded border border-stone-400 bg-stone-200 p-2">
      <p className="max-w-16 truncate text-xs">{filename}</p>
      <Button
        onClick={onRemove}
        className="absolute right-0 top-0 h-8 p-3"
        variant="ghost"
      >
        &times;
      </Button>
    </div>
  );
}
