import Projects from "db/projects";
import Service from "../utils/Service";

import ObjectDoesNotExistError from "../utils/exceptions/ObjectDoesNotExistError";
import RequirementsNotMetError from "../utils/exceptions/RequirementsNotMetError";

export default class extends Service {
  getOne = (id) => {
    const project = Projects.findOne({ id });
    if (!project) throw new ObjectDoesNotExistError();

    return project;
  };

  getAll = () => {
    return Projects.findAll();
  };

  deleteOne = (id) => {
    return Projects.deleteOne(id);
  }

  createOne = (body) => {
    if (!body.title || !body.author || !body.start_date || !body.end_date)
      throw new RequirementsNotMetError();

    return Projects.createOne(body);
  }

  updateOne = (id, body) => {
    if (!body.title || !body.start_date || !body.end_date)
      throw new RequirementsNotMetError();

    return Projects.updateOne(id, body);
  }
}
