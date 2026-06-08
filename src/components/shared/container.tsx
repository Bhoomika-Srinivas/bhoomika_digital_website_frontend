import { cn } from '@/lib/utils';

interface ContainerProps {
  children: React.ReactNode;
  className?: string;
  as?: React.ElementType;
}

/**
 * Centred content wrapper.
 * max-w-7xl, horizontal padding: px-6 lg:px-8
 */
export function Container({ children, className, as: Tag = 'div' }: ContainerProps) {
  return (
    <Tag className={cn('max-w-7xl mx-auto px-6 lg:px-8', className)}>
      {children}
    </Tag>
  );
}
