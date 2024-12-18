import { Box, Button, Container, Typography } from '@mui/material'
import './App.css'
import useHabitStore from './store/store'
import Addhabitform from './components/Addhabitform';

function App() {

  const store = useHabitStore();
  console.log(store);

  return (
    <Container>
      <Box>
        <Typography variant='h2' component='h1' textAlign={'center'}>Habit Tracker</Typography>
        <Addhabitform/>
      </Box> 
   </Container>
  )
}

export default App
