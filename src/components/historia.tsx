import Reveal from "./reveal";

export default function Historia() {
  return (
    <Reveal
      direction="scale"
      intensity={90}
      parallax
    >
      <section className="py-24 bg-utc-900 text-gray-200 px-6 md:px-12" id="historia">
        <h2 className="text-4xl font-display font-bold text-utc-red mb-8">
          Nuestra Historia
        </h2>
        
        <ul className="space-y-4 leading-relaxed text-lg">
          <li><strong>2013</strong> — Fundación de UnderTango como academia de tango moderno.</li>
          <li><strong>2015</strong> — Comienzo de shows como compañía de tango.</li>
          <li><strong>2017</strong> — Expansión a productora artística.</li>
          <li><strong>2023</strong> — Registro de marca en el INPI.</li>
          <li><strong>2025</strong> — Lanzamiento de la línea de moda UnderTango.</li>
        </ul>

        <p className="mt-8 text-gray-400 max-w-3xl text-lg">
          Desde sus inicios en Puerto Iguazú, UnderTango combina tradición del tango, pasión por la danza 
          y una visión contemporánea: espectáculos, clases, moda y una comunidad que trasciende fronteras. 
          Esta historia es la base de un nuevo universo: la tokenización de ese legado con UnderTangoCoin.
        </p>
      </section>
    </Reveal>
  );
}
