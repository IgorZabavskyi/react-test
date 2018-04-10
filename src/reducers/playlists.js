/* global console */
const initialState = [
  'My home playlist',
  'My work playlist'
];

export default function mylist(state = initialState, action) {
  console.log('PLAYLIST: ', state)
  if (action.type === 'ADD_PLAYLIST') {
    console.log('Yes ADD ', action.listload)
    return [
      ...state,
      action.listload
    ];
  } else if (action.type === 'DELETE_PLAYLIST') {
    return state;
  } else {
    return state;
  }
}