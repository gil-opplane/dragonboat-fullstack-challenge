import ProjectsService from "./projects.service";

export default class {
  getOne = (id) => {
    const service = new ProjectsService();

    return service.getOne(id);
  };

  get = () => {
    const service = new ProjectsService();

    return service.getAll();
  };

  deleteOne = (id) => {
    const service = new ProjectsService();

    return service.deleteOne(id);
  }

  createOne = (body) => {
    const service = new ProjectsService();

    return service.createOne(body);
  }

  updateOne = (id, body) => {
    const service = new ProjectsService();

    return service.updateOne(id, body);
  }
}
