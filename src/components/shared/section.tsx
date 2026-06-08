import { cn } from '@/lib/utils';

type SectionBackground = 'white' | 'muted' | 'primary' | 'dark';

interface SectionProps {
  children: React.ReactNode;
  className?: string;
  background?: SectionBackground;
  id?: string;
}

const bgMap: Record<SectionBackground, string> = {
  white:   'bg-white',
  muted:   'bg-slate-50',
  primary: 'bg-[#4338CA] text-white',
  dark:    'bg-[#0F172A] text-white',
};

/**
 * Page section wrapper.
 * Applies consistent vertical padding (py-16 lg:py-24) and background.
 */
export function Section({
  children,
  className,
  background = 'white',
  id,
}: SectionProps) {
  return (
    <section
      id={id}
      className={cn('py-16 lg:py-24', bgMap[background], className)}
    >
      {children}
    </section>
  );
}
