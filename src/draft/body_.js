        <Grid container>
          <Grid item xs={12} sm={12} md={12} lg={12} xl={12} sx={{ borderRadius : 0, bgcolor:'darkcyan' }}>
            <h1>Hello</h1>
          </Grid>       
          <Grid item xs={12} sm={12} md={12} lg={5} xl={4} sx={{ borderRadius : 0, bgcolor:'darkcyan' }}>
            <ThemeProvider theme={theme}>
              <Typography variant="h3" gutterBottom>
                Career
              </Typography>
            </ThemeProvider>
            <Accordion />
            <Button variant="contained" color="secondary">Download Resume</Button>
          </Grid>
          <Grid item xs={12} sm={12} md={12} lg={7} xl={8} sx={{ borderRadius : 0, bgcolor:'secondary.dark' }}>
            <Grid container >
              <Grid item xs={12} sm={12} md={12} lg={6} xl={6} sx={{ borderRadius : 0, bgcolor:'error.dark', justifyContent: 'center' }}>
                <ThemeProvider theme={theme}>
                  <Typography variant="h3" gutterBottom>
                    Formations
                  </Typography>
                </ThemeProvider>
                <Formations />
              </Grid>
              <Grid item xs={12} sm={12} md={12} lg={6} xl={6} sx={{ borderRadius : 0, bgcolor:'warning.dark', justifyContent: 'center' }}>
                <ThemeProvider theme={theme}>
                  <Typography variant="h3" gutterBottom>
                    Experiencies
                  </Typography>
                </ThemeProvider>

                <Stack direction='row' divider={<Divider orientation="vertical" flexItem color='white'/>} spacing={2} justifyContent='center'>
                  <ThemeProvider theme={theme}>
                    <Typography variant="p" gutterBottom>
                      OSISoft PI System Administrator & Developer
                    </Typography>
                  </ThemeProvider>  
                  <ThemeProvider theme={theme}>
                    <Typography variant="p" gutterBottom>
                      Data Scientist & Full Stack Developer (Python-React)
                    </Typography>
                  </ThemeProvider> 
                </Stack>  
              </Grid>
            </Grid>
          </Grid>