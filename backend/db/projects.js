// This model mocks a real database model for the sake com simplicity
const data = [
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
  /*{
    id: 6,
    title: "Project 1",
    author: "Gil Neto",
    start_date: '2021-05-16T09:00:00.000Z',
    end_date: '2021-05-19T18:00:00.000Z'
  },
  {
    id: 7,
    title: "Project 2",
    author: "Gil Neto",
    start_date: '2021-05-16T09:00:00.000Z',
    end_date: '2021-05-19T18:00:00.000Z'
  },
  {
    id: 8,
    title: "Project 3",
    author: "Gil Neto",
    start_date: '2021-05-16T09:00:00.000Z',
    end_date: '2021-05-19T18:00:00.000Z'
  },
  {
    id: 9,
    title: "Project 4",
    author: "Gil Neto",
    start_date: '2021-05-16T09:00:00.000Z',
    end_date: '2021-05-19T18:00:00.000Z'
  },
  {
    id: 10,
    title: "Project 5",
    author: "Gil Neto",
    start_date: '2021-05-16T09:00:00.000Z',
    end_date: '2021-05-19T18:00:00.000Z'
  },
  {
    id: 11,
    title: "Project 1",
    author: "Gil Neto",
    start_date: '2021-05-16T09:00:00.000Z',
    end_date: '2021-05-19T18:00:00.000Z'
  },
  {
    id: 12,
    title: "Project 2",
    author: "Gil Neto",
    start_date: '2021-05-16T09:00:00.000Z',
    end_date: '2021-05-19T18:00:00.000Z'
  },
  {
    id: 13,
    title: "Project 3",
    author: "Gil Neto",
    start_date: '2021-05-16T09:00:00.000Z',
    end_date: '2021-05-19T18:00:00.000Z'
  },
  {
    id: 14,
    title: "Project 4",
    author: "Gil Neto",
    start_date: '2021-05-16T09:00:00.000Z',
    end_date: '2021-05-19T18:00:00.000Z'
  },
  {
    id: 15,
    title: "Project 5",
    author: "Gil Neto",
    start_date: '2021-05-16T09:00:00.000Z',
    end_date: '2021-05-19T18:00:00.000Z'
  },
  {
    id: 16,
    title: "Project 1",
    author: "Gil Neto",
    start_date: '2021-05-16T09:00:00.000Z',
    end_date: '2021-05-19T18:00:00.000Z'
  },
  {
    id: 17,
    title: "Project 2",
    author: "Gil Neto",
    start_date: '2021-05-16T09:00:00.000Z',
    end_date: '2021-05-19T18:00:00.000Z'
  },
  {
    id: 18,
    title: "Project 3",
    author: "Gil Neto",
    start_date: '2021-05-16T09:00:00.000Z',
    end_date: '2021-05-19T18:00:00.000Z'
  },
  {
    id: 19,
    title: "Project 4",
    author: "Gil Neto",
    start_date: '2021-05-16T09:00:00.000Z',
    end_date: '2021-05-19T18:00:00.000Z'
  },
  {
    id: 20,
    title: "Project 5",
    author: "Gil Neto",
    start_date: '2021-05-16T09:00:00.000Z',
    end_date: '2021-05-19T18:00:00.000Z'
  },
  {
    id: 21,
    title: "Project 1",
    author: "Gil Neto",
    start_date: '2021-05-16T09:00:00.000Z',
    end_date: '2021-05-19T18:00:00.000Z'
  },
  {
    id: 22,
    title: "Project 2",
    author: "Gil Neto",
    start_date: '2021-05-16T09:00:00.000Z',
    end_date: '2021-05-19T18:00:00.000Z'
  },
  {
    id: 23,
    title: "Project 3",
    author: "Gil Neto",
    start_date: '2021-05-16T09:00:00.000Z',
    end_date: '2021-05-19T18:00:00.000Z'
  },
  {
    id: 24,
    title: "Project 4",
    author: "Gil Neto",
    start_date: '2021-05-16T09:00:00.000Z',
    end_date: '2021-05-19T18:00:00.000Z'
  },
  {
    id: 25,
    title: "Project 5",
    author: "Gil Neto",
    start_date: '2021-05-16T09:00:00.000Z',
    end_date: '2021-05-19T18:00:00.000Z'
  },
  {
    id: 26,
    title: "Project 1",
    author: "Gil Neto",
    start_date: '2021-05-16T09:00:00.000Z',
    end_date: '2021-05-19T18:00:00.000Z'
  },
  {
    id: 27,
    title: "Project 2",
    author: "Gil Neto",
    start_date: '2021-05-16T09:00:00.000Z',
    end_date: '2021-05-19T18:00:00.000Z'
  },
  {
    id: 28,
    title: "Project 3",
    author: "Gil Neto",
    start_date: '2021-05-16T09:00:00.000Z',
    end_date: '2021-05-19T18:00:00.000Z'
  },
  {
    id: 29,
    title: "Project 4",
    author: "Gil Neto",
    start_date: '2021-05-16T09:00:00.000Z',
    end_date: '2021-05-19T18:00:00.000Z'
  },
  {
    id: 30,
    title: "Project 5",
    author: "Gil Neto",
    start_date: '2021-05-16T09:00:00.000Z',
    end_date: '2021-05-19T18:00:00.000Z'
  },
  {
    id: 31,
    title: "Project 1",
    author: "Gil Neto",
    start_date: '2021-05-16T09:00:00.000Z',
    end_date: '2021-05-19T18:00:00.000Z'
  },
  {
    id: 32,
    title: "Project 2",
    author: "Gil Neto",
    start_date: '2021-05-16T09:00:00.000Z',
    end_date: '2021-05-19T18:00:00.000Z'
  },
  {
    id: 33,
    title: "Project 3",
    author: "Gil Neto",
    start_date: '2021-05-16T09:00:00.000Z',
    end_date: '2021-05-19T18:00:00.000Z'
  },
  {
    id: 34,
    title: "Project 4",
    author: "Gil Neto",
    start_date: '2021-05-16T09:00:00.000Z',
    end_date: '2021-05-19T18:00:00.000Z'
  },
  {
    id: 35,
    title: "Project 5",
    author: "Gil Neto",
    start_date: '2021-05-16T09:00:00.000Z',
    end_date: '2021-05-19T18:00:00.000Z'
  },
  {
    id: 36,
    title: "Project 1",
    author: "Gil Neto",
    start_date: '2021-05-16T09:00:00.000Z',
    end_date: '2021-05-19T18:00:00.000Z'
  },
  {
    id: 37,
    title: "Project 2",
    author: "Gil Neto",
    start_date: '2021-05-16T09:00:00.000Z',
    end_date: '2021-05-19T18:00:00.000Z'
  },
  {
    id: 38,
    title: "Project 3",
    author: "Gil Neto",
    start_date: '2021-05-16T09:00:00.000Z',
    end_date: '2021-05-19T18:00:00.000Z'
  },
  {
    id: 39,
    title: "Project 4",
    author: "Gil Neto",
    start_date: '2021-05-16T09:00:00.000Z',
    end_date: '2021-05-19T18:00:00.000Z'
  },
  {
    id: 40,
    title: "Project 5",
    author: "Gil Neto",
    start_date: '2021-05-16T09:00:00.000Z',
    end_date: '2021-05-19T18:00:00.000Z'
  },*/
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

  // You can add more methods to this mock to extend its functionality or
  // rewrite it to use any kind of database system (eg. mongo, postgres, etc.)
  // it is not part of the evaluation process
}
