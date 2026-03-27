import Link from 'next/link';

export default function Home() {
  return (
    <main className="min-h-screen bg-hero">
      <div className="container-shell flex min-h-screen flex-col items-center justify-center gap-5 text-center">
        <div className="card max-w-2xl p-8">
          <h1 className="text-3xl font-bold md:text-5xl">Forja Fit Funnel</h1>
          <p className="mt-4 text-muted">
            Projeto inicial com anúncio, quiz, resultado, oferta, checkout bridge e base de tracking.
          </p>
          <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:justify-center">
            <Link href="/anuncio-preview" className="cta-primary">Ver funil</Link>
            <Link href="/quiz" className="cta-secondary">Ir direto ao quiz</Link>
          </div>
        </div>
      </div>
    </main>
  );
}
