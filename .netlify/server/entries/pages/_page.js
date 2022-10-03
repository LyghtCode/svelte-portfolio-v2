async function load({ fetch }) {
  const projectsJson = await fetch(`/projects.json`);
  const projects = await projectsJson.json();
  const postsJson = await fetch(`/posts.json`);
  const posts = await postsJson.json();
  const awardsJson = await fetch(`/awards.json`);
  const awards = await awardsJson.json();
  return {
    projects,
    posts,
    awards
  };
}
export {
  load
};
