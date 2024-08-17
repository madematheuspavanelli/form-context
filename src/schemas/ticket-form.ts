import { z } from "zod";

export const ticketFormSchema = z.object({
  title: z.string(),
});
