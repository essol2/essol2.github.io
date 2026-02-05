import { Home, CalendarDays, PlusCircle, Settings } from 'lucide-react';

interface BottomNavProps {
  activeTab: string;
  onTabChange: (tab: string) => void;
  isDarkMode?: boolean;
}

export function BottomNav({ activeTab, onTabChange, isDarkMode = false }: BottomNavProps) {
  const tabs = [
    { id: 'home', label: 'My Plants', icon: Home },
    { id: 'calendar', label: 'Calendar', icon: CalendarDays },
    { id: 'add', label: 'Add', icon: PlusCircle },
    { id: 'settings', label: 'Settings', icon: Settings },
  ];

  return (
    <nav className={`fixed bottom-0 left-0 right-0 border-t safe-area-bottom transition-colors ${
      isDarkMode 
        ? 'bg-[#2A2F2A] border-[#3D433D]' 
        : 'bg-white border-[#E8DDD3]'
    }`}>
      <div className="max-w-md mx-auto px-6 py-2">
        <div className="flex items-center justify-around">
          {tabs.map((tab) => {
            const Icon = tab.icon;
            const isActive = activeTab === tab.id;

            return (
              <button
                key={tab.id}
                onClick={() => onTabChange(tab.id)}
                className="flex flex-col items-center gap-1 py-2 px-4 min-w-[60px] transition-all active:scale-95"
              >
                <Icon
                  className={`w-6 h-6 transition-colors ${
                    isActive ? 'text-[#A8B9A5]' : (isDarkMode ? 'text-[#5C655D]' : 'text-[#B8C4BA]')
                  }`}
                />
                <span
                  className={`text-[11px] transition-colors ${
                    isActive 
                      ? (isDarkMode ? 'text-[#E8DDD3]' : 'text-[#2C3E2E]')
                      : (isDarkMode ? 'text-[#5C655D]' : 'text-[#B8C4BA]')
                  }`}
                >
                  {tab.label}
                </span>
              </button>
            );
          })}
        </div>
      </div>
    </nav>
  );
}
