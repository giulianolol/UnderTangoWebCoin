import Reveal from "./reveal";

export default function Ecosistema() {
  return (
    <Reveal direction="left" intensity={90} parallax>
      <section
        className="
          py-24 
          text-gray-200 
          px-6 md:px-12
          text-right 
          ml-auto 
          max-w-4xl
        "
        id="ecosistema"
      >
        <h2 className="text-4xl font-display font-bold text-utc-red mb-8">
          UnderTangoCoin: nuestro ecosistema
        </h2>

        <p className="mb-8">
          UnderTangoCoin representa la tokenización de una comunidad cultural
          viva. Es la puerta de ingreso a un mundo donde arte, danza, moda y
          tecnología convergen. Los holders podrán gozar de beneficios reales
          dentro de UnderTango: acceso preferencial, descuentos exclusivos,
          pertenecer a proyectos artísticos y mucho más.
        </p>

        <div className="space-y-6">
          <p>
            <strong>• Fondo de Producción & Arte:</strong> financiamiento de
            shows, producciones, espectáculos y nuevos proyectos artísticos
            dentro de UnderTango.
          </p>

          <p>
            <strong>• Membresías VIP & Beneficios Exclusivos:</strong> acceso
            anticipado a shows, descuentos en clases, moda y entradas especiales.
          </p>

          <p>
            <strong>• Comunidad & Voz Democrática:</strong> participación en
            decisiones del ecosistema — votaciones, propuestas artísticas y
            roadmap comunitario.
          </p>

          <p>
            <strong>• Marketplace de Moda & Servicios:</strong> posibilidad de
            usar UnderTangoCoin para comprar moda, pagar clases, entradas o
            servicios del club.
          </p>

          <p>
            <strong>• Plataforma de Arte, Música y Web3:</strong> integración
            con filosofía de arte + tecnología + comunidad, uniendo tango
            tradicional con vanguardia cripto y digital.
          </p>
        </div>
      </section>
    </Reveal>
  );
}
