import React, { useState } from 'react';
import SideNav from "./components/SideNav/SideNav.jsx";
import Main from './components/Main/Main.jsx';

function App() {
  const [chatHistory, setChatHistory] = useState([]);
  const [activeChatIndex, setActiveChatIndex] = useState(null);

  const handleNewChat = () => {
    setActiveChatIndex(null);
  };

  const handleSelectChat = (index) => {
    setActiveChatIndex(index);
  };

  const updateChatHistory = (messages) => {
    if (messages.length > 0) {
      const title = messages[0].text.length > 30 
        ? `${messages[0].text.substring(0, 30)}...` 
        : messages[0].text;
      
      if (activeChatIndex === null) {
        // New chat
        setChatHistory(prev => [{ title, messages }, ...prev]);
        setActiveChatIndex(0);
      } else {
        // Update existing chat
        const updatedHistory = [...chatHistory];
        updatedHistory[activeChatIndex] = { title, messages };
        setChatHistory(updatedHistory);
      }
    }
  };

  return (
    <>
      <SideNav 
        recentChats={chatHistory}
        onNewChat={handleNewChat}
        onSelectChat={handleSelectChat}
      />
      <Main 
        key={activeChatIndex} // This forces re-render when chat changes
        messages={activeChatIndex !== null ? chatHistory[activeChatIndex].messages : []}
        onMessagesUpdate={updateChatHistory}
      />
    </>
  );
}

export default App;