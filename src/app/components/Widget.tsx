import { Droplet } from 'lucide-react';

interface WidgetProps {
  plantsNeedingWater: number;
  isDarkMode?: boolean;
}

export function Widget({ plantsNeedingWater, isDarkMode = false }: WidgetProps) {
  return (
    <div className="max-w-md mx-auto p-5">
      <h2 className={`text-[20px] mb-4 transition-colors ${isDarkMode ? 'text-[#E8DDD3]' : 'text-[#2C3E2E]'}`}>
        위젯 미리보기
      </h2>
      
      {/* 1x4 Widget - Small */}
      <div
        className={`rounded-[20px] p-4 transition-colors shadow-lg ${
          isDarkMode 
            ? 'bg-[#3D2A1F] border border-[#5C4230]' 
            : 'bg-[#FFF5ED] border border-[#FFD4B8]'
        }`}
        style={{
          width: '100%',
          aspectRatio: '4/1',
          maxWidth: '360px',
        }}
      >
        <div className="h-full flex items-center justify-between">
          {/* Left Side - Icon & Info */}
          <div className="flex items-center gap-3 flex-1">
            {/* Icon Container */}
            <div 
              className={`w-12 h-12 rounded-[12px] flex items-center justify-center flex-shrink-0 ${
                isDarkMode 
                  ? 'bg-[#5C4230]' 
                  : 'bg-white'
              }`}
            >
              <Droplet 
                className={`w-6 h-6 ${
                  isDarkMode ? 'text-[#FFB89A]' : 'text-[#D4735C]'
                }`}
                fill="currentColor"
              />
            </div>

            {/* Text Content */}
            <div className="flex-1 min-w-0">
              <p 
                className={`text-[13px] transition-colors ${
                  isDarkMode ? 'text-[#FFB89A]' : 'text-[#D4735C]'
                }`}
              >
                {plantsNeedingWater > 0 ? (
                  <>
                    🌵 {plantsNeedingWater} {plantsNeedingWater === 1 ? 'plant needs' : 'plants need'} water
                  </>
                ) : (
                  '🌿 All plants are healthy'
                )}
              </p>
              <p className={`text-[11px] mt-0.5 transition-colors ${
                isDarkMode ? 'text-[#9CA59D]' : 'text-[#7A8A7D]'
              }`}>
                Danbi
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* 2x2 Widget - Medium (Bonus) */}
      <div className="mt-6">
        <h3 className={`text-[17px] mb-3 transition-colors ${isDarkMode ? 'text-[#E8DDD3]' : 'text-[#2C3E2E]'}`}>
          2x2 위젯 (보너스)
        </h3>
        <div
          className={`rounded-[20px] p-5 transition-colors shadow-lg ${
            isDarkMode 
              ? 'bg-[#3D2A1F] border border-[#5C4230]' 
              : 'bg-[#FFF5ED] border border-[#FFD4B8]'
          }`}
          style={{
            width: '100%',
            aspectRatio: '1/1',
            maxWidth: '170px',
          }}
        >
          <div className="h-full flex flex-col">
            {/* Header */}
            <div className="flex items-center gap-2 mb-3">
              <div 
                className={`w-8 h-8 rounded-[10px] flex items-center justify-center ${
                  isDarkMode 
                    ? 'bg-[#5C4230]' 
                    : 'bg-white'
                }`}
              >
                <Droplet 
                  className={`w-4 h-4 ${
                    isDarkMode ? 'text-[#FFB89A]' : 'text-[#D4735C]'
                  }`}
                  fill="currentColor"
                />
              </div>
              <span className={`text-[11px] transition-colors ${
                isDarkMode ? 'text-[#9CA59D]' : 'text-[#7A8A7D]'
              }`}>
                Danbi
              </span>
            </div>

            {/* Main Content */}
            <div className="flex-1 flex flex-col justify-center">
              <p 
                className={`text-[32px] leading-none mb-1 transition-colors ${
                  isDarkMode ? 'text-[#FFB89A]' : 'text-[#D4735C]'
                }`}
              >
                {plantsNeedingWater > 0 ? plantsNeedingWater : '✓'}
              </p>
              <p 
                className={`text-[13px] leading-tight transition-colors ${
                  isDarkMode ? 'text-[#FFB89A]' : 'text-[#D4735C]'
                }`}
              >
                {plantsNeedingWater > 0 ? (
                  <>
                    {plantsNeedingWater === 1 ? 'plant needs' : 'plants need'}
                    <br />
                    water today
                  </>
                ) : (
                  <>
                    All plants
                    <br />
                    are healthy
                  </>
                )}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* 4x2 Widget - Large (Bonus) */}
      <div className="mt-6">
        <h3 className={`text-[17px] mb-3 transition-colors ${isDarkMode ? 'text-[#E8DDD3]' : 'text-[#2C3E2E]'}`}>
          4x2 위젯 (보너스)
        </h3>
        <div
          className={`rounded-[20px] p-5 transition-colors shadow-lg ${
            isDarkMode 
              ? 'bg-[#3D2A1F] border border-[#5C4230]' 
              : 'bg-[#FFF5ED] border border-[#FFD4B8]'
          }`}
          style={{
            width: '100%',
            aspectRatio: '2/1',
            maxWidth: '360px',
          }}
        >
          <div className="h-full flex flex-col justify-between">
            {/* Header */}
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div 
                  className={`w-10 h-10 rounded-[12px] flex items-center justify-center ${
                    isDarkMode 
                      ? 'bg-[#5C4230]' 
                      : 'bg-white'
                  }`}
                >
                  <Droplet 
                    className={`w-5 h-5 ${
                      isDarkMode ? 'text-[#FFB89A]' : 'text-[#D4735C]'
                    }`}
                    fill="currentColor"
                  />
                </div>
                <span className={`text-[13px] font-medium transition-colors ${
                  isDarkMode ? 'text-[#E8DDD3]' : 'text-[#2C3E2E]'
                }`}>
                  Danbi
                </span>
              </div>
              <span className={`text-[11px] transition-colors ${
                isDarkMode ? 'text-[#9CA59D]' : 'text-[#7A8A7D]'
              }`}>
                Today
              </span>
            </div>

            {/* Main Content */}
            <div className="flex items-center gap-3">
              <div className="flex-1">
                <p 
                  className={`text-[28px] leading-none mb-2 transition-colors ${
                    isDarkMode ? 'text-[#FFB89A]' : 'text-[#D4735C]'
                  }`}
                >
                  {plantsNeedingWater > 0 ? `${plantsNeedingWater} 🌵` : '✓ 🌿'}
                </p>
                <p 
                  className={`text-[15px] transition-colors ${
                    isDarkMode ? 'text-[#FFB89A]' : 'text-[#D4735C]'
                  }`}
                >
                  {plantsNeedingWater > 0 ? (
                    <>
                      {plantsNeedingWater === 1 ? 'Plant needs' : 'Plants need'} water today
                    </>
                  ) : (
                    'All plants are healthy!'
                  )}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
