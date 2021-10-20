import "./App.css";
import Container from "@mui/material/Container";

import GenerationSelectBox from "./components/GenerationSelectBox";
import GenerationsList from "./components/GenerationsList";
import VersionsList from "./components/VersionsList";
import Grid from "@mui/material/Grid";

function App() {
  return (
    <div className="App">
      <Container style={{ padding: "30px 0px" }}>
        <Grid container spacing={2}>
          <Grid item md={8}>
            <GenerationSelectBox />
          </Grid>
          <Grid item md={2}>
            <VersionsList />
          </Grid>
          <Grid item md={12}>
            <GenerationsList />
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}

export default App;
