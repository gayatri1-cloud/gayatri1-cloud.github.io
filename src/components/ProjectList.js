import { Card, CardContent, CardMedia, duration, Typography } from "@mui/material";

const projects = [
  { id: 1, title: "Project 1 - Kumo", duration: '3 Months', category: 'Furniture Design' ,color: "rgba(255, 183, 0, 0.89)", modelPart: "Project_kumo",description: '“Kumo” is a Table? a chair? a dice? endless usability of form following function. Just when you thing you are over it. Maybe take it for a spin',keywords: 'Multifunctional, portable, modern, Eclectic, fun.'  },
  { id: 2, title: "Project 2 - Tara", duration: '5 Months' ,category: 'User Interaction and Product design',color: "rgba(180, 63, 193, 0.89)", modelPart: "Project_Tara",description: "“Tara” is a floor lamp designed for kids in mind. Be it kindergarden, preschool, nurseries, day care centres. Tara is a guiding light in child wellbeing and a parent companion helping it in their day-to-day activities.",keywords: 'Guiding light, interactive, playful, mood lighting.' },
  { id: 3, title: "Project 3 - e.VA",designTeam: 'Gayatri(Myself), Laxmi, Mahak, Dikshita & Samruddhi',techTeam: 'Nishakar',duration: '2 Months',category: 'User Interaction and Product design',color: "rgba(179, 206, 63, 0.89)", modelPart: "project_eva",description: '“e.VA” is a smart merchandise design.',keywords: 'Smart mechanism, electronic , productivity.' },
  { id: 4, title: "Praya", color: "purple", modelPart: "Project_praya",description: "Indian nigga" },
];

function ProjectList({ selectedProject,handleReadMore }) {

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "10px", width: "100%",height:"100%",
        borderRadius: "25px",
     }}>
      {projects.map((project) => (project.modelPart === selectedProject) && (
        <Card
          key={project.id}
          sx={{cursor: "pointer", padding: "16px",
            transition: "transform 0.3s ease",
            backgroundColor: project.color,
            borderRadius: "25px",
           }}
          height={"300px"}
          width={"100%"}
          onClick={()=>handleReadMore(true)}
        >
            <CardMedia>
                <img src={`/${project.modelPart}_card.svg`} width={'100%'}/>
            </CardMedia>
          <CardContent>
          <Typography sx={{
            fontFamily: 'Montserrat',
            fontSize: '36px',
            fontWeight: '500'
          }}>
            <u>{project.title}</u>
            </Typography>
             <Typography sx={{
                fontFamily: 'Montserrat',
                fontSize: '16px',
                fontWeight: '500'
             }}>
                Duration - {project.duration} <br />
                Category - {project.category}<br />
                {project?.designTeam && (<>
                Design Team - {project?.designTeam}<br/>
                Tech Team - {project?.techTeam}<br/>
                </>)}
                <br />
                Project overview - <br />
                {project.description}<br />
                <br />
                Keywords - {project.keywords}
            </Typography>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}

export default ProjectList;
