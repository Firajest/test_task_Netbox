import {
  GET_INFO_SUCCESS,
  GET_INFO_FAILURE,
  DELETE_SUCCESS,
  DELETE_FAILURE,
  EDIT_REQUEST,
  EDIT_SUCCESS,
  EDIT_FAILURE,
  NEW_ENTRY,
  NEW_ENTRY_FAILED,
  SORT
} from './actionTypes';

const initialState = {
  mainState: [],
  statusMessage: '',
  edit: false,
  sortFlags: {
    'ID': false,
    'Name': false,
    'Age': false,
    'Phone': false,
    'E-mail': false,
  }
};

export default function AllInfo(state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case GET_INFO_SUCCESS: {
      return {
        ...state,
        mainState: payload,
      };
    }
    case GET_INFO_FAILURE: {
      return {
        ...state,
        statusMessage: payload,
      };
    }
    case DELETE_SUCCESS: {
      let newState
      if (state.mainState !== undefined) {
        newState = state.mainState.filter((array) => {
          if (!array.some((el) => (el.field === 'ID' && el.value == payload))) return array
        })
      } else newState = state.mainState

      return {
        ...state,
        mainState: newState,
      };
    }
    case DELETE_FAILURE: {
      return {
        ...state,
        statusMessage: payload,
      };
    }
    case EDIT_SUCCESS: {
      let editedState;
      editedState = state.mainState.map((array) => {
        if (array.some((el) => (el.field === 'ID' && el.value === Number(payload['ID'])))) {
          return array.forEach((obj) => {
            if (obj.field === 'ID') obj.value = payload.id
            if (obj.field === 'Age') obj.value = payload.age
            if (obj.field === 'Phone') obj.value = payload.phone
            if (obj.field === 'E-mail') obj.value = payload.email
            if (obj.field === 'Name') obj.value = payload.name
          })
        } else return array
      });
      return {
        ...state,
        mainState: editedState,
        edit: false,
      };
    }
    case EDIT_REQUEST: {
      return {
        ...state,
        edit: payload,
      };
    }
    case EDIT_FAILURE: {
      return {
        ...state,
        statusMessage: payload,
      };
    }
    case NEW_ENTRY: {
      let newEntry = [];
      let keys = Object.keys(payload)
      for (let i = 0, l = keys.length; i < l; i++) {
        newEntry.push({ field: `${keys[i]}`, value: `${payload[keys[i]]}` })
      }
      return {
        ...state,
        mainState: [...state.mainState, newEntry],
      };
    }
    case NEW_ENTRY_FAILED: {
      return {
        ...state,
        statusMessage: payload,
      };
    }
    // case SORT: {
    //   console.log(payload);

    //   state.sortFlags[payload] = !state.sortFlags[payload];
    //   let sortedEntries;
    //   if (state.sortFlags[payload] === false) {

    //   }

    //   sortedEntries = state.mainState.sort((prevArray, nextArray) => {
    //     if (prevArray.field === payload && nextArray.field === payload) {
    //       prevArray.value.localeCompare(nextArray.value)
    //     }
    //   })

    //   return {
    //     ...state,
    //     mainState: sortedEntries,
    //   };
    // }
    default:
      return state;
  }
}
