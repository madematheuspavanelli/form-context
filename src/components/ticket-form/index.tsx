import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import z from "zod";

import { Form } from "@/components/ui/form";
import { Separator } from "@/components/ui/separator";
import { ticketFormSchema } from "@/schemas/ticket-form";

import { Button } from "../ui/button";
import { AttendanceModule } from "./attendance-module";
import { GeneralInfo } from "./general-info";
import { SupplierType } from "./supplier-type";

export function TicketForm() {
  const form = useForm<z.infer<typeof ticketFormSchema>>({
    resolver: zodResolver(ticketFormSchema),
  });

  function onSubmit(values: z.infer<typeof ticketFormSchema>) {
    console.log(values);
  }

  return (
    <section className="mx-auto h-full max-h-[90vh] max-w-xl space-y-4 overflow-scroll rounded-lg bg-white p-4 shadow-sm">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)}>
          <GeneralInfo />
          <Separator />
          <SupplierType />
          <AttendanceModule />
          <Button className="ml-auto mt-4 block">Enviar</Button>
        </form>
      </Form>
    </section>
  );
}
