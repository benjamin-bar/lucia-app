import React, { useState } from 'react';
import { Home, Bell, QrCode, Video, AlertCircle, User, ChevronRight, Camera, Shield, Menu, X, Wifi, Battery, Clock, Settings } from 'lucide-react';

const LuciaApp = () => {
  const [activeScreen, setActiveScreen] = useState('home');
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeCamera, setActiveCamera] = useState('camera1');

  const SideMenu = () => (
    <>
      <div 
        className={`fixed inset-0 bg-black/60 z-40 transition-opacity ${menuOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
        onClick={() => setMenuOpen(false)}
      />
      <div className={`fixed top-0 left-0 bottom-0 w-80 bg-zinc-900 z-50 transform transition-transform ${menuOpen ? 'translate-x-0' : '-translate-x-full'}`}>
        <div className="bg-zinc-950 px-6 pt-12 pb-6 border-b border-zinc-800">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h1 className="text-white text-2xl font-bold">LUCIA</h1>
              <p className="text-zinc-400 text-sm">AI Fall Detection</p>
            </div>
            <button onClick={() => setMenuOpen(false)} className="text-zinc-400 hover:text-white transition">
              <X size={24} />
            </button>
          </div>
        </div>

        <div className="px-4 py-4 flex-1 overflow-y-auto" style={{maxHeight: 'calc(100vh - 200px)'}}>
          <div className="space-y-1 mb-6">
            <button 
              onClick={() => { setActiveScreen('home'); setMenuOpen(false); }}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition ${activeScreen === 'home' ? 'bg-zinc-800 text-white' : 'text-zinc-400 hover:bg-zinc-800/50 hover:text-white'}`}
            >
              <Home size={22} />
              <span className="font-medium">Home</span>
            </button>

            <button 
              onClick={() => { setActiveScreen('scan'); setMenuOpen(false); }}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition ${activeScreen === 'scan' ? 'bg-zinc-800 text-white' : 'text-zinc-400 hover:bg-zinc-800/50 hover:text-white'}`}
            >
              <QrCode size={22} />
              <span className="font-medium">Scan QR</span>
            </button>

            <button 
              onClick={() => { setActiveScreen('notifications'); setMenuOpen(false); }}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition relative ${activeScreen === 'notifications' ? 'bg-zinc-800 text-white' : 'text-zinc-400 hover:bg-zinc-800/50 hover:text-white'}`}
            >
              <Bell size={22} />
              <span className="font-medium">Alerts</span>
              <div className="w-2 h-2 bg-red-500 rounded-full absolute right-4"></div>
            </button>
          </div>

          <div className="border-t border-zinc-800 pt-4">
            <h3 className="text-xs font-semibold text-zinc-500 uppercase tracking-wide mb-3 px-4">Camera Feeds</h3>
            <div className="space-y-1">
              <button 
                onClick={() => { setActiveCamera('camera1'); setActiveScreen('home'); setMenuOpen(false); }}
                className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition ${activeCamera === 'camera1' ? 'bg-zinc-800 text-white' : 'text-zinc-400 hover:bg-zinc-800/50 hover:text-white'}`}
              >
                <Camera size={20} />
                <div className="flex-1 text-left">
                  <div className="font-medium">Camera 1</div>
                  <div className="text-xs text-zinc-500">Living Room</div>
                </div>
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
              </button>

              <button 
                onClick={() => { setActiveCamera('camera2'); setActiveScreen('home'); setMenuOpen(false); }}
                className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition ${activeCamera === 'camera2' ? 'bg-zinc-800 text-white' : 'text-zinc-400 hover:bg-zinc-800/50 hover:text-white'}`}
              >
                <Camera size={20} />
                <div className="flex-1 text-left">
                  <div className="font-medium">Camera 2</div>
                  <div className="text-xs text-zinc-500">Bedroom</div>
                </div>
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
              </button>

              <button 
                onClick={() => { setActiveCamera('camera3'); setActiveScreen('home'); setMenuOpen(false); }}
                className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition ${activeCamera === 'camera3' ? 'bg-zinc-800 text-white' : 'text-zinc-400 hover:bg-zinc-800/50 hover:text-white'}`}
              >
                <Camera size={20} />
                <div className="flex-1 text-left">
                  <div className="font-medium">Camera 3</div>
                  <div className="text-xs text-zinc-500">Kitchen</div>
                </div>
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
              </button>

              <button 
                onClick={() => { setActiveCamera('camera4'); setActiveScreen('home'); setMenuOpen(false); }}
                className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition ${activeCamera === 'camera4' ? 'bg-zinc-800 text-white' : 'text-zinc-400 hover:bg-zinc-800/50 hover:text-white'}`}
              >
                <Camera size={20} />
                <div className="flex-1 text-left">
                  <div className="font-medium">Camera 4</div>
                  <div className="text-xs text-zinc-500">Bathroom</div>
                </div>
                <div className="w-2 h-2 bg-zinc-600 rounded-full"></div>
              </button>
            </div>
          </div>
        </div>

        <div className="border-t border-zinc-800 p-4">
          <div className="bg-zinc-800 rounded-lg p-3 flex items-center gap-3">
            <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-orange-600 rounded-full flex items-center justify-center text-white font-semibold">
              AC
            </div>
            <div className="flex-1">
              <h3 className="font-semibold text-white">Abuela Carmen</h3>
              <p className="text-sm text-zinc-400">Protected person</p>
            </div>
            <button className="text-zinc-400 hover:text-white transition">
              <Settings size={20} />
            </button>
          </div>
        </div>
      </div>
    </>
  );

  const getCameraName = (cameraId) => {
    const cameras = {
      camera1: 'Living Room',
      camera2: 'Bedroom',
      camera3: 'Kitchen',
      camera4: 'Bathroom'
    };
    return cameras[cameraId] || 'Camera';
  };

  const HomeScreen = () => (
    <div className="bg-zinc-900 min-h-screen">
      <div className="bg-zinc-950 px-6 pt-12 pb-8 border-b border-zinc-800">
        <div className="flex items-center justify-between mb-6">
          <button onClick={() => setMenuOpen(true)} className="text-white">
            <Menu size={28} />
          </button>
          <div className="flex-1 text-center">
            <h1 className="text-white text-2xl font-bold">LUCIA</h1>
            <p className="text-zinc-400 text-sm">AI Fall Detection</p>
          </div>
          <div className="w-10 h-10 bg-zinc-800 rounded-full flex items-center justify-center">
            <Shield size={20} className="text-white" />
          </div>
        </div>
      </div>

      <div className="px-6 py-6">
        <div className="bg-zinc-800 rounded-2xl border border-zinc-700 p-6 mb-6">
          <div className="flex items-center justify-between mb-4">
            <div>
              <h2 className="text-lg font-semibold text-white">{getCameraName(activeCamera)}</h2>
              <p className="text-sm text-zinc-400">Camera {activeCamera.slice(-1)}</p>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
              <span className="text-sm text-green-400 font-medium">Live</span>
            </div>
          </div>
          
          <div className="bg-black rounded-xl aspect-video mb-4 relative overflow-hidden flex items-center justify-center border border-zinc-700">
            <Video size={48} className="text-zinc-700" />
            <div className="absolute top-3 left-3 bg-red-500 text-white text-xs px-2 py-1 rounded flex items-center gap-1">
              <div className="w-1.5 h-1.5 bg-white rounded-full"></div>
              REC
            </div>
            <div className="absolute top-3 right-3 flex gap-2">
              <div className="bg-black/50 backdrop-blur px-2 py-1 rounded text-white text-xs flex items-center gap-1">
                <Wifi size={12} />
              </div>
              <div className="bg-black/50 backdrop-blur px-2 py-1 rounded text-white text-xs">
                HD
              </div>
            </div>
            <div className="absolute bottom-3 left-3 bg-black/50 backdrop-blur px-2 py-1 rounded text-white text-xs flex items-center gap-1">
              <Clock size={12} />
              14:32:18
            </div>
          </div>

          <div className="grid grid-cols-2 gap-3">
            <div className="text-center">
              <div className="text-2xl font-bold text-white">24h</div>
              <div className="text-xs text-zinc-400">Monitoring</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-white">98%</div>
              <div className="text-xs text-zinc-400">AI Accuracy</div>
            </div>
          </div>
        </div>

        <div className="bg-zinc-800 rounded-2xl border border-zinc-700 p-4 mb-4">
          <h3 className="font-semibold text-white mb-3">Quick Actions</h3>
          <div className="grid grid-cols-2 gap-3">
            <button className="bg-white text-black rounded-lg py-3 px-4 font-medium text-sm flex items-center justify-center gap-2 hover:bg-zinc-100 transition">
              <Camera size={18} />
              Fullscreen
            </button>
            <button className="bg-zinc-700 text-white rounded-lg py-3 px-4 font-medium text-sm flex items-center justify-center gap-2 border border-zinc-600 hover:bg-zinc-600 transition">
              <AlertCircle size={18} />
              Test Alert
            </button>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-3 mb-6">
          <div className="bg-zinc-800 rounded-xl p-4 border border-zinc-700">
            <div className="flex items-center gap-2 mb-2">
              <Camera size={16} className="text-white" />
              <span className="text-xs font-semibold text-zinc-400">Active Cameras</span>
            </div>
            <div className="text-2xl font-bold text-white">3/4</div>
          </div>

          <div className="bg-zinc-800 rounded-xl p-4 border border-zinc-700">
            <div className="flex items-center gap-2 mb-2">
              <Battery size={16} className="text-white" />
              <span className="text-xs font-semibold text-zinc-400">Battery</span>
            </div>
            <div className="text-2xl font-bold text-white">85%</div>
          </div>
        </div>

        <div className="bg-zinc-800 rounded-2xl p-4 border border-zinc-700">
          <div className="flex items-start justify-between">
            <div>
              <h3 className="font-semibold text-white mb-1">AI Protection Active</h3>
              <p className="text-sm text-zinc-400">Monitoring for falls 24/7</p>
            </div>
            <Shield size={32} className="text-zinc-600" />
          </div>
        </div>
      </div>
    </div>
  );

  const ScanQRScreen = () => (
    <div className="bg-zinc-900 min-h-screen">
      <div className="bg-zinc-950 px-6 pt-12 pb-6 border-b border-zinc-800">
        <div className="flex items-center gap-4 mb-4">
          <button onClick={() => setMenuOpen(true)} className="text-white">
            <Menu size={28} />
          </button>
          <div>
            <h1 className="text-white text-2xl font-bold">Connect Camera</h1>
            <p className="text-zinc-400 text-sm">Scan QR to pair device</p>
          </div>
        </div>
      </div>

      <div className="px-6 py-6">
        <div className="bg-zinc-800 rounded-2xl p-6 border border-zinc-700 mb-6">
          <div className="w-full aspect-square bg-black rounded-xl flex items-center justify-center relative overflow-hidden mb-4 border border-zinc-700">
            <div className="absolute inset-8 border-4 border-zinc-700 rounded-xl">
              <div className="absolute -top-1 -left-1 w-8 h-8 border-t-4 border-l-4 border-zinc-600 rounded-tl-xl"></div>
              <div className="absolute -top-1 -right-1 w-8 h-8 border-t-4 border-r-4 border-zinc-600 rounded-tr-xl"></div>
              <div className="absolute -bottom-1 -left-1 w-8 h-8 border-b-4 border-l-4 border-zinc-600 rounded-bl-xl"></div>
              <div className="absolute -bottom-1 -right-1 w-8 h-8 border-b-4 border-r-4 border-zinc-600 rounded-br-xl"></div>
            </div>
            <QrCode size={80} className="text-zinc-700 z-10" />
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-black/70 backdrop-blur px-4 py-2 rounded-full">
              <p className="text-white text-xs">Align QR code</p>
            </div>
          </div>
          
          <button className="w-full bg-white text-black rounded-lg py-3 font-semibold mb-3 hover:bg-zinc-100 transition">
            <Camera className="inline mr-2" size={20} />
            Open Camera
          </button>
        </div>

        <div className="bg-zinc-800 rounded-2xl p-6 border border-zinc-700">
          <h3 className="font-semibold text-white mb-3 text-center">Manual Setup</h3>
          <p className="text-sm text-zinc-400 text-center mb-4">Enter camera ID manually</p>
          <input 
            type="text" 
            placeholder="CAM-XXXX-XXXX" 
            className="w-full bg-zinc-900 border border-zinc-700 rounded-lg px-4 py-3 text-center font-mono text-white mb-3 focus:outline-none focus:border-zinc-600"
          />
          <button className="w-full bg-zinc-700 text-white rounded-lg py-3 font-semibold border border-zinc-600 hover:bg-zinc-600 transition">
            Connect Camera
          </button>
        </div>

        <div className="mt-6 bg-zinc-800 border border-zinc-700 rounded-xl p-4">
          <h3 className="font-semibold text-white text-sm mb-2">How to connect:</h3>
          <ul className="space-y-2 text-xs text-zinc-400">
            <li className="flex items-start gap-2">
              <span className="font-bold text-white">1.</span>
              <span>Power on your LUCIA camera</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="font-bold text-white">2.</span>
              <span>Wait for the blue LED to blink</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="font-bold text-white">3.</span>
              <span>Scan the QR code on the camera</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );

  const NotificationsScreen = () => (
    <div className="bg-zinc-900 min-h-screen">
      <div className="bg-zinc-950 px-6 pt-12 pb-6 border-b border-zinc-800">
        <div className="flex items-center gap-4 mb-4">
          <button onClick={() => setMenuOpen(true)} className="text-white">
            <Menu size={28} />
          </button>
          <div>
            <h1 className="text-white text-2xl font-bold">Notifications</h1>
            <p className="text-zinc-400 text-sm">Alert history</p>
          </div>
        </div>
      </div>

      <div className="px-6 py-4">
        <h2 className="text-xs font-semibold text-zinc-500 uppercase tracking-wide mb-3">Today</h2>
        
        <div className="space-y-3 mb-6">
          <div className="bg-zinc-800 border border-zinc-700 rounded-xl p-4 flex gap-3">
            <div className="w-10 h-10 bg-zinc-700 rounded-full flex items-center justify-center flex-shrink-0">
              <Shield size={20} className="text-green-400" />
            </div>
            <div className="flex-1">
              <div className="flex items-start justify-between mb-1">
                <h3 className="font-semibold text-white">System Active</h3>
                <span className="text-xs text-zinc-400">2:30 PM</span>
              </div>
              <p className="text-sm text-zinc-400">AI monitoring started successfully</p>
            </div>
          </div>

          <div className="bg-zinc-800 border border-zinc-700 rounded-xl p-4 flex gap-3">
            <div className="w-10 h-10 bg-zinc-700 rounded-full flex items-center justify-center flex-shrink-0">
              <Camera size={20} className="text-blue-400" />
            </div>
            <div className="flex-1">
              <div className="flex items-start justify-between mb-1">
                <h3 className="font-semibold text-white">Camera Connected</h3>
                <span className="text-xs text-zinc-400">8:15 AM</span>
              </div>
              <p className="text-sm text-zinc-400">Living room camera online</p>
            </div>
          </div>
        </div>

        <h2 className="text-xs font-semibold text-zinc-500 uppercase tracking-wide mb-3">Yesterday</h2>
        
        <div className="space-y-3">
          <div className="bg-zinc-800 border border-zinc-700 rounded-xl p-4 flex gap-3">
            <div className="w-10 h-10 bg-zinc-700 rounded-full flex items-center justify-center flex-shrink-0">
              <AlertCircle size={20} className="text-red-400" />
            </div>
            <div className="flex-1">
              <div className="flex items-start justify-between mb-1">
                <h3 className="font-semibold text-white">Fall Detected</h3>
                <span className="text-xs text-zinc-400">3:42 PM</span>
              </div>
              <p className="text-sm text-zinc-400 mb-2">Emergency contacts notified</p>
              <div className="flex gap-2">
                <button className="text-xs bg-white text-black px-3 py-1 rounded-lg font-medium hover:bg-zinc-100 transition">
                  View Details
                </button>
                <button className="text-xs bg-zinc-700 text-white px-3 py-1 rounded-lg font-medium border border-zinc-600 hover:bg-zinc-600 transition">
                  False Alarm
                </button>
              </div>
            </div>
          </div>

          <div className="bg-zinc-800 border border-zinc-700 rounded-xl p-4 flex gap-3">
            <div className="w-10 h-10 bg-zinc-700 rounded-full flex items-center justify-center flex-shrink-0">
              <Battery size={20} className="text-yellow-400" />
            </div>
            <div className="flex-1">
              <div className="flex items-start justify-between mb-1">
                <h3 className="font-semibold text-white">Low Battery</h3>
                <span className="text-xs text-zinc-400">10:20 AM</span>
              </div>
              <p className="text-sm text-zinc-400">Camera battery at 15%</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <div className="max-w-md mx-auto bg-zinc-900 min-h-screen relative">
      <SideMenu />
      {activeScreen === 'home' && <HomeScreen />}
      {activeScreen === 'scan' && <ScanQRScreen />}
      {activeScreen === 'notifications' && <NotificationsScreen />}
    </div>
  );
};

export default LuciaApp;