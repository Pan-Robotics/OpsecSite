import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/animation/Reveal";


export default function JourneySection() {
    return (
        <Reveal>
            <section id="tools" className="relative h-[100vh] py-20 flex flex-col justify-start items-center p-4 overflow-x-hidden min-h-[480px] m-0 bg-[url('https://mkt-site-asset.crypto.com/assets/home-page/bento-layout/win-btc-mobile-v2.webp')] bg-center bg-cover bg-no-repeat box-border">
                <div className="absolute inset-0 bg-black/50" />
                <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="font-orbitron text-3xl md:text-4xl font-bold mb-6 text-cyber-gold">CryptoOpsec Tools</h2>
                        <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                            Exclusive security tools coming soon. Join our Telegram channel for early access.
                        </p>
                    </div>

                    <div className="content flex justify-center mt-8">

                        <Button asChild className="w-[30%] bg-cyber-gold hover:bg-cyber-gold-dark text-cyber-dark font-semibold shadow-none mx-auto">
                            <a href="#tools" target="_blank" rel="noopener noreferrer">
                                Launch APP
                            </a>
                        </Button>
                    </div>
                </div>
            </section>
        </Reveal>
    );
}
