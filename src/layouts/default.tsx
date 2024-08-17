import { Toaster } from "@/components/ui/sonner";

type Props = {
  children: React.ReactNode;
};

export function DefaultLayout({ children }: Props) {
  return (
    <div className="bg-stone-50">
      <div className="container mx-auto h-full min-h-screen pt-8">
        {children}
      </div>
      <Toaster />
    </div>
  );
}
