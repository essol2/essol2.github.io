import { Droplet } from 'lucide-react';

interface PlantCardProps {
  name: string;
  species: string;
  imageUrl: string;
  lastWatered: string;
  nextWateringDays: number;
  waterProgress: number;
  onWater: () => void;
  isDarkMode?: boolean;
}

export function PlantCard({
  name,
  species,
  imageUrl,
  lastWatered,
  nextWateringDays,
  waterProgress,
  onWater,
  isDarkMode = false,
}: PlantCardProps) {
  const isOverdue = nextWateringDays < 0;
  const needsWater = nextWateringDays === 0;

  return (
    <div className={`rounded-[20px] overflow-hidden shadow-sm transition-colors ${
      isDarkMode ? 'bg-[#2A2F2A]' : 'bg-white'
    }`}>
      {/* Plant Image */}
      <div className="relative h-[180px] overflow-hidden">
        <img
          src={imageUrl}
          alt={name}
          className="w-full h-full object-cover"
        />
      </div>

      {/* Plant Info */}
      <div className="p-5">
        <div className="flex items-start justify-between mb-3">
          <div className="flex-1">
            <h3 className={`mb-1 transition-colors ${
              isDarkMode ? 'text-[#E8DDD3]' : 'text-[#2C3E2E]'
            }`}>{name}</h3>
            <p className={`text-[14px] transition-colors ${
              isDarkMode ? 'text-[#9CA59D]' : 'text-[#7A8A7D]'
            }`}>{species}</p>
          </div>
          <button
            onClick={onWater}
            className="flex items-center justify-center w-12 h-12 rounded-full bg-[#A8B9A5] hover:bg-[#96A893] active:scale-95 transition-all"
          >
            <Droplet className="w-5 h-5 text-white fill-white" />
          </button>
        </div>

        {/* Progress Bar */}
        <div className="mb-3">
          <div className={`h-2 rounded-full overflow-hidden transition-colors ${
            isDarkMode ? 'bg-[#3D433D]' : 'bg-[#F5F3F0]'
          }`}>
            <div
              className="h-full bg-[#A8B9A5] rounded-full transition-all duration-300"
              style={{ width: `${Math.min(waterProgress, 100)}%` }}
            />
          </div>
        </div>

        {/* Watering Status */}
        <div className="flex items-center justify-between text-[14px]">
          <span className={`transition-colors ${
            isDarkMode ? 'text-[#9CA59D]' : 'text-[#7A8A7D]'
          }`}>Last watered {lastWatered}</span>
          {isOverdue ? (
            <span className={`transition-colors ${
              isDarkMode ? 'text-[#FFB89A]' : 'text-[#D4735C]'
            }`}>Overdue!</span>
          ) : needsWater ? (
            <span className="text-[#A8B9A5]">Water today</span>
          ) : (
            <span className={`transition-colors ${
              isDarkMode ? 'text-[#9CA59D]' : 'text-[#7A8A7D]'
            }`}>In {nextWateringDays} days</span>
          )}
        </div>
      </div>
    </div>
  );
}
