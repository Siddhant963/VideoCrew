import React from 'react';
import bannerImg from "../../../public/images/Banner_Image.png";
import Img1 from "../../../public/images/image 3.png";
import Img2 from "../../../public/images/image 2.png";
import Img3 from "../../../public/images/image 1.png";
import Img4 from "../../../public/images/Image (3).png";
import Img5 from "../../../public/images/Group 123.png";





export const HeroSection: React.FC = () => {
  return (
    <><section className="relative">
      <div
        className="h-[480px] sm:h-[560px] md:h-[640px] xl:h-[720px] bg-cover bg-center relative"
        style={{ backgroundImage: `url(${bannerImg})` }}
      >
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />

        {/* Content */}
        <div className="container mx-auto relative z-10 px-4 sm:px-6 lg:px-8 h-full flex items-end md:items-center">
          <div className="max-w-3xl pb-8 md:pb-0">
            <p className="text-xs sm:text-sm md:text-base text-gray-300 mb-4">
              “이번엔 정말 제대로 된 연출을 하고 싶다... 혹시 이런 마음으로 여기까지 오셨나요? 축하드립니다!”
            </p>
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold leading-tight">
              비디오크루가 정답입니다!
            </h1>
          </div>
        </div>
      </div>
    </section>
    <section className="bg-black text-white py-16">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
         <div className='flex justify-between mt-8'>
           <h2 className="text-2xl sm:text-3xl font-bold mb-6 md:mb-8 ">
            <h3>비디오크루의 차별점</h3>
            영상 제작, 어떻게 하고 계신가요?
          </h2>
          <p className="text-sm sm:text-base md:text-lg text-gray-300 mb-10 md:mb-12 max-w-3xl">
            비디오크루는 단순한 영상 제작을 넘어, 철저한 스토리보드와 독창적인 시각을 통한
            차별화된 콘텐츠를 제공합니다. 영상의 퀄리티를 높이는 전문적인 접근 방식으로
            프로젝트의 완성도를 높입니다.
          </p>

         </div>
          {/* Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 sm:gap-3 md:gap-4">
            {/* Card 1 */}
            <div className="bg-gray-900">
              <img src={Img1} alt="Creative Solutions" className="w-full h-48 md:h-56 object-cover" />
              <div className="p-4 md:p-6">
                <h3 className="text-lg md:text-xl font-semibold mb-2 md:mb-4">Creative Solutions</h3>
                <p className="text-gray-400 text-sm md:text-base">
                  독창적인 시각과 최적의 아이디어를 제시합니다.
                </p>
              </div>
            </div>

            {/* Card 2 */}
            <div className="bg-gray-900">
              <img src={Img2} alt="Professional Quality" className="w-full h-48 md:h-56 object-cover" />
              <div className="p-4 md:p-6">
                <h3 className="text-lg md:text-xl font-semibold mb-2 md:mb-4">Professional Quality</h3>
                <p className="text-gray-400 text-sm md:text-base">
                  다양한 경험과 전문 장비를 통해 최고의 퀄리티를 보장합니다.
                </p>
              </div>
            </div>

            {/* Card 3 */}
            <div className="bg-gray-900">
              <img src={Img3} alt="All-in-One Service" className="w-full h-48 md:h-56 object-cover" />
              <div className="p-4 md:p-6">
                <h3 className="text-lg md:text-xl font-semibold mb-2 md:mb-4">All-in-One Service</h3>
                <p className="text-gray-400 text-sm md:text-base">
                  기획부터 촬영, 편집까지 원스톱으로 제공합니다.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div>
        <img src={Img4} alt="" />
        
      </div>
      </>
  );
};
