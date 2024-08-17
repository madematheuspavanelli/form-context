import { Textarea } from "@/components/ui/textarea";

export function Guidance() {
  return (
    <fieldset className="space-y-4">
      <legend className="text-xl font-semibold">Orientação</legend>
      <Textarea placeholder="Descrição da orientação" className="resize-none" />
    </fieldset>
  );
}
