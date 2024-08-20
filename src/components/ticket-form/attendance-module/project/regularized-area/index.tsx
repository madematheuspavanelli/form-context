import { useEffect } from "react";
import { Controller, useFormContext, useWatch } from "react-hook-form";

import {
  FormControl,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";

export function RegularizedArea() {
  const { control, setValue } = useFormContext();
  const consultancyDetails = useWatch({ control, name: "consultancyDetails" });

  useEffect(() => {
    const totalArea =
      Number(consultancyDetails?.app) +
      Number(consultancyDetails?.rl) +
      Number(consultancyDetails?.others);

    if (!totalArea) return;

    if (consultancyDetails?.totalArea !== totalArea) {
      setValue("consultancyDetails.totalArea", totalArea);
    }
  }, [consultancyDetails, setValue]);

  return (
    <fieldset className="space-y-4">
      <legend className="text-xl font-semibold">Área Regularizada</legend>
      <div className="grid grid-cols-2 gap-4">
        <Controller
          name="consultancyDetails.app"
          control={control}
          render={({ field }) => (
            <FormItem>
              <FormLabel>APP (ha)</FormLabel>
              <FormControl>
                <Input type="number" min={0} {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Controller
          name="consultancyDetails.rl"
          control={control}
          render={({ field }) => (
            <FormItem>
              <FormLabel>RL (ha)</FormLabel>
              <FormControl>
                <Input type="number" min={0} {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Controller
          name="consultancyDetails.others"
          control={control}
          render={({ field }) => (
            <FormItem>
              <FormLabel>Outros</FormLabel>
              <FormControl>
                <Input type="number" min={0} {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Controller
          name="consultancyDetails.totalArea"
          control={control}
          render={({ field }) => (
            <FormItem>
              <FormLabel>Área Total (ha)</FormLabel>
              <FormControl>
                <Input type="number" readOnly disabled {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
      </div>
    </fieldset>
  );
}
