import React from 'react';
import { Button, Grid, Icon } from 'semantic-ui-react';

interface Props { 
    currentInput: number[],
    setCurrentInput: React.Dispatch<React.SetStateAction<number[]>>
}; 
export const Calculator: React.FC<Props> = ({ 
    currentInput,
    setCurrentInput
}) => {
    function calculate(){

    }
    return (   
    <Grid columns={4} divided>
            <Grid.Row>
              
            </Grid.Row>
            <Grid.Row>
              <Button onClick={()=>setCurrentInput([...currentInput, 7])}>7</Button>
              <Button onClick={()=>setCurrentInput([...currentInput, 8])}>8</Button>
              <Button onClick={()=>setCurrentInput([...currentInput, 9])}>9</Button>
              <Button onClick={()=>setCurrentInput([...currentInput, 20])}>/</Button>
            </Grid.Row>
            <Grid.Row>
              <Button onClick={()=>setCurrentInput([...currentInput, 4])}>4</Button>
              <Button onClick={()=>setCurrentInput([...currentInput, 5])}>5</Button>
              <Button onClick={()=>setCurrentInput([...currentInput, 6])}>6</Button>
              <Button onClick={()=>setCurrentInput([...currentInput, 21])}>x</Button>
            </Grid.Row>
            <Grid.Row>
              <Button onClick={()=>setCurrentInput([...currentInput, 1])}>1</Button>
              <Button onClick={()=>setCurrentInput([...currentInput, 2])}>2</Button>
              <Button onClick={()=>setCurrentInput([...currentInput, 3])}>3</Button>
              <Button onClick={()=>setCurrentInput([...currentInput, 22])}>-</Button>
            </Grid.Row>
            <Grid.Row>
              <Button onClick={()=>setCurrentInput([...currentInput, 0])}>0</Button>
              <Button onClick={()=>setCurrentInput([...currentInput, 23])}>.</Button>
              <Button onClick={()=>setCurrentInput([...currentInput, 24])}>+</Button>
            </Grid.Row>
            <Grid.Row>
              <Button onClick={()=>calculate()}>Submit</Button>
              <Button onClick={()=>setCurrentInput([])}>Clear</Button>
              <Button onClick={()=>{currentInput.pop(); setCurrentInput([...currentInput])}}><Icon name="arrow alternate circle left"/></Button>
            </Grid.Row>
          </Grid>
);
    }