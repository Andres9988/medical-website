export default function HeroSection() {
  return (
    <section className="relative bg-gradient-to-r from-blue-600 to-blue-800 text-white">
      <div className="absolute inset-0 bg-black/20"></div>
      <div
        className="relative min-h-[400px] bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('/medical-professionals-in-surgical-masks-working-wi.jpg')`,
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/90 to-blue-800/70"></div>
        <div className="relative max-w-7xl mx-auto px-4 py-20">
          <div className="max-w-2xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-balance">精诚 仁爱 务实 创新</h1>
            <div className="space-y-3 text-lg leading-relaxed">
              <p>国家三级医院，青春璀璨的格桑山，面向立园的天籁湾</p>
              <p>以精湛技术为基础，以优质服务为载体，全心全意</p>
              <p>病人服务</p>
            </div>
          </div>

          {/* Vertical text on right */}
          <div className="absolute right-8 top-1/2 transform -translate-y-1/2 writing-mode-vertical text-2xl font-bold tracking-wider">
            精医为民
          </div>
        </div>
      </div>
    </section>
  )
}
