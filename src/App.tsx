import React from 'react';
import './App.css';
import { Box, Divider } from "@material-ui/core";
import { SafetyDivider, SafetyDividerTwoTone } from '@mui/icons-material';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        
        <p>
          hi i'm dana
        </p>
        <Divider component = "h1" light/>
        <h1>is this thing working</h1>
        
      </header>
      <Box bgcolor='red'>
        <p>hi</p>
      </Box> 
      
    </div>
  );
}

export default App;
