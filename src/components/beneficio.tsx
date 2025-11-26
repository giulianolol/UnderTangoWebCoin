import Reveal from "./reveal"

export default function Beneficios() {
  return (
    <Reveal>
    <section className="py-24 bg-black text-gray-200 px-6 md:px-12" id="beneficios">
      <h2 className="text-4xl font-display font-bold text-utc-red mb-8">Beneficios para holders</h2>
      <ul className="list-disc list-inside space-y-4 text-lg leading-relaxed">
        <li>Acceso anticipado y precios preferenciales en shows.</li>
        <li>Descuentos en clases grupales o privadas de tango.</li>
        <li>Descuentos y lanzamientos exclusivos de la línea de moda UnderTango.</li>
        <li>Invitaciones a eventos VIP, meet & greet y experiencias exclusivas.</li>
        <li>Participar de decisiones artísticas y de producción como miembro de la comunidad.</li>
      </ul>
      <p className="mt-6 text-gray-400 italic">
        * Estos beneficios serán formalizados y confirmados por el equipo — lo mostramos como propuesta de valor para futuros holders.
      </p>
    </section>
    </Reveal>
  );
}
