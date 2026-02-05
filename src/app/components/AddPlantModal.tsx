import { X } from 'lucide-react';
import { useState } from 'react';

interface AddPlantModalProps {
  isOpen: boolean;
  onClose: () => void;
  onAdd: (plantData: {
    name: string;
    species: string;
    wateringFrequency: number;
  }) => void;
  isDarkMode?: boolean;
}

export function AddPlantModal({ isOpen, onClose, onAdd, isDarkMode = false }: AddPlantModalProps) {
  const [name, setName] = useState('');
  const [species, setSpecies] = useState('');
  const [wateringFrequency, setWateringFrequency] = useState(7);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (name && species) {
      onAdd({ name, species, wateringFrequency });
      setName('');
      setSpecies('');
      setWateringFrequency(7);
      onClose();
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-end sm:items-center justify-center">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/30 backdrop-blur-sm"
        onClick={onClose}
      />

      {/* Modal */}
      <div className={`relative rounded-t-[28px] sm:rounded-[28px] w-full max-w-md mx-auto p-6 animate-slide-up transition-colors ${
        isDarkMode ? 'bg-[#2A2F2A]' : 'bg-white'
      }`}>
        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <h2 className={`transition-colors ${
            isDarkMode ? 'text-[#E8DDD3]' : 'text-[#2C3E2E]'
          }`}>Add New Plant</h2>
          <button
            onClick={onClose}
            className={`w-8 h-8 rounded-full flex items-center justify-center active:scale-95 transition-all ${
              isDarkMode ? 'bg-[#3D433D]' : 'bg-[#F5F3F0]'
            }`}
          >
            <X className={`w-5 h-5 transition-colors ${
              isDarkMode ? 'text-[#9CA59D]' : 'text-[#7A8A7D]'
            }`} />
          </button>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-5">
          {/* Plant Name */}
          <div>
            <label className={`text-[14px] mb-2 block transition-colors ${
              isDarkMode ? 'text-[#9CA59D]' : 'text-[#7A8A7D]'
            }`}>
              Plant Name
            </label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="e.g., My Monstera"
              className={`w-full px-4 py-3 rounded-[12px] border-none outline-none focus:ring-2 focus:ring-[#A8B9A5] transition-all ${
                isDarkMode 
                  ? 'bg-[#3D433D] text-[#E8DDD3] placeholder:text-[#5C655D]'
                  : 'bg-[#F5F3F0] text-[#2C3E2E] placeholder:text-[#B8C4BA]'
              }`}
            />
          </div>

          {/* Plant Species */}
          <div>
            <label className={`text-[14px] mb-2 block transition-colors ${
              isDarkMode ? 'text-[#9CA59D]' : 'text-[#7A8A7D]'
            }`}>
              Species
            </label>
            <input
              type="text"
              value={species}
              onChange={(e) => setSpecies(e.target.value)}
              placeholder="e.g., Monstera Deliciosa"
              className={`w-full px-4 py-3 rounded-[12px] border-none outline-none focus:ring-2 focus:ring-[#A8B9A5] transition-all ${
                isDarkMode 
                  ? 'bg-[#3D433D] text-[#E8DDD3] placeholder:text-[#5C655D]'
                  : 'bg-[#F5F3F0] text-[#2C3E2E] placeholder:text-[#B8C4BA]'
              }`}
            />
          </div>

          {/* Watering Frequency */}
          <div>
            <label className={`text-[14px] mb-2 block transition-colors ${
              isDarkMode ? 'text-[#9CA59D]' : 'text-[#7A8A7D]'
            }`}>
              Watering Frequency
            </label>
            <div className="flex items-center gap-3">
              <input
                type="range"
                min="1"
                max="30"
                value={wateringFrequency}
                onChange={(e) => setWateringFrequency(Number(e.target.value))}
                className={`flex-1 h-2 rounded-full appearance-none [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-5 [&::-webkit-slider-thumb]:h-5 [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-[#A8B9A5] [&::-webkit-slider-thumb]:cursor-pointer [&::-moz-range-thumb]:w-5 [&::-moz-range-thumb]:h-5 [&::-moz-range-thumb]:rounded-full [&::-moz-range-thumb]:bg-[#A8B9A5] [&::-moz-range-thumb]:border-0 [&::-moz-range-thumb]:cursor-pointer ${
                  isDarkMode ? 'bg-[#3D433D]' : 'bg-[#F5F3F0]'
                }`}
              />
              <span className={`min-w-[80px] text-right transition-colors ${
                isDarkMode ? 'text-[#E8DDD3]' : 'text-[#2C3E2E]'
              }`}>
                Every {wateringFrequency} {wateringFrequency === 1 ? 'day' : 'days'}
              </span>
            </div>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={!name || !species}
            className="w-full py-4 bg-[#A8B9A5] text-white rounded-[14px] hover:bg-[#96A893] active:scale-[0.98] transition-all disabled:opacity-50 disabled:cursor-not-allowed disabled:active:scale-100"
          >
            Add Plant
          </button>
        </form>
      </div>
    </div>
  );
}
