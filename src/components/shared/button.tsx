import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '@/lib/utils';

const buttonVariants = cva(
  // Base
  'inline-flex items-center justify-center gap-2 font-semibold transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#4338CA] focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 select-none',
  {
    variants: {
      variant: {
        primary:
          'bg-[#4338CA] text-white hover:bg-[#3730A3] shadow-sm hover:shadow-md active:scale-[0.98]',
        accent:
          'bg-[#F97316] text-white hover:bg-[#EA6C0B] shadow-sm hover:shadow-md active:scale-[0.98]',
        outline:
          'border-2 border-[#4338CA] text-[#4338CA] bg-transparent hover:bg-[#4338CA] hover:text-white active:scale-[0.98]',
        secondary:
          'bg-slate-100 text-slate-700 hover:bg-slate-200 active:scale-[0.98]',
        ghost:
          'text-slate-700 hover:bg-slate-100 active:scale-[0.98]',
        link:
          'text-[#4338CA] underline-offset-4 hover:underline p-0 h-auto',
        destructive:
          'bg-red-500 text-white hover:bg-red-600 shadow-sm active:scale-[0.98]',
      },
      size: {
        sm:   'h-9  px-4  text-sm  rounded-xl',
        md:   'h-11 px-6  text-base rounded-2xl',
        lg:   'h-13 px-8  text-lg  rounded-2xl',
        icon: 'h-10 w-10          rounded-xl',
      },
    },
    defaultVariants: {
      variant: 'primary',
      size: 'md',
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

export function Button({
  className,
  variant,
  size,
  children,
  asChild: _asChild,
  ...props
}: ButtonProps) {
  return (
    <button
      className={cn(buttonVariants({ variant, size }), className)}
      {...props}
    >
      {children}
    </button>
  );
}

export { buttonVariants };
