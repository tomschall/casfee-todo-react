import {
  ADD_TODO,
  TOGGLE_TODO,
  SET_TODOS,
  SET_VISIBILITY_FILTER,
  VisibilityFilters,
} from '../actions';

const todos = [
  { id: 0, name: 'Milch kaufen', done: true },
  { id: 1, name: 'Rasen mähen', done: false },
  { id: 2, name: 'Todo App Coden', done: true },
  { id: 3, name: 'Zug fahren', done: false },
  { id: 4, name: 'Schlafen gehen', done: true },
  { id: 5, name: 'Ferien machen', done: true },
  { id: 6, name: 'Lecker kochen', done: true },
  { id: 7, name: 'React Training', done: false },
];

const todoReducer = (state = todos, action) => {
  switch (action.type) {
    case ADD_TODO:
      return [
        ...state,
        {
          id: state.length,
          name: action.text,
          done: false,
        },
      ];
    case TOGGLE_TODO:
      return state.map((todo) => {
        if (todo.id === action.id) {
          return Object.assign({}, todo, {
            done: !todo.done,
          });
        }
        return todo;
      });
    default:
      return state;
  }
};

export default todoReducer;
