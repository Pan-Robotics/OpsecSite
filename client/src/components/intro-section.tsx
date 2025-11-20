import { Reveal } from './animation/Reveal';

export default function IntroSection() {
  return (
    <Reveal>
      <section id="intro" className="py-20 bg-cyber-slate">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="font-orbitron text-3xl md:text-4xl font-bold mb-6 text-cyber-gold">
                What is Crypto Operational Security?
              </h2>
              <p className="text-lg text-gray-300 mb-6 leading-relaxed">
                <span className="text-cyber-gold font-semibold block mb-2">Crypto isn't risky. Poor OPSEC is!</span>
                Operational Security (OPSEC) in crypto means protecting your digital assets through
                systematic security practices, threat awareness, and proper tool usage.
              </p>
              <p className="text-lg text-gray-300 leading-relaxed">
                In Web3, you are your own bank. This guide transforms you from vulnerable to secure,
                covering everything from basic wallet setup to advanced cold storage strategies.
              </p>
            </div>
            <div className="text-center">
              <img
                src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600"
                alt="Digital security and blockchain network visualization"
                className="rounded-xl shadow-2xl w-full h-auto border border-cyber-gold/20"
              />
            </div>
          </div>
        </div>
      </section>
    </Reveal>
  );
}
