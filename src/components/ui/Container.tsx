import { cn } from "@/lib/utils";

interface ContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
}

export const Container = ({ children, className, ...props }: ContainerProps) => {
  return (
    <div
      className={cn(
        "w-full max-w-md mx-auto min-h-screen bg-background px-4 py-6",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
};