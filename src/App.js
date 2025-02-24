import React, { useState } from "react";
import ProjectList from "./components/ProjectList";
import Project3D from "./components/Project3D";
import PageGenerate from "./components/PageGenerate";
import { Stack } from "@mui/material";

function App() {
  const [selectedProject, setSelectedProject] = useState(null);
  const [readMore,setReadMore] = useState(false)

  return (
    <Stack width={"100%"} height={"100vh"} sx={{
      backgroundColor: "#000000",
    }}>
     { readMore ?  <PageGenerate title={selectedProject} />
:  <Stack display="flex" direction={"row"} width={"100%"} height={"100%"} sx={{
          position: 'relative'
      }}>
      <Stack width={"100%"} height={"100%"} sx={{
        position: 'absolute',
        zIndex: 1
      }}>
          <Project3D setSelectedProject={setSelectedProject} />
        </Stack>
        <Stack width={"35%"} sx={{
          position: 'absolute',
          zIndex: 2,
          right: 0,
          padding: "16px"
        }}>
        <ProjectList selectedProject={selectedProject} handleReadMore={setReadMore}/>  
        </Stack>
      </Stack>}
    </Stack>
  );
}

export default App;
