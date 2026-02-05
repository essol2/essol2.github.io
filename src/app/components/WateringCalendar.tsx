import { Droplet } from 'lucide-react';

interface WateringEvent {
  date: string;
  plantName: string;
  isDone: boolean;
}

interface WateringCalendarProps {
  isDarkMode?: boolean;
}

const generateCalendarDays = () => {
  const days = [];
  const today = new Date(2026, 0, 27); // Tuesday, January 27, 2026
  
  // Get the start of the week (Sunday)
  const startOfWeek = new Date(today);
  startOfWeek.setDate(today.getDate() - today.getDay());
  
  for (let i = 0; i < 7; i++) {
    const date = new Date(startOfWeek);
    date.setDate(startOfWeek.getDate() + i);
    days.push(date);
  }
  
  return days;
};

const weekDays = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

export function WateringCalendar({ isDarkMode = false }: WateringCalendarProps) {
  const calendarDays = generateCalendarDays();
  const today = new Date(2026, 0, 27);

  const upcomingEvents: WateringEvent[] = [
    { date: 'Today', plantName: 'Monstera Deliciosa', isDone: false },
    { date: 'Today', plantName: 'Snake Plant', isDone: true },
    { date: 'Tomorrow', plantName: 'Golden Pothos', isDone: false },
    { date: 'Jan 29', plantName: 'Succulent Garden', isDone: false },
  ];

  return (
    <div className="space-y-6">
      {/* Week Calendar */}
      <div className={`rounded-[20px] p-5 transition-colors ${
        isDarkMode ? 'bg-[#2A2F2A]' : 'bg-white'
      }`}>
        <h3 className={`mb-4 transition-colors ${
          isDarkMode ? 'text-[#E8DDD3]' : 'text-[#2C3E2E]'
        }`}>This Week</h3>
        <div className="grid grid-cols-7 gap-2">
          {calendarDays.map((date, index) => {
            const isToday = date.toDateString() === today.toDateString();
            const hasEvent = isToday || date.getDay() === 3 || date.getDay() === 4;

            return (
              <div key={index} className="flex flex-col items-center">
                <span className={`text-[12px] mb-2 transition-colors ${
                  isDarkMode ? 'text-[#9CA59D]' : 'text-[#7A8A7D]'
                }`}>
                  {weekDays[date.getDay()]}
                </span>
                <div
                  className={`w-10 h-10 rounded-full flex items-center justify-center relative transition-all ${
                    isToday
                      ? 'bg-[#A8B9A5] text-white'
                      : (isDarkMode ? 'text-[#E8DDD3]' : 'text-[#2C3E2E]')
                  }`}
                >
                  <span className="text-[15px]">{date.getDate()}</span>
                  {hasEvent && !isToday && (
                    <div className="absolute bottom-1 w-1 h-1 bg-[#A8B9A5] rounded-full" />
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Upcoming Watering */}
      <div>
        <h3 className={`mb-3 px-1 transition-colors ${
          isDarkMode ? 'text-[#E8DDD3]' : 'text-[#2C3E2E]'
        }`}>Upcoming</h3>
        <div className="space-y-3">
          {upcomingEvents.map((event, index) => (
            <div
              key={index}
              className={`rounded-[16px] p-4 flex items-center justify-between transition-colors ${
                isDarkMode ? 'bg-[#2A2F2A]' : 'bg-white'
              }`}
            >
              <div className="flex items-center gap-3">
                <div
                  className={`w-10 h-10 rounded-full flex items-center justify-center ${
                    event.isDone 
                      ? (isDarkMode ? 'bg-[#3D433D]' : 'bg-[#E8DDD3]')
                      : 'bg-[#A8B9A5]'
                  }`}
                >
                  <Droplet
                    className={`w-5 h-5 ${
                      event.isDone 
                        ? (isDarkMode ? 'text-[#9CA59D]' : 'text-[#7A8A7D]')
                        : 'text-white fill-white'
                    }`}
                  />
                </div>
                <div>
                  <p className={`transition-colors ${
                    isDarkMode ? 'text-[#E8DDD3]' : 'text-[#2C3E2E]'
                  }`}>{event.plantName}</p>
                  <p className={`text-[13px] transition-colors ${
                    isDarkMode ? 'text-[#9CA59D]' : 'text-[#7A8A7D]'
                  }`}>{event.date}</p>
                </div>
              </div>
              {event.isDone && (
                <span className="text-[13px] text-[#A8B9A5]">Done</span>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
