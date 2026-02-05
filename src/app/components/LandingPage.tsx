import { Droplet, Bell, Smartphone, Leaf, ExternalLink, Mail, PlayCircle } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

interface LandingPageProps {
  onViewApp?: () => void;
}

export function LandingPage({ onViewApp }: LandingPageProps) {
  const features = [
    {
      icon: Leaf,
      title: '식물 등록 및 관리',
      description: '소중한 식물들의 정보를 한눈에 관리하세요.',
    },
    {
      icon: Bell,
      title: '물주기 알림',
      description: '로컬 푸시 알림으로 물주는 날을 놓치지 마세요.',
    },
    {
      icon: Smartphone,
      title: '홈 화면 위젯',
      description: '앱을 켜지 않아도 홈 화면에서 바로 상태 확인이 가능합니다.',
    },
  ];

  return (
    <div className="min-h-screen bg-white" style={{ fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Display", "SF Pro Text", "Helvetica Neue", Arial, sans-serif' }}>
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 bg-white/80 backdrop-blur-xl border-b border-gray-100 z-50">
        <nav className="max-w-7xl mx-auto px-6 lg:px-8 h-16 flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <img src="/AppIcon.png" alt="Danbi Logo" className="w-9 h-9 rounded-[10px]" />
            <span className="text-[20px] text-[#2C3E2E]" style={{ fontFamily: "'MemomentKkukkukk', sans-serif" }}>단비: Danbi</span>
          </div>

          {/* Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <a href="#features" className="text-[15px] text-[#7A8A7D] hover:text-[#2C3E2E] transition-colors">
              Features
            </a>
            <a href="https://essol2.notion.site/Danbi-Privacy-Policy-2fa2792a0a6f80d39d9cf9acc6e9745a" target="_blank" rel="noopener noreferrer" className="text-[15px] text-[#7A8A7D] hover:text-[#2C3E2E] transition-colors">
              Privacy
            </a>
            <a href="https://forms.gle/ZW9WghdfBcvqyqcn6" target="_blank" rel="noopener noreferrer" className="text-[15px] text-[#7A8A7D] hover:text-[#2C3E2E] transition-colors">
              Support
            </a>
          </div>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left Content */}
            <div className="space-y-8">
              <div className="space-y-4">
                <h1 className="text-[48px] lg:text-[64px] leading-tight text-[#2C3E2E]" style={{ fontFamily: "'MemomentKkukkukk', sans-serif" }}>
                  내 반려식물에게 내리는,
                  <br />
                  <span className="text-[#A8B9A5]">단비: Danbi</span>
                </h1>
                <p className="text-[16px] lg:text-[18px] text-[#7A8A7D] leading-relaxed">
                  소중한 반려식물의 정보를 한눈에 관리하고,
                  <br />
                  위젯과 알림으로 물주기 때를 놓치지 않게 도와주는
                  <br />
                  우리집 식물 관리 가이드🌱
                </p>
              </div>

              {/* App Store Button */}
              <a
                href="https://apps.apple.com/kr/app/%EB%8B%A8%EB%B9%84-danbi/id6758570326"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 px-8 py-4 bg-black text-white rounded-[14px] hover:bg-gray-900 transition-all shadow-lg hover:shadow-xl active:scale-[0.98]"
              >
                <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8 1.18-.24 2.31-.93 3.57-.84 1.51.12 2.65.72 3.4 1.8-3.12 1.87-2.38 5.98.48 7.13-.57 1.5-1.31 2.99-2.54 4.09l.01-.01zM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25z"/>
                </svg>
                <div className="text-left">
                  <div className="text-[10px] opacity-80">Download on the</div>
                  <div className="text-[18px] -mt-0.5">App Store</div>
                </div>
              </a>

              {/* Stats - 데이터 확보 후 주석 해제
              <div className="flex gap-8 pt-4">
                <div>
                  <div className="text-[32px] text-[#A8B9A5]">4.9</div>
                  <div className="text-[14px] text-[#7A8A7D]">Rating</div>
                </div>
                <div>
                  <div className="text-[32px] text-[#A8B9A5]">1K+</div>
                  <div className="text-[14px] text-[#7A8A7D]">Downloads</div>
                </div>
                <div>
                  <div className="text-[32px] text-[#A8B9A5]">Free</div>
                  <div className="text-[14px] text-[#7A8A7D]">To Use</div>
                </div>
              </div>
              */}
            </div>

            {/* Right Content - iPhone Mockup */}
            <div className="relative flex justify-center lg:justify-end">
              <img
                src="/landing_sample_screen.png"
                alt="Danbi App Screenshot"
                className="w-[320px] h-auto rounded-[32px] shadow-2xl"
              />

              {/* Decorative Elements */}
              <div className="absolute -top-8 -left-8 w-24 h-24 bg-[#A8B9A5]/20 rounded-full blur-3xl" />
              <div className="absolute -bottom-8 -right-8 w-32 h-32 bg-[#96A893]/20 rounded-full blur-3xl" />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 px-6 lg:px-8 bg-[#FAFAF9]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-[40px] lg:text-[48px] text-[#2C3E2E] mb-4" style={{ fontFamily: "'MemomentKkukkukk', sans-serif" }}>
              쉽고, 편안하게. 나만의 반려식물을 위해.
            </h2>
            <p className="text-[18px] text-[#7A8A7D] max-w-2xl mx-auto">
              초록빛 일상이 더 오래 머물 수 있도록, 단비가 곁에서 도와드릴게요.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-white rounded-[24px] p-8 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              >
                <div className="w-14 h-14 rounded-[16px] bg-gradient-to-br from-[#A8B9A5] to-[#96A893] flex items-center justify-center mb-6 shadow-lg">
                  <feature.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-[24px] text-[#2C3E2E] mb-3">
                  {feature.title}
                </h3>
                <p className="text-[16px] text-[#7A8A7D] leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 lg:px-8 bg-gradient-to-br from-[#A8B9A5] to-[#96A893]">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-[40px] lg:text-[48px] text-white mb-6" style={{ fontFamily: "'MemomentKkukkukk', sans-serif" }}>
            지금 바로 반려식물 관리를 시작해보세요!
          </h2>
          <p className="text-[20px] text-white/90 mb-8">
            수많은 식물 집사들이 단비와 함께 초록빛 일상을 건강하게 지켜나가고 있습니다.
          </p>
          <a
            href="https://apps.apple.com/kr/app/%EB%8B%A8%EB%B9%84-danbi/id6758570326"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-8 py-4 bg-white text-[#2C3E2E] rounded-[14px] hover:shadow-2xl transition-all shadow-xl active:scale-[0.98]"
          >
            <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor">
              <path d="M17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8 1.18-.24 2.31-.93 3.57-.84 1.51.12 2.65.72 3.4 1.8-3.12 1.87-2.38 5.98.48 7.13-.57 1.5-1.31 2.99-2.54 4.09l.01-.01zM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25z"/>
            </svg>
            <div className="text-left">
              <div className="text-[10px] opacity-70">Download on the</div>
              <div className="text-[18px] -mt-0.5">App Store</div>
            </div>
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-16 px-6 lg:px-8 bg-[#2C3E2E]">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-3 gap-12 mb-12">
            {/* Brand */}
            <div>
              <div className="flex items-center gap-2 mb-4">
                <img src="/AppIcon.png" alt="Danbi Logo" className="w-9 h-9 rounded-[10px]" />
                <span className="text-[20px] text-white" style={{ fontFamily: "'MemomentKkukkukk', sans-serif" }}>단비: Danbi</span>
              </div>
              <p className="text-[14px] text-gray-400">
                내 반려식물에게 내리는 단비
              </p>
            </div>

            {/* Links */}
            <div>
              <h4 className="text-[16px] text-white mb-4">Resources</h4>
              <div className="space-y-3">
                <a
                  href="https://essol2.notion.site/Danbi-Privacy-Policy-2fa2792a0a6f80d39d9cf9acc6e9745a"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-[14px] text-gray-400 hover:text-white transition-colors"
                >
                  Privacy Policy
                  <ExternalLink className="w-3 h-3" />
                </a>
                <a
                  href="https://forms.gle/ZW9WghdfBcvqyqcn6"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-[14px] text-gray-400 hover:text-white transition-colors"
                >
                  Support & Feedback
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            </div>

            {/* Developer */}
            <div>
              <h4 className="text-[16px] text-white mb-4">Developer</h4>
              <p className="text-[14px] text-gray-400 mb-2">
                Designed & Developed by
              </p>
              <p className="text-[16px] text-[#A8B9A5]">
                Eunsol Lee
              </p>
            </div>
          </div>

          {/* Copyright */}
          <div className="pt-8 border-t border-gray-700">
            <p className="text-[14px] text-gray-500 text-center">
              © 2026 Danbi. All rights reserved.
            </p>
          </div>
        </div>
      </footer>

      {/* Hidden app-ads.txt note */}
      {/* Note: app-ads.txt should be placed at the root level of your domain */}
      {/* Example: https://yourdomain.com/app-ads.txt */}

    </div>
  );
}
