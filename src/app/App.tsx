import { useState, useEffect } from 'react';
import { PlantCard } from '@/app/components/PlantCard';
import { BottomNav } from '@/app/components/BottomNav';
import { WateringCalendar } from '@/app/components/WateringCalendar';
import { AddPlantModal } from '@/app/components/AddPlantModal';
import { SettingsView } from '@/app/components/SettingsView';
import { LaunchScreen } from '@/app/components/LaunchScreen';
import { AdAlert } from '@/app/components/AdAlert';
import { Widget } from '@/app/components/Widget';
import { LandingPage } from '@/app/components/LandingPage';
import { Sprout } from 'lucide-react';

interface Plant {
  id: string;
  name: string;
  species: string;
  imageUrl: string;
  lastWatered: string;
  nextWateringDays: number;
  waterProgress: number;
  wateringFrequency: number;
}

export default function App() {
  const [viewMode, setViewMode] = useState<'landing' | 'app'>('landing');
  const [activeTab, setActiveTab] = useState('home');
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [isAdAlertOpen, setIsAdAlertOpen] = useState(false);
  const [showWidget, setShowWidget] = useState(false);
  const [pendingPlantData, setPendingPlantData] = useState<{
    name: string;
    species: string;
    wateringFrequency: number;
  } | null>(null);
  const [plants, setPlants] = useState<Plant[]>([
    {
      id: '1',
      name: 'Monstera Deliciosa',
      species: 'Swiss Cheese Plant',
      imageUrl: 'https://images.unsplash.com/photo-1653404809389-f370ea4310dd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb25zdGVyYSUyMHBsYW50JTIwcG90fGVufDF8fHx8MTc2OTQ5ODc5OXww&ixlib=rb-4.1.0&q=80&w=1080',
      lastWatered: '2 days ago',
      nextWateringDays: 0,
      waterProgress: 100,
      wateringFrequency: 7,
    },
    {
      id: '2',
      name: 'Succulent Garden',
      species: 'Mixed Succulents',
      imageUrl: 'https://images.unsplash.com/photo-1619926833625-cf0a5774d520?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdWNjdWxlbnQlMjBwbGFudCUyMGluZG9vcnxlbnwxfHx8fDE3Njk1MDMyMTd8MA&ixlib=rb-4.1.0&q=80&w=1080',
      lastWatered: '5 days ago',
      nextWateringDays: 2,
      waterProgress: 65,
      wateringFrequency: 10,
    },
    {
      id: '3',
      name: 'Snake Plant',
      species: 'Sansevieria',
      imageUrl: 'https://images.unsplash.com/photo-1613498630970-f2a333cb4974?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzbmFrZSUyMHBsYW50JTIwc2Fuc2V2aWVyaWF8ZW58MXx8fHwxNzY5NDg3MTMxfDA&ixlib=rb-4.1.0&q=80&w=1080',
      lastWatered: '12 days ago',
      nextWateringDays: -1,
      waterProgress: 110,
      wateringFrequency: 14,
    },
    {
      id: '4',
      name: 'Golden Pothos',
      species: 'Devil\'s Ivy',
      imageUrl: 'https://images.unsplash.com/photo-1595524147656-eb5d0a63e9a9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwb3Rob3MlMjBwbGFudCUyMGluZG9vcnxlbnwxfHx8fDE3Njk0ODcxMzF8MA&ixlib=rb-4.1.0&q=80&w=1080',
      lastWatered: '4 days ago',
      nextWateringDays: 1,
      waterProgress: 75,
      wateringFrequency: 7,
    },
    {
      id: '5',
      name: 'Fiddle Leaf Fig',
      species: 'Ficus Lyrata',
      imageUrl: 'https://images.unsplash.com/photo-1545239705-1564e58b9e4a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmaWRkbGUlMjBsZWFmJTIwZmlnfGVufDF8fHx8MTc2OTQ4MTA2NHww&ixlib=rb-4.1.0&q=80&w=1080',
      lastWatered: '3 days ago',
      nextWateringDays: 4,
      waterProgress: 50,
      wateringFrequency: 7,
    },
  ]);

  useEffect(() => {
    // Simulate app initialization
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2500); // Show launch screen for 2.5 seconds

    return () => clearTimeout(timer);
  }, []);

  const handleTabChange = (tab: string) => {
    if (tab === 'add') {
      setIsAddModalOpen(true);
    } else {
      setActiveTab(tab);
    }
  };

  const plantsNeedingWater = plants.filter(p => p.nextWateringDays <= 0).length;

  const handleWaterPlant = (plantId: string) => {
    setPlants(
      plants.map((plant) =>
        plant.id === plantId
          ? {
              ...plant,
              lastWatered: 'Today',
              nextWateringDays: plant.wateringFrequency,
              waterProgress: 0,
            }
          : plant
      )
    );
  };

  const handleAddPlant = (plantData: {
    name: string;
    species: string;
    wateringFrequency: number;
  }) => {
    // Check if user has reached the free limit (3 plants)
    if (plants.length >= 3) {
      setPendingPlantData(plantData);
      setIsAddModalOpen(false);
      setIsAdAlertOpen(true);
      return;
    }

    // Add plant directly if under the limit
    const newPlant: Plant = {
      id: Date.now().toString(),
      name: plantData.name,
      species: plantData.species,
      imageUrl: 'https://images.unsplash.com/photo-1653404809389-f370ea4310dd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb25zdGVyYSUyMHBsYW50JTIwcG90fGVufDF8fHx8MTc2OTQ5ODc5OXww&ixlib=rb-4.1.0&q=80&w=1080',
      lastWatered: 'Today',
      nextWateringDays: plantData.wateringFrequency,
      waterProgress: 0,
      wateringFrequency: plantData.wateringFrequency,
    };
    setPlants([...plants, newPlant]);
  };

  const handleWatchAd = () => {
    // Simulate watching an ad
    console.log('Watching ad...');
    
    // After ad is "watched", add the pending plant
    if (pendingPlantData) {
      const newPlant: Plant = {
        id: Date.now().toString(),
        name: pendingPlantData.name,
        species: pendingPlantData.species,
        imageUrl: 'https://images.unsplash.com/photo-1653404809389-f370ea4310dd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb25zdGVyYSUyMHBsYW50JTIwcG90fGVufDF8fHx8MTc2OTQ5ODc5OXww&ixlib=rb-4.1.0&q=80&w=1080',
        lastWatered: 'Today',
        nextWateringDays: pendingPlantData.wateringFrequency,
        waterProgress: 0,
        wateringFrequency: pendingPlantData.wateringFrequency,
      };
      setPlants([...plants, newPlant]);
      setPendingPlantData(null);
    }
    
    setIsAdAlertOpen(false);
  };

  const handleCloseAdAlert = () => {
    setIsAdAlertOpen(false);
    setPendingPlantData(null);
  };

  // Show landing page by default
  if (viewMode === 'landing') {
    return <LandingPage onViewApp={() => setViewMode('app')} />;
  }

  // Show launch screen while loading
  if (isLoading) {
    return <LaunchScreen isDarkMode={isDarkMode} />;
  }

  return (
    <div 
      className={`min-h-screen transition-colors duration-300 ${
        isDarkMode ? 'bg-[#1A1D1A]' : 'bg-[#F5F3F0]'
      }`} 
      style={{ fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Display", "SF Pro Text", "Helvetica Neue", Arial, sans-serif' }}
    >
      {/* Status Bar Spacer */}
      <div className={`h-12 transition-colors duration-300 ${isDarkMode ? 'bg-[#1A1D1A]' : 'bg-[#F5F3F0]'}`} />

      {/* Back to Landing Button */}
      <div className="max-w-md mx-auto px-5 pt-2">
        <button
          onClick={() => setViewMode('landing')}
          className={`text-[13px] px-3 py-1.5 rounded-lg transition-colors ${
            isDarkMode ? 'text-[#9CA59D] hover:bg-[#2A2F2A]' : 'text-[#7A8A7D] hover:bg-white'
          }`}
        >
          ← Back to Landing Page
        </button>
      </div>

      {/* Main Content */}
      <div className="max-w-md mx-auto px-5 pb-24">
        {/* Header */}
        <div className="mb-6">
          <div className="flex items-center gap-2 mb-2">
            <Sprout className={`w-7 h-7 transition-colors ${isDarkMode ? 'text-[#A8B9A5]' : 'text-[#A8B9A5]'}`} />
            <h1 className={`text-[28px] transition-colors ${isDarkMode ? 'text-[#E8DDD3]' : 'text-[#2C3E2E]'}`}>Danbi</h1>
          </div>
          <p className={`text-[15px] transition-colors ${isDarkMode ? 'text-[#9CA59D]' : 'text-[#7A8A7D]'}`}>
            {activeTab === 'home' && 'Take care of your green friends'}
            {activeTab === 'calendar' && 'Your watering schedule'}
            {activeTab === 'settings' && 'Manage your preferences'}
          </p>
        </div>

        {/* Content Based on Active Tab */}
        {activeTab === 'home' && (
          <div className="space-y-4">
            {/* Plants Needing Water */}
            {plants.filter(p => p.nextWateringDays <= 0).length > 0 && (
              <div className={`rounded-[16px] p-4 mb-6 transition-colors ${
                isDarkMode 
                  ? 'bg-[#3D2A1F] border border-[#5C4230]' 
                  : 'bg-[#FFF5ED] border border-[#FFD4B8]'
              }`}>
                <p className={`text-[14px] transition-colors ${
                  isDarkMode ? 'text-[#FFB89A]' : 'text-[#D4735C]'
                }`}>
                  🌵 {plants.filter(p => p.nextWateringDays <= 0).length} {plants.filter(p => p.nextWateringDays <= 0).length === 1 ? 'plant needs' : 'plants need'} water today
                </p>
              </div>
            )}

            {/* Plant Cards */}
            {plants.map((plant) => (
              <PlantCard
                key={plant.id}
                name={plant.name}
                species={plant.species}
                imageUrl={plant.imageUrl}
                lastWatered={plant.lastWatered}
                nextWateringDays={plant.nextWateringDays}
                waterProgress={plant.waterProgress}
                onWater={() => handleWaterPlant(plant.id)}
                isDarkMode={isDarkMode}
              />
            ))}
          </div>
        )}

        {activeTab === 'calendar' && <WateringCalendar isDarkMode={isDarkMode} />}

        {activeTab === 'settings' && !showWidget && (
          <SettingsView 
            isDarkMode={isDarkMode} 
            onToggleDarkMode={() => setIsDarkMode(!isDarkMode)}
            plantCount={plants.length}
            onShowWidget={() => setShowWidget(true)}
          />
        )}

        {activeTab === 'settings' && showWidget && (
          <>
            <button
              onClick={() => setShowWidget(false)}
              className={`mb-4 px-4 py-2 rounded-[12px] flex items-center gap-2 transition-colors ${
                isDarkMode ? 'bg-[#2A2F2A] text-[#E8DDD3]' : 'bg-white text-[#2C3E2E]'
              }`}
            >
              ← 설정으로 돌아가기
            </button>
            <Widget plantsNeedingWater={plantsNeedingWater} isDarkMode={isDarkMode} />
          </>
        )}
      </div>

      {/* Bottom Navigation */}
      <BottomNav activeTab={activeTab} onTabChange={handleTabChange} isDarkMode={isDarkMode} />

      {/* Add Plant Modal */}
      <AddPlantModal
        isOpen={isAddModalOpen}
        onClose={() => setIsAddModalOpen(false)}
        onAdd={handleAddPlant}
        isDarkMode={isDarkMode}
      />

      {/* Ad Alert */}
      <AdAlert
        isOpen={isAdAlertOpen}
        onClose={handleCloseAdAlert}
        onWatchAd={handleWatchAd}
        isDarkMode={isDarkMode}
      />
    </div>
  );
}
