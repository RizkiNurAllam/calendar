import React from 'react';
import Calendar from './components/Calendar';

const App: React.FC = () => {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="bg-white rounded-lg shadow p-6 w-80">
        <h1 className="text-2xl font-semibold mb-4">My Calendar</h1>
        <Calendar />
      </div>
    </div>
  );
};

export default App;
