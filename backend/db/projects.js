// This model mocks a real database model for the sake com simplicity
let data = [
  {
    id: 1,
    title: "Project 1",
    author: "Gil Neto",
    start_date: '2021-05-16T09:00:00.000Z',
    end_date: '2021-05-19T18:00:00.000Z'
  },
  {
    id: 2,
    title: "Project 2",
    author: "Gil Neto",
    start_date: '2021-05-16T09:00:00.000Z',
    end_date: '2021-05-19T18:00:00.000Z'
  },
  {
    id: 3,
    title: "Project 3",
    author: "Gil Neto",
    start_date: '2021-05-16T09:00:00.000Z',
    end_date: '2021-05-19T18:00:00.000Z'
  },
  {
    id: 4,
    title: "Project 4",
    author: "Gil Neto",
    start_date: '2021-05-16T09:00:00.000Z',
    end_date: '2021-05-19T18:00:00.000Z'
  },
  {
    id: 5,
    title: "Project 5",
    author: "Gil Neto",
    start_date: '2021-05-16T09:00:00.000Z',
    end_date: '2021-05-19T18:00:00.000Z'
  },
];
export default class {
  // receives conditions like { title: 'Project 5' } and returns a list of matches
  static findAll = (conditions = {}) => {
    return data
      .filter((obj) =>
        Object.entries(conditions).reduce((curr, [key, condition]) => {
          if (!curr) return false;
          return obj[key] === condition;
        }, true)
      )
      .sort((a, b) => (a.id > b.id ? 1 : -1));
  };

  // receives conditions like { title: 'Project 5' } and returns the first match
  static findOne = (conditions = {}) => {
    return data.find((obj) =>
      Object.entries(conditions).reduce((curr, [key, condition]) => {
        if (!curr) return false;
        return obj[key] === condition;
      }, true)
    );
  };

  static deleteOne = (id) => {
    const index = data.findIndex((curr) => curr.id === id);
    data.splice(index,1);
    return true;
  }
  // You can add more methods to this mock to extend its functionality or
  // rewrite it to use any kind of database system (eg. mongo, postgres, etc.)
  // it is not part of the evaluation process
}
