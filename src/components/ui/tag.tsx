import { cva, type VariantProps } from "class-variance-authority";

const tagVariants = cva(
  "inline-flex items-center rounded-full bg-accent/10 border border-accent/20",
  {
    variants: {
      size: {
        default: "px-3 py-1 text-xs font-medium",
        lg: "px-4 py-2 text-sm font-base",
      },
    },
    defaultVariants: {
      size: "default",
    },
  }
);

interface TagProps extends VariantProps<typeof tagVariants> {
  children: React.ReactNode;
  className?: string;
}

export function Tag({ children, size, className = "" }: TagProps) {
  return (
    <div className={tagVariants({ size, className })}>
      <span className="text-accent">{children}</span>
    </div>
  );
}
