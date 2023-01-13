import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { FiSettings } from 'react-icons/fi';
import { TooltipComponent } from '@syncfusion/ej2-react-popups';
import { SignIn,Footer,  ThemeSettings } from './components';
import { Margin,  Navibar, Dashboard, Invest, Loan, Swap, Earn, Spot } from './pages';
import './App.css';
import './css/swap.css'
import { useStateContext } from './contexts/ContextProvider';




const App = () => {
  const { setCurrentColor, setCurrentMode, currentMode,  currentColor, themeSettings, setThemeSettings } = useStateContext();



  useEffect(() => {
    const currentThemeColor = localStorage.getItem('colorMode');
    const currentThemeMode = localStorage.getItem('themeMode');
    if (currentThemeColor && currentThemeMode) {
      setCurrentColor(currentThemeColor);
      setCurrentMode(currentThemeMode);
    }
  }, []);

/*
  if(!token) {
    return <Login setToken={setToken} />
  }
*/
  return (
    <div className={currentMode === 'Dark' ? 'dark' : ''}>
      <BrowserRouter>
        <div className="flex relative  dark:bg-main-dark-bg">
          <div className="fixed right-4 bottom-4" style={{ zIndex: '1000' }}>
            <TooltipComponent
              content="Settings"
              position="Top"
            >
              <button
                type="button"
                onClick={() => setThemeSettings(true)}
                style={{ background: currentColor, borderRadius: '50%' }}
                className="text-3xl text-white p-3 hover:drop-shadow-xl hover:bg-light-gray"
              >
                <FiSettings />
              </button>

            </TooltipComponent>
          </div>

          <div
            className={
                'dark:bg-main-dark-bg  bg-main-bg min-h-screen w-full  '
            }
          >
            {/*                : 'bg-main-bg dark:bg-main-dark-bg  w-full min-h-screen flex-2 ' */}
            <div className="fixed md:static bg-main-bg dark:bg-main-dark-bg navbar w-full ">
              <Navibar />
            </div>
            <div>
              {themeSettings && (<ThemeSettings />)}

              <Routes>
                {/* fund  */}
                <Route path="/" element={(<SignIn />)}/>
                <Route path="/swap" element={(<Swap />)} />
                <Route path="/earn" element={(<Earn />)} />
                <Route path="/loan" element={(<Loan />)} />
                <Route path="/dualcurrency" element={(<Invest />)} />
                <Route path="/spot" element={(<Spot />)} />
                <Route path="/margin" element={(<Margin />)} />
                <Route path="/Dashboard" element={<Dashboard />} />
                {/* login  */}
                <Route path="/login" element={<SignIn />} />

              </Routes>
            </div>
            <Footer />
          </div>
        </div>
      </BrowserRouter>
    </div>
  );
};

export default App;