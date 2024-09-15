import { cn } from "@/lib/utils";

type Props = {
  children: React.ReactNode;
  className: string | undefined;
};

const Container = ({ children, className }: Props) => {
  return (
    <div className={cn("w-full px-4 md:px-8 mx-auto max-w-7xl", className)}>
      {children}
    </div>
  );
};

export default Container;
