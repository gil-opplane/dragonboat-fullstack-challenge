import React, { useEffect } from "react";

import { useSelector, useDispatch } from "react-redux";

import { fetchProjects as fetchProjectsAction, deleteProject as deleteProjectAction, addProject as addProjectAction } from "../../store/projects/actions";
import { selectProjects } from "../../store/projects/selectors";

const container = (Component) => {
  return (props) => {
    const dispatch = useDispatch();

    const fetchProjects = () => dispatch(fetchProjectsAction());
    const deleteProject = (id) => dispatch(deleteProjectAction(id));
    const addProject = (body) => dispatch(addProjectAction(body));

    const projects = useSelector((state) => selectProjects(state));

    useEffect(() => {
      fetchProjects();
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return <Component {...props} projects={projects} deleteProject={deleteProject} addProject={addProject} />;
  };
};

export default container;
