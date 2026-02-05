import { Bell, Moon, Mail, Info, ChevronRight, Smartphone } from 'lucide-react';

interface SettingsViewProps {
  isDarkMode?: boolean;
  onToggleDarkMode?: () => void;
  plantCount?: number;
  onShowWidget?: () => void;
}

export function SettingsView({ isDarkMode = false, onToggleDarkMode, plantCount = 5, onShowWidget }: SettingsViewProps) {
  const handleSendFeedback = () => {
    // 이메일 클라이언트 열기
    window.location.href = 'mailto:developer@danbi.app?subject=Danbi 앱 피드백';
  };

  const settingsGroups = [
    {
      title: '알림',
      items: [
        {
          icon: Bell,
          label: '물주기 알림',
          value: '켜짐',
          hasChevron: true,
          onClick: () => console.log('물주기 알림 설정'),
        },
      ],
    },
    {
      title: '테마',
      items: [
        {
          icon: Moon,
          label: '다크 모드',
          value: isDarkMode ? '켜짐' : '꺼짐',
          hasChevron: true,
          onClick: onToggleDarkMode || (() => {}),
        },
      ],
    },
    {
      title: '위젯',
      items: [
        {
          icon: Smartphone,
          label: '위젯 미리보기',
          hasChevron: true,
          onClick: onShowWidget || (() => {}),
        },
      ],
    },
    {
      title: '지원',
      items: [
        {
          icon: Mail,
          label: '개발자에게 의견 보내기',
          hasChevron: true,
          onClick: handleSendFeedback,
        },
        {
          icon: Info,
          label: 'Danbi 정보',
          hasChevron: true,
          onClick: () => console.log('앱 정보'),
        },
      ],
    },
  ];

  return (
    <div className="space-y-6">
      {/* Profile Section */}
      <div className={`rounded-[20px] p-6 flex items-center gap-4 transition-colors ${
        isDarkMode ? 'bg-[#2A2F2A]' : 'bg-white'
      }`}>
        <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[#A8B9A5] to-[#8FA08C] flex items-center justify-center">
          <span className="text-white text-[24px]">🌱</span>
        </div>
        <div className="flex-1">
          <h3 className={`mb-1 transition-colors ${
            isDarkMode ? 'text-[#E8DDD3]' : 'text-[#2C3E2E]'
          }`}>식물 애호가</h3>
          <p className={`text-[14px] transition-colors ${
            isDarkMode ? 'text-[#9CA59D]' : 'text-[#7A8A7D]'
          }`}>내 정원에 {plantCount}개의 식물</p>
        </div>
        <ChevronRight className={`w-5 h-5 transition-colors ${
          isDarkMode ? 'text-[#5C655D]' : 'text-[#B8C4BA]'
        }`} />
      </div>

      {/* Settings Groups */}
      {settingsGroups.map((group, groupIndex) => (
        <div key={groupIndex}>
          <h4 className={`text-[14px] mb-3 px-1 transition-colors ${
            isDarkMode ? 'text-[#9CA59D]' : 'text-[#7A8A7D]'
          }`}>{group.title}</h4>
          <div className={`rounded-[20px] overflow-hidden transition-colors ${
            isDarkMode ? 'bg-[#2A2F2A]' : 'bg-white'
          }`}>
            {group.items.map((item, itemIndex) => {
              const Icon = item.icon;
              const isLast = itemIndex === group.items.length - 1;

              return (
                <button
                  key={itemIndex}
                  onClick={item.onClick}
                  className={`w-full flex items-center gap-4 p-4 transition-colors ${
                    isDarkMode 
                      ? 'hover:bg-[#3D433D] active:bg-[#4A514A]' 
                      : 'hover:bg-[#F5F3F0] active:bg-[#E8DDD3]'
                  } ${!isLast ? (isDarkMode ? 'border-b border-[#3D433D]' : 'border-b border-[#F5F3F0]') : ''}`}
                >
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center transition-colors ${
                    isDarkMode ? 'bg-[#3D433D]' : 'bg-[#F5F3F0]'
                  }`}>
                    <Icon className={`w-5 h-5 transition-colors ${
                      isDarkMode ? 'text-[#9CA59D]' : 'text-[#7A8A7D]'
                    }`} />
                  </div>
                  <span className={`flex-1 text-left transition-colors ${
                    isDarkMode ? 'text-[#E8DDD3]' : 'text-[#2C3E2E]'
                  }`}>
                    {item.label}
                  </span>
                  {item.value && (
                    <span className={`text-[14px] transition-colors ${
                      isDarkMode ? 'text-[#9CA59D]' : 'text-[#7A8A7D]'
                    }`}>
                      {item.value}
                    </span>
                  )}
                  {item.hasChevron && (
                    <ChevronRight className={`w-5 h-5 transition-colors ${
                      isDarkMode ? 'text-[#5C655D]' : 'text-[#B8C4BA]'
                    }`} />
                  )}
                </button>
              );
            })}
          </div>
        </div>
      ))}

      {/* App Version */}
      <div className={`rounded-[20px] p-6 transition-colors ${
        isDarkMode ? 'bg-[#2A2F2A]' : 'bg-white'
      }`}>
        <div className="flex items-center justify-between">
          <span className={`text-[14px] transition-colors ${
            isDarkMode ? 'text-[#9CA59D]' : 'text-[#7A8A7D]'
          }`}>앱 버전</span>
          <span className={`text-[14px] transition-colors ${
            isDarkMode ? 'text-[#E8DDD3]' : 'text-[#2C3E2E]'
          }`}>1.0.0</span>
        </div>
      </div>

      {/* Footer */}
      <div className="text-center pt-4 pb-2">
        <p className={`text-[13px] transition-colors ${
          isDarkMode ? 'text-[#5C655D]' : 'text-[#B8C4BA]'
        }`}>
          Made with 🌿 by Danbi Team
        </p>
      </div>
    </div>
  );
}
