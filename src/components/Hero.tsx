const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center py-20 px-6">
      {/* White Canvas Container */}
      <div className="w-full max-w-[1200px] bg-white rounded-3xl shadow-[0_20px_60px_rgba(0,0,0,0.08)] py-20 px-8 md:px-16">
        
        {/* Hero Content - Centered */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#222222] mb-3 font-['Poppins']">
            Youssef Yasser
          </h1>
          <p className="text-sm md:text-base text-[#6b6b6b] uppercase tracking-[2px] font-medium font-['Poppins']">
            UX/UI DESIGNER
          </p>
        </div>

        {/* Abstract Visual Section */}
        <div className="flex flex-col md:flex-row gap-10 items-center justify-center mt-16 max-w-4xl mx-auto">
          
          {/* Left Abstract Visual - Grid Layout Preview */}
          <div className="w-full md:w-[48%] h-[320px] bg-gradient-to-br from-[#F6F6F6] to-[#EAEAEA] rounded-[20px] shadow-[0_10px_30px_rgba(0,0,0,0.06)] p-8 relative overflow-hidden">
            {/* Grid pattern */}
            <div className="absolute inset-4 grid grid-cols-3 grid-rows-4 gap-3">
              <div className="bg-white/60 rounded-lg shadow-sm"></div>
              <div className="bg-white/60 rounded-lg shadow-sm col-span-2"></div>
              <div className="bg-white/60 rounded-lg shadow-sm row-span-2"></div>
              <div className="bg-gradient-to-br from-[#E8E5FF] to-[#D4CFFF] rounded-lg shadow-sm"></div>
              <div className="bg-white/60 rounded-lg shadow-sm"></div>
              <div className="bg-white/60 rounded-lg shadow-sm col-span-2"></div>
              <div className="bg-white/60 rounded-lg shadow-sm"></div>
              <div className="bg-white/60 rounded-lg shadow-sm col-span-2 row-span-2"></div>
            </div>
          </div>

          {/* Right Abstract Visual - Layered Shapes */}
          <div className="w-full md:w-[48%] h-[320px] bg-gradient-to-br from-[#F6F6F6] to-[#EAEAEA] rounded-[20px] shadow-[0_10px_30px_rgba(0,0,0,0.06)] p-8 relative overflow-hidden flex items-center justify-center">
            {/* Overlapping abstract shapes */}
            <div className="relative w-full h-full flex items-center justify-center">
              <div className="absolute w-40 h-40 bg-gradient-to-br from-[#FFE8F0] to-[#FFC9DF] rounded-3xl rotate-12 shadow-lg opacity-80"></div>
              <div className="absolute w-32 h-32 bg-white/80 rounded-2xl -rotate-6 shadow-md"></div>
              <div className="absolute w-36 h-36 bg-gradient-to-br from-[#E8E5FF] to-[#D4CFFF] rounded-[28px] rotate-45 shadow-lg opacity-70"></div>
              <div className="absolute w-24 h-24 bg-white/90 rounded-xl rotate-12 shadow-sm"></div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;