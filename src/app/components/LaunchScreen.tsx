import { Sprout } from 'lucide-react';
import { useEffect, useState } from 'react';

interface LaunchScreenProps {
  isDarkMode?: boolean;
}

export function LaunchScreen({ isDarkMode = false }: LaunchScreenProps) {
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    // Start fade out animation after 2 seconds
    const timer = setTimeout(() => {
      setFadeOut(true);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div
      className={`fixed inset-0 z-[100] flex flex-col items-center justify-center transition-all duration-500 ${
        fadeOut ? 'opacity-0 pointer-events-none' : 'opacity-100'
      } ${isDarkMode ? 'bg-[#1A1D1A]' : 'bg-[#F5F3F0]'}`}
    >
      {/* Logo Animation */}
      <div className="flex flex-col items-center gap-6 animate-fade-in">
        {/* Icon Container */}
        <div
          className={`relative w-24 h-24 rounded-[28px] flex items-center justify-center transition-colors ${
            isDarkMode
              ? 'bg-gradient-to-br from-[#2A2F2A] to-[#3D433D]'
              : 'bg-gradient-to-br from-white to-[#F5F3F0]'
          }`}
          style={{
            boxShadow: isDarkMode
              ? '0 8px 32px rgba(0, 0, 0, 0.3)'
              : '0 8px 32px rgba(168, 185, 165, 0.15)',
          }}
        >
          {/* Animated Sprout Icon */}
          <Sprout
            className="w-12 h-12 text-[#A8B9A5] animate-bounce-gentle"
            style={{ animationDuration: '2s' }}
          />

          {/* Decorative Ring */}
          <div
            className="absolute inset-0 rounded-[28px] border-2 border-[#A8B9A5]/20 animate-pulse"
            style={{ animationDuration: '2s' }}
          />
        </div>

        {/* App Name */}
        <div className="text-center">
          <h1
            className={`text-[36px] tracking-tight mb-2 transition-colors ${
              isDarkMode ? 'text-[#E8DDD3]' : 'text-[#2C3E2E]'
            }`}
            style={{
              fontFamily:
                '-apple-system, BlinkMacSystemFont, "SF Pro Display", "SF Pro Text", "Helvetica Neue", Arial, sans-serif',
            }}
          >
            Danbi
          </h1>
          <p
            className={`text-[15px] transition-colors ${
              isDarkMode ? 'text-[#9CA59D]' : 'text-[#7A8A7D]'
            }`}
          >
            Take care of your green friends
          </p>
        </div>
      </div>

      {/* Loading Indicator */}
      <div className="absolute bottom-20 flex gap-2">
        <div
          className="w-2 h-2 rounded-full bg-[#A8B9A5] animate-bounce"
          style={{ animationDelay: '0ms' }}
        />
        <div
          className="w-2 h-2 rounded-full bg-[#A8B9A5] animate-bounce"
          style={{ animationDelay: '150ms' }}
        />
        <div
          className="w-2 h-2 rounded-full bg-[#A8B9A5] animate-bounce"
          style={{ animationDelay: '300ms' }}
        />
      </div>

      <style>{`
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: scale(0.95);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }

        @keyframes bounce-gentle {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-10px);
          }
        }

        .animate-fade-in {
          animation: fade-in 0.8s ease-out;
        }

        .animate-bounce-gentle {
          animation: bounce-gentle 2s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
}
