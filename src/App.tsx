import { AppBar, Button, Container, Grid, TextField, Toolbar, Typography, useTheme } from "@mui/material"
import { Theme } from "./Theme"

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
          <Typography variant="h5" component="h1">Todo </Typography>
        </Toolbar>
      </AppBar>
      <main>
        <Container>
          <Grid container spacing={theme.spacing(0.5)}>
            <Grid item xl={10} sm={12}>
              <TextField name="task" fullWidth />
            </Grid>
            <Grid item xl={2} sm={12}>
              <Button variant="contained" fullWidth>Criar</Button>
            </Grid>
          </Grid>
        </Container>
      </main>



    </Theme>



  )
}

export default App
