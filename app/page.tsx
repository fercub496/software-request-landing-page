export default function HomePage() {
  return (
    <main className="bg-[color:var(--lucuma-light)] min-h-screen">
      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center text-center py-20 px-4 bg-[color:var(--lucuma)]">
        <h1 className="text-5xl font-bold text-white mb-6">Software de Nutrición</h1>
        <p className="text-lg text-white max-w-2xl">
          Descubre la nueva forma de crear planes nutricionales, analizar datos y mejorar la salud de tus clientes.
        </p>
        <img src="images/hero-image.jpg" alt="Hero" className="mt-10 w-96 rounded-xl shadow-lg" />
      </section>

      {/* Funcionalidades */}
      <section className="py-20 px-8 bg-white">
        <h2 className="text-3xl font-bold text-[color:var(--lucuma)] text-center mb-12">Funcionalidades</h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="p-6 bg-[color:var(--lucuma-light)] rounded-xl shadow">
            <h3 className="text-xl font-semibold mb-3">Planes personalizados</h3>
            <p>Crea dietas ajustadas a cada paciente con base en bioimpedancia y metas.</p>
          </div>
          <div className="p-6 bg-[color:var(--lucuma-light)] rounded-xl shadow">
            <h3 className="text-xl font-semibold mb-3">Base de alimentos</h3>
            <p>Accede a más de 300 alimentos con valores nutricionales actualizados.</p>
          </div>
          <div className="p-6 bg-[color:var(--lucuma-light)] rounded-xl shadow">
            <h3 className="text-xl font-semibold mb-3">Dashboard interactivo</h3>
            <p>Visualiza progreso y métricas de tus clientes en tiempo real.</p>
          </div>
        </div>
      </section>

      {/* Testimonios */}
      <section className="py-20 px-8 bg-[color:var(--lucuma-dark)] text-white">
        <h2 className="text-3xl font-bold text-center mb-12">Testimonios</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="p-6 bg-[color:var(--lucuma)] rounded-xl shadow">
            <p>Este software ha transformado la forma en que atiendo a mis pacientes. Muy recomendado.</p>
            <span className="block mt-4 font-semibold">— Nutricionista Ana</span>
          </div>
          <div className="p-6 bg-[color:var(--lucuma)] rounded-xl shadow">
            <p>En mi gimnasio ahora tenemos planes más claros y organizados para nuestros clientes.</p>
            <span className="block mt-4 font-semibold">— Coach Javier</span>
          </div>
        </div>
      </section>

      {/* Botón al Formulario */}
      <section className="text-center py-16">
        <a
          href="/form"
          className="bg-[color:var(--lucuma-dark)] text-white px-8 py-4 rounded-xl shadow-lg hover:bg-[color:var(--lucuma)]"
        >
          Ir al Formulario
        </a>
      </section>
    </main>
  )
}