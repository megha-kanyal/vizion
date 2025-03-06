<input type="text" name={`project-desc-${index}`} value={project.description} onChange={(e) => {
  const newProjects = [...profile.projects];
  newProjects[index].description = e.target.value;
  setProfile({ ...profile, projects: newProjects });
}} />