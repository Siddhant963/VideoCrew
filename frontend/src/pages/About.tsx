import React from "react";
import Navbar from "../components/common/Navbar";
import aboutPage from  "../assets/Frame 422.webp"
import leftBg from "../assets/left.png";
import rightBg from "../assets/right.png";
import grid from "../assets/Frame 430.png"
const AboutPage: React.FC = () => {
  return (
    <>
 
      <div className="bg-black text-white min-h-screen font-sans">
         <div className="relative z-10">
         <Navbar />
       </div>     
        {/* Hero Section */}
        <section className="relative px-4 sm:px-6 lg:px-8 pt-8 pb-16 md:pt-12 md:pb-20 lg:pt-16 lg:pb-24">
          <div className="max-w-7xl mx-auto">
            {/* Top Text */}
<div className="mb-8">
  <p className="text-sm text-gray-400 text-center font-bold md:text-left md:font-normal">
    Who we are, Video Crew
  </p>
</div>


            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-start">
              {/* Left Content */}
              <div>
                <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-[45px] font-bold leading-tight mb-6 md:mb-8">
                  스토리로 말하는 영상 콘텐츠,
                  <br />
                  시선을 사로잡는 영상,
                  <br />
                  더 이상 고민하지 마세요!
                </h1>
              </div>

              {/* Right Content */}
              <div className="text-gray-400  md:text-base leading-relaxed">
                <p className="mb-4">
                  우리는 영상이 단순한 기록을 넘어, 감정을 전달하고, 생각을 자극하며,
                  변화를 이끌어내는 가장 강력한 매체라고 믿습니다. 비디오크루는 모든
                  프로젝트에 진정성을 담아, 고객의 메시지가 세상에 가장 효과적으로
                  전달될 수 있도록 창의적인 솔루션을 연구하고 실현합니다.
                </p>
               
                <p className="italic text-gray-300">
                  "모든 프레임에 가치를 담아" 고객과 함께 성장하는 파트너가 되겠습니다.
                </p>
              </div>
            </div>

            {/* Main Hero Image */}
            <div className="mt-12 md:mt-16 lg:mt-20">
              <div className="relative aspect-[16/9] rounded-xl overflow-hidden">
                <img
                  src={aboutPage}
                  alt="Video Production Team with Professional Camera Equipment"
                  className="w-[1248px] h-[488px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent"></div>
               
                {/* Overlay Text */}
                <div className="absolute bottom-6 md:bottom-8 left-6 md:left-8">
                  <p className="text-xs md:text-sm text-gray-300 mb-1">회사소개</p>
                  <h2 className="text-lg md:text-xl lg:text-2xl font-bold text-white">Video Crew,</h2>
                  <p className="text-sm md:text-base text-gray-300">Video Consulting Firm</p>
                </div>

                {/* Pagination Dots */}
                <div className="absolute bottom-6 md:bottom-8 left-6 md:left-8 mt-10">
                  <div className="flex space-x-2">
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                    <div className="w-2 h-2 bg-white/50 rounded-full"></div>
                    <div className="w-2 h-2 bg-white/50 rounded-full"></div>
                    <div className="w-2 h-2 bg-white/50 rounded-full"></div>
                    <div className="w-2 h-2 bg-white/50 rounded-full"></div>
                  </div>
                </div>
              </div>
            </div>

            {/* Client Logos */}
            <div className="mt-12 md:mt-16 lg:mt-20">
               <img
               className="w-full "
               src={aboutPage} alt="" />
            </div>
          </div>
        </section>

      {/* Divider Image */}
      <div className="w-full">
        <img
          className="w-full h-auto object-cover"
          src="aboutPage/1232.png"
          alt="Section divider"
        />
      </div>

      {/* Core Value Section */}
      <section className="relative py-12 md:py-16 lg:py-20 bg-[url('aboutPage/core-value-bg.jpg')] bg-cover bg-center">
        <div className="absolute inset-0 bg-black/60"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
          <div className="text-center mb-8 md:mb-12 lg:mb-16">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-3 md:mb-4">Core Value</h2>
            <p className="text-gray-300 text-sm md:text-base lg:text-lg max-w-2xl mx-auto leading-relaxed">
              버디오크루가 지원하는 액살가치는 고객혼실, 문제해결, 손쉬움으로
              현상 전공성 있게 고객을 대하는 것을 목표로 합니다.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {/* Customer Centric */}
            <div className="relative bg-black/40 backdrop-blur-sm rounded-lg overflow-hidden group hover:bg-black/50 transition-colors duration-300">
              <div className="aspect-[4/5] relative">
                <img
                  src="aboutPage/image6.webp"
                  alt="Customer-Centric approach"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/30"></div>
              </div>
              <div className="p-4 md:p-6 lg:p-8">
                <h3 className="text-lg md:text-xl lg:text-2xl font-bold mb-2 md:mb-4">Customer-Centric</h3>
                <p className="text-gray-300 text-sm md:text-base leading-relaxed">
                  버디오크루가 지원하는 것은 고객의 성공입니다.
                </p>
              </div>
            </div>

            {/* Problem Solving */}
            <div className="relative bg-black/40 backdrop-blur-sm rounded-lg overflow-hidden group hover:bg-black/50 transition-colors duration-300">
              <div className="aspect-[4/5] relative">
                <img
                  src="aboutPage/image5.webp"
                  alt="Problem Solving methodology"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/30"></div>
              </div>
              <div className="p-4 md:p-6 lg:p-8">
                <h3 className="text-lg md:text-xl lg:text-2xl font-bold mb-2 md:mb-4">Problem Solving</h3>
                <p className="text-gray-300 text-sm md:text-base leading-relaxed">
                  버디오크루는 디자인 이슈, 채업 컨널링 등 고객의 문제에 달용합니다.
                </p>
              </div>
            </div>

            {/* Candidates */}
            <div className="relative bg-black/40 backdrop-blur-sm rounded-lg overflow-hidden group hover:bg-black/50 transition-colors duration-300 md:col-span-2 lg:col-span-1">
              <div className="aspect-[4/5] relative">
                <img
                  src="aboutPage/image4.webp"
                  alt="Professional candidates and team"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/30"></div>
              </div>
              <div className="p-4 md:p-6 lg:p-8">
                <h3 className="text-lg md:text-xl lg:text-2xl font-bold mb-2 md:mb-4">Candidates</h3>
                <p className="text-gray-300 text-sm md:text-base leading-relaxed">
                  업무를 수행함께 얻어서 손격하고 전공성 있게 판단됩니다.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Second Divider Image */}
      <div className="w-full">
        <img  
          className="w-full h-auto object-cover"  
          src="aboutPage/1234.png"
          alt="Section divider"
        />
      </div>

      {/* Work Culture Section */}
      <section className="relative py-12 md:py-16 lg:py-20 bg-[url('aboutPage/image.png')] bg-cover bg-center">
        <div className="absolute inset-0 bg-black/60"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
          <div className="text-center mb-8 md:mb-12 lg:mb-16">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-3 md:mb-4">Work Culture</h2>
            <p className="text-gray-300 text-sm md:text-base lg:text-lg max-w-2xl mx-auto leading-relaxed">
              바디오그루의 업무 문화는 애푸링 퍼포먼스, 효율성, 그리고 자녀 공유를
              기반으로 합니다.
            </p>
          </div>

          <div className="space-y-6 md:space-y-8">
            {/* Top Row - Agile Performance and Effectiveness */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8">
              {/* Agile Performance */}
              <div className="relative bg-black/40 backdrop-blur-sm rounded-lg overflow-hidden group hover:bg-black/50 transition-colors duration-300">
                <div className="aspect-[3/2] relative">
                  <img
                    src="aboutPage/placeholder.webp"
                    alt="Agile Performance - flexible team work"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-black/30"></div>
                </div>
                <div className="p-4 md:p-6 lg:p-8">
                  <h3 className="text-lg md:text-xl lg:text-2xl font-bold mb-1 md:mb-2">결과동상의 유연한 과업 수행</h3>
                  <h4 className="text-base md:text-lg lg:text-xl font-semibold mb-3 md:mb-4 text-blue-400">'Agile' Performance</h4>
                  <p className="text-gray-300 text-sm md:text-base leading-relaxed">
                    바디오그루는 최적 중심으로 유연하고 싶문게 다중합니다.
                  </p>
                </div>
              </div>

              {/* Effectiveness */}
              <div className="relative bg-black/40 backdrop-blur-sm rounded-lg overflow-hidden group hover:bg-black/50 transition-colors duration-300">
                <div className="aspect-[3/2] relative">
                  <img
                    src="aboutPage/placeholder-1.webp"
                    alt="Effectiveness - results focused approach"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-black/30"></div>
                </div>
                <div className="p-4 md:p-6 lg:p-8">
                  <h3 className="text-lg md:text-xl lg:text-2xl font-bold mb-1 md:mb-2">정부보다는 효과에 있음</h3>
                  <h4 className="text-base md:text-lg lg:text-xl font-semibold mb-3 md:mb-4 text-blue-400">Effectiveness</h4>
                  <p className="text-gray-300 text-sm md:text-base leading-relaxed">
                    바디오그루는 생산에서 돌아가보다는 상용성과 성격, 효과에 관중합니다.
                  </p>
                </div>
              </div>
            </div>

            {/* Knowledge Sharing - Full Width */}
            <div className="relative bg-black/40 backdrop-blur-sm rounded-lg overflow-hidden group hover:bg-black/50 transition-colors duration-300">
              <div className="aspect-[2/1] relative">
                <img
                  src="aboutPage/placeholder-2.webp"
                  alt="Knowledge Sharing - collaborative learning environment"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/30"></div>
              </div>
              <div className="p-4 md:p-6 lg:p-8">
                <h3 className="text-lg md:text-xl lg:text-2xl font-bold mb-1 md:mb-2">콘텐츠의 완전</h3>
                <h4 className="text-base md:text-lg lg:text-xl font-semibold mb-3 md:mb-4 text-blue-400">Knowledge Sharing</h4>
                <p className="text-gray-300 text-sm md:text-base leading-relaxed">
                  적사역소에 향상 서비스를 제공하는 바디오 컴퓨터로부터 역할을 수행합니다.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
   
      </>
  );
};

export default AboutPage;