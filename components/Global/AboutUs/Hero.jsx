export default function AboutSection() {
  return (
    <section className="w-full bg-gradient-to-b from-gray-50 to-white py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center space-y-4">
          {/* Section Heading */}
          <h2 className="text-5xl font-bold text-[#333] leading-normal">
            About us
          </h2>

          {/* Description Text */}
          <p className="text-base text-gray-600 leading-relaxed">
            You have problems with leaking pipes, broken tiles, lost keys or want
            to tidy up the trees around you, of course you need our help!
          </p>
        </div>
      </div>
    </section>
  );
}