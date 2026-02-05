import { Play, X } from 'lucide-react';

interface AdAlertProps {
  isOpen: boolean;
  onClose: () => void;
  onWatchAd: () => void;
  isDarkMode?: boolean;
}

export function AdAlert({ isOpen, onClose, onWatchAd, isDarkMode = false }: AdAlertProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center px-5">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/40 backdrop-blur-sm"
        onClick={onClose}
      />

      {/* Alert Container */}
      <div
        className={`relative w-full max-w-sm rounded-[24px] p-6 shadow-2xl animate-scale-up transition-colors ${
          isDarkMode ? 'bg-[#2A2F2A]' : 'bg-white'
        }`}
      >
        {/* Icon */}
        <div className="flex justify-center mb-4">
          <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[#A8B9A5] to-[#96A893] flex items-center justify-center shadow-lg">
            <Play className="w-8 h-8 text-white fill-white" />
          </div>
        </div>

        {/* Title */}
        <h3
          className={`text-center text-[20px] mb-3 transition-colors ${
            isDarkMode ? 'text-[#E8DDD3]' : 'text-[#2C3E2E]'
          }`}
        >
          식물 등록 한도
        </h3>

        {/* Message */}
        <p
          className={`text-center text-[15px] leading-relaxed mb-6 transition-colors ${
            isDarkMode ? 'text-[#9CA59D]' : 'text-[#7A8A7D]'
          }`}
        >
          무료로 3개까지 등록할 수 있어요.
          <br />
          추가 등록을 위해 짧은 광고를 시청해주세요!
        </p>

        {/* Buttons */}
        <div className="space-y-3">
          {/* Watch Ad Button */}
          <button
            onClick={onWatchAd}
            className="w-full py-4 bg-[#A8B9A5] text-white rounded-[14px] hover:bg-[#96A893] active:scale-[0.98] transition-all flex items-center justify-center gap-2 shadow-md"
          >
            <Play className="w-5 h-5 fill-white" />
            <span>광고 보기</span>
          </button>

          {/* Cancel Button */}
          <button
            onClick={onClose}
            className={`w-full py-4 rounded-[14px] active:scale-[0.98] transition-all ${
              isDarkMode
                ? 'bg-[#3D433D] text-[#E8DDD3] hover:bg-[#4A514A]'
                : 'bg-[#F5F3F0] text-[#7A8A7D] hover:bg-[#E8DDD3]'
            }`}
          >
            취소
          </button>
        </div>
      </div>

      <style>{`
        @keyframes scale-up {
          from {
            opacity: 0;
            transform: scale(0.9);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }

        .animate-scale-up {
          animation: scale-up 0.2s ease-out;
        }
      `}</style>
    </div>
  );
}
