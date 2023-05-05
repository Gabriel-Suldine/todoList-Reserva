import { AppBar, Button, Container, Grid, TextField, Toolbar, Typography, colors, useTheme } from "@mui/material"
import { Theme } from "./Theme"
import { CheckFat, PlusCircle } from '@phosphor-icons/react'

function App() {
  const theme = useTheme()
  return (
    <Theme>
      <AppBar position="static">
        <Toolbar sx={{
          paddingTop: theme.spacing(2),
          paddingBottom: theme.spacing(2),
          display: "flex",
          justifyContent: "center",
          alignItems: 'center',
          minHeight: '200px',
          '@media all': {
            minHeight: 200,
          }
        }}>
          <Typography variant="h5" component="h1" sx={{
            display: 'flex',
            alignItems: 'center',
            gap: theme.spacing(2),
            color: theme.palette.primary.main
          }}>
            <CheckFat size={32} />
            ToDo
          </Typography>
        </Toolbar>
      </AppBar>
      <main>
        <Container sx={{
          position: 'relative'
        }}>
          <Grid container spacing={theme.spacing(0.5)} sx={{
            position: 'absolute',
            top: '-26px'
          }}>
            <Grid item xl={10} sm={12}>
              <TextField name="task" fullWidth sx={{
                background: colors.grey[900]
              }} />
            </Grid>
            <Grid item xl={2} sm={12}>
              <Button variant="contained" sx={{
                height: '100%'
              }} fullWidth>
                <span>Criar</span> <PlusCircle size={32} />
              </Button>
            </Grid>
          </Grid>
          <Grid container spacing={theme.spacing(1)} sx={{
            
          }}>



          </Grid>
          
        </Container>
      </main>



    </Theme>



  )
}

export default App
