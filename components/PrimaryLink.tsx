import Link from 'next/link';

export function PrimaryLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <Link href={href} className="cta-primary w-full sm:w-auto">
      {children}
    </Link>
  );
}
