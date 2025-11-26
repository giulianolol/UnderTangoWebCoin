import Reveal from "./reveal";

export default function QueHacemos() {
  return (

    <Reveal direction="left" intensity={90} parallax>
    <section className="py-24 bg-black text-gray-200 px-6 md:px-12" id="servicios">
      <h2 className="text-4xl font-display font-bold text-utc-red mb-8">Qué hacemos</h2>

      <div className="grid md:grid-cols-3 gap-12">
        <div className="space-y-4">
          <h3 className="text-2xl font-semibold text-red-500">Shows de Tango</h3>
          <p>
            Ofrecemos espectáculos inolvidables en la Triple Frontera (Argentina, Brasil y Paraguay), mezclando tradición, danza, música en vivo y la energía del tango. Perfecto para turistas, eventos privados o colaboraciones con hoteles y cruceros.
          </p>
        </div>

        <div className="space-y-4">
          <h3 className="text-2xl font-semibold text-red-500">Clases de Tango</h3>
          <p>
            Clases grupales y privadas adaptadas a todos los niveles — desde principiantes hasta avanzados — con opción presencial en Iguazú o modalidades online. Ideal si querés aprender tango desde cero o perfeccionar tu técnica.
          </p>
        </div>

        <div className="space-y-4">
          <h3 className="text-2xl font-semibold text-red-500">Moda & Estilo</h3>
          <p>
            Ropa y accesorios diseñados para milongas, shows y eventos tangueros. Con la línea de moda UnderTango buscamos vestir la cultura y el estilo del tango con elegancia.
          </p>
        </div>
      </div>
    </section>
    </Reveal>
  );
}
