'use client';

export default function RealResults() {
  const testimonials = [
    {
      name: "Beth B, founder of Plumber Service.",
      title: "founder of Plumber Service",
      quote: "In the first year, I went from about $10K in revenue to almost $100K.",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=270&h=270&fit=crop"
    },
    {
      name: "Alex T, owner of house moving Service.",
      title: "Owner of house moving Service",
      quote: "When compared with other apps, Naibrly is the best.",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=270&h=270&fit=crop"
    },
    {
      name: "Mehdi F, Owner of Step Up Home Methanes service.",
      title: "Owner of Step Up Home Methanes service",
      quote: "We invest our Manpower budgets in different streams, but the best return we get is from Naibrly.",
      image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=270&h=270&fit=crop"
    }
  ];

  return (
    <div className="w-full bg-white py-16 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Testimonials Section */}
        <h1 className="text-4xl font-semibold text-center mb-16 text-black font-inter leading-normal not-italic">Real results from real pros.</h1>
        
        <div className="grid md:grid-cols-3 gap-12 mb-20">
          {testimonials.map((testimonial, idx) => (
            <div key={idx} className="flex flex-col items-center text-center">
              {/* Circular Image */}
              <div 
                className="w-[270px] h-[270px] rounded-full mb-6 flex-shrink-0 overflow-hidden shadow-lg"
                style={{
                  backgroundImage: `url(${testimonial.image})`,
                  backgroundSize: '100% 142.799%',
                  backgroundPosition: '0px -6.993px',
                  backgroundRepeat: 'no-repeat',
                  backgroundColor: '#d1d5db'
                }}
              />
              
              {/* Quote */}
              <p className="text-black font-inter text-base not-italic font-light leading-normal mb-4">
                "{testimonial.quote}"
              </p>
              
              {/* Name and Title */}
              <p className="font-bold text-gray-900">{testimonial.name}</p>
            </div>
          ))}
        </div>

        {/* Earning Potential Section */}
        <div className="text-center bg-gray-50 rounded-xl p-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">See your earning potential.</h2>
          
          <p className="text-gray-700 max-w-2xl mx-auto leading-relaxed mb-8">
            Use our <span className="font-semibold">Growth Calculator*</span> to explore how your business could grow on Thumbtack. Enter your info into the calculator below to gain a clear view of what's possible.
          </p>
        </div>
      </div>
    </div>
  );
}