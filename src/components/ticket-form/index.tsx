import { Separator } from "@/components/ui/separator";

import { AttendanceModule } from "./attendance-module";
import { GeneralInfo } from "./general-info";
import { SupplierType } from "./supplier-type";

export function TicketForm() {
  return (
    <div className="mx-auto h-full max-h-[90vh] max-w-xl space-y-4 overflow-scroll rounded-lg bg-white p-4 shadow-sm">
      <GeneralInfo />
      <Separator />
      <SupplierType />
      <AttendanceModule />
    </div>
  );
}
