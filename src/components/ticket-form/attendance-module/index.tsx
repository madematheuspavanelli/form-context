import { useFormContext, useWatch } from "react-hook-form";

import { FormControl, FormField, FormItem } from "@/components/ui/form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Separator } from "@/components/ui/separator";

import { Guidance } from "./guidance";
import { InternalAnalysis } from "./internal-analysis";
import { Project } from "./project";

export function AttendanceModule() {
  const { control } = useFormContext();
  const actionType = useWatch({ control, name: "actionType" });

  return (
    <div className="space-y-4">
      <FormField
        name="actionType"
        control={control}
        render={({ field }) => (
          <FormItem>
            <FormControl>
              <Select value={field.value} onValueChange={field.onChange}>
                <SelectTrigger>
                  <SelectValue placeholder="Módulo do Atendimento" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="guidance">Orientação</SelectItem>
                  <SelectItem value="internal_analysis">
                    Análise Interna
                  </SelectItem>
                  <SelectItem value="consultancy">Projeto</SelectItem>
                </SelectContent>
              </Select>
            </FormControl>
          </FormItem>
        )}
      />

      <Separator />

      {actionType === "guidance" && <Guidance />}
      {actionType === "internal_analysis" && <InternalAnalysis />}
      {actionType === "consultancy" && <Project />}
    </div>
  );
}
