import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '@/lib/utils';

const cardVariants = cva(
  'bg-white overflow-hidden transition-all duration-200',
  {
    variants: {
      variant: {
        default:  'border border-slate-100 shadow-sm',
        bordered: 'border-2 border-slate-200',
        elevated: 'shadow-md hover:shadow-xl',
        ghost:    'bg-transparent',
      },
      radius: {
        sm: 'rounded-xl',     // 12px
        md: 'rounded-2xl',    // 16px
        lg: 'rounded-3xl',    // 24px
      },
      padding: {
        none: '',
        sm:   'p-4',
        md:   'p-6',
        lg:   'p-8',
      },
      hover: {
        true:  'hover:-translate-y-0.5 hover:border-indigo-200 cursor-pointer',
        false: '',
      },
    },
    defaultVariants: {
      variant: 'default',
      radius:  'md',
      padding: 'none',
      hover:   false,
    },
  }
);

export interface CardProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof cardVariants> {}

export function Card({ className, variant, radius, padding, hover, ...props }: CardProps) {
  return (
    <div
      className={cn(cardVariants({ variant, radius, padding, hover }), className)}
      {...props}
    />
  );
}

// Sub-components for structured card layouts
export function CardHeader({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return <div className={cn('px-6 pt-6 pb-0', className)} {...props} />;
}

export function CardBody({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return <div className={cn('p-6', className)} {...props} />;
}

export function CardFooter({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn('px-6 pb-6 pt-0 flex items-center', className)}
      {...props}
    />
  );
}

export function CardTitle({ className, ...props }: React.HTMLAttributes<HTMLHeadingElement>) {
  return (
    <h3
      className={cn('text-xl font-semibold text-slate-900 leading-tight', className)}
      {...props}
    />
  );
}

export function CardDescription({ className, ...props }: React.HTMLAttributes<HTMLParagraphElement>) {
  return (
    <p className={cn('text-sm text-slate-500 leading-relaxed', className)} {...props} />
  );
}
