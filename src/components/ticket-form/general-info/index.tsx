import { useFormContext } from "react-hook-form";

import {
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";

export function GeneralInfo() {
  const { control } = useFormContext();

  return (
    <fieldset className="space-y-4">
      <FormField
        name="userId"
        control={control}
        render={({ field }) => (
          <FormItem>
            <FormControl>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <SelectTrigger>
                  <SelectValue placeholder="Selecione a unidade" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="1">Matheus</SelectItem>
                  <SelectItem value="2">Iara</SelectItem>
                </SelectContent>
              </Select>
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
      <FormField
        name="title"
        control={control}
        render={({ field }) => (
          <FormItem>
            <FormControl>
              <Input placeholder="Título do atendimento" required {...field} />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
      <FormField
        name="description"
        control={control}
        render={({ field }) => (
          <FormItem>
            <FormControl>
              <Textarea
                placeholder="Descrição"
                className="resize-none"
                required
                {...field}
              />
            </FormControl>
          </FormItem>
        )}
      />
      <FormField
        name="sectorId"
        control={control}
        render={({ field }) => (
          <FormItem>
            <FormControl>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <SelectTrigger>
                  <SelectValue placeholder="Selecione a unidade" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="1">Unidade 1</SelectItem>
                  <SelectItem value="2">Unidade 2</SelectItem>
                  <SelectItem value="3">Unidade 3</SelectItem>
                </SelectContent>
              </Select>
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
    </fieldset>
  );
}
