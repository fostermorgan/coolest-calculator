import React, { useState } from 'react';
import './App.css';
import 'semantic-ui-css/semantic.min.css';
import { Button, Divider, Grid, Header, Icon, Search, Segment } from 'semantic-ui-react'
import { Calculator } from './components/Calculator';
import { History } from './components/History'
function App() {
  const [currentInput, setCurrentInput] = useState<number[]>([])
  return (
    <div className="App">
      <header className="App-header">
        Cool Calculator
      </header>
      <main className="App-content">
        <div className="calculator-container">
          
          <Segment placeholder>
            <Grid columns={2} stackable textAlign='center'>
              <Divider vertical />

              <Grid.Row verticalAlign='middle'>
                <Grid.Column>
                  <Header>
                    {currentInput}
                  </Header>
                  <Calculator 
                    currentInput={currentInput}
                    setCurrentInput={setCurrentInput}
                    />
                </Grid.Column>

                <Grid.Column>
                  <Header icon>
                    History
                  </Header>
                  <History />
                </Grid.Column>
              </Grid.Row>
            </Grid>
          </Segment>

        </div>
      </main>
    </div>
  );
}

export default App;
