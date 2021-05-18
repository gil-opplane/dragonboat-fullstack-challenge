import {ADD_PROJECT, DELETE_PROJECT, FETCH_PROJECT, FETCH_PROJECTS} from "./types";

const initialState = {
  byId: {},
  ids: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_PROJECTS: {
      const data = action.payload || [];
      return {
        ...state,
        byId: data.reduce((byId, p) => ({ ...byId, [p.id]: p }), state.byId),
        ids: data.map((p) => p.id),
      };
    }
    case FETCH_PROJECT: {
      const data = action.payload;

      if (!data) return state;

      return {
        ...state,
        byId: {
          ...state.byId,
          [data.id]: data,
        },
      };
    }
    case DELETE_PROJECT: {
      const {data,id} = action.payload;

      if (!data) return state;

      const byId = Object.assign({}, state.byId);
      delete byId[id];

      return {
        ...state,
        byId,
        ids: state.ids.filter((_id) => _id !== id),
      };
    }
    case ADD_PROJECT: {
      const data = action.payload;

      if (!data) return state;

      const byId = Object.assign({}, state.byId);
      byId[data.id] = data;

      return {
        ...state,
        byId,
        ids: state.ids.concat(data.id)
      };
    }
    default: {
      return state;
    }
  }
};

export default reducer;
