import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export function Direct() {
  return (
    <div className="flex gap-4">
      <Input placeholder="Código da Fazenda" />
      <Button>Encontrar</Button>
    </div>
  );
}
