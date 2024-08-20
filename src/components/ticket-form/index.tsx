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

const defaultValues: Partial<z.infer<typeof ticketFormSchema>> = {
  actionType: "consultancy",
  classificationId: "",
  description: "description",
  protocol: "protocol",
  reason_id: "prodes",
  requesterId: "requesterId",
  sectorId: "1",
  statusId: "statusId",
  statusNote: "statusNote",
  supplierId: "supplierId",
  title: "title",
  tenantId: "tenantId",
  userId: "1",
  supplierDetails: {
    code: "code",
    cpfCnpj: "cpfCnpj",
    farmCode: "farmCode",
    name: "name",
    type: "Indireto",
  },
  flows: {
    guidance: {
      description: "guidance description",
    },
    internalAnalysis: {
      description: "internal analysis description",
      status: "Liberada",
    },
    consultancy: {
      companyDetails: {
        address: "address",
        contactName: "contactName",
        cpfCnpj: "cpfCnpj",
        email: "email@mail.com",
        evRegistered: "evRegistered",
        focalPoint: "focalPoint",
        name: "name",
        projurisCode: "projurisCode",
      },
      orgao: {
        name: "name",
      },
      regularization: {
        type: "type",
      },
      consultancyDetails: {
        comercialProposalAttachment: "QQ==",
        evValue: 1000,
        firstInstallment: 800,
        firstInstallmentPaid: true,
        paymentType: "parcial",
        secondInstallment: 200,
        projurisAttachment: "QQ==",
        regularizedArea: "",
        requesterValue: 1000,
        status: "Bloqueado",
        totalValue: 2000,
        type: "Laudo",
        value: 4000,
        secondInstallmentPaid: false,
      },
    },
  },
};

export function TicketForm() {
  const form = useForm<z.infer<typeof ticketFormSchema>>({
    resolver: zodResolver(ticketFormSchema),
    defaultValues,
  });

  function onSubmit(values: z.infer<typeof ticketFormSchema>) {
    console.log(values);
  }

  return (
    <section className="mx-auto h-full max-h-[90vh] max-w-xl space-y-4 overflow-scroll rounded-lg bg-white p-4 shadow-sm">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
          <GeneralInfo />
          <Separator />
          <SupplierType />
          <AttendanceModule />
          <Button className="ml-auto mt-4 block">Enviar</Button>
        </form>
      </Form>
      <pre>{JSON.stringify(form.formState.errors, null, 2)}</pre>
    </section>
  );
}
