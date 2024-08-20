import { useEffect } from "react";
import { useFormContext } from "react-hook-form";

import { FormControl, FormField, FormItem } from "@/components/ui/form";
import { Textarea } from "@/components/ui/textarea";

export function Guidance() {
  const { control, resetField } = useFormContext();

  useEffect(() => {
    return () => {
      resetField("flows.guidance.description");
    };
  }, [resetField]);

  return (
    <fieldset className="space-y-4">
      <legend className="text-xl font-semibold">Orientação</legend>
      <FormField
        name="flows.guidance.description"
        control={control}
        render={({ field }) => (
          <FormItem>
            <FormControl>
              <Textarea
                placeholder="Descrição da orientação"
                className="resize-none"
                required
                {...field}
              />
            </FormControl>
          </FormItem>
        )}
      />
    </fieldset>
  );
}
