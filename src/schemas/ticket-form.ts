import { z } from "zod";

export const ticketFormSchema = z.object({
  userId: z.string(),
  title: z.string(),
  description: z.string(),
  sectorId: z.string({ required_error: "Campo obrigatório" }),
  supplierDetails: z.object({
    type: z.enum(["Direto", "Indireto"], {
      required_error: "Campo obrigatório",
      invalid_type_error: "Tipo inválido",
    }),
    code: z.string(),
    name: z.string().optional(),
    cpfCnpj: z.string().optional(),
    farmCode: z.string().optional(),
  }),
  reason_id: z.string({ required_error: "Campo obrigatório" }),
  actionType: z.enum(["guidance", "internal_analysis", "consultancy"], {
    required_error: "Campo obrigatório",
    invalid_type_error: "Tipo inválido",
  }),
  tenantId: z.string(),
  statusId: z.string(),
  requesterId: z.string(),
  supplierId: z.string(),
  classificationId: z.string(),
  protocol: z.string(),
  statusNote: z.string(),
  flows: z
    .object({
      guidance: z
        .object({
          description: z.string().optional(),
        })
        .optional(),
      internalAnalysis: z
        .object({
          description: z.string().optional(),
          status: z.enum(["Liberada", "Pausado", "Finalizado"]).optional(),
        })
        .optional(),
      consultancy: z
        .object({
          companyDetails: z.object({
            cpfCnpj: z.string(),
            name: z.string(),
            address: z.string(),
            email: z.string().email(),
            projurisCode: z.string(),
            contactName: z.string(),
            focalPoint: z.string(),
            evRegistered: z.string(),
          }),
          regularization: z.object({
            type: z.string(),
          }),
          orgao: z.object({
            name: z.string(),
          }),
          consultancyDetails: z.object({
            type: z.enum(["Laudo", "Regularização"]),
            status: z.enum(["Bloqueado", "Em andamento", "Liberado"]),
            comercialProposalAttachment: z.string().base64(),
            projurisAttachment: z.string().base64(),
            regularizedArea: z.string(),
            paymentType: z.enum(["integral", "parcial"]),
            totalValue: z.number(),
            evValue: z.number(),
            requesterValue: z.number(),
            value: z.number(),
            firstInstallment: z.number(),
            secondInstallment: z.number().optional(),
            firstInstallmentPaid: z.boolean(),
            secondInstallmentPaid: z.boolean().optional(),
          }),
        })
        .optional(),
    })
    .optional(),
});
