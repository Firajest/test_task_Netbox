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
  SORT,
} from './actionTypes';

export const getInfoSuccess = (info) => ({ type: GET_INFO_SUCCESS, payload: info });
export const getInfoFailure = (message) => ({ type: GET_INFO_FAILURE, payload: message });

export const deleteSuccess = (id) => ({ type: DELETE_SUCCESS, payload: id });
export const deleteFailure = (message) => ({ type: DELETE_FAILURE, payload: message });

export const editSuccess = (id, name, age, phone, email) => ({
  type: EDIT_SUCCESS, payload: {
    id, name, age, phone, email
  }
});
export const editFailure = (message) => ({ type: EDIT_FAILURE, payload: message });
export const editRequest = (flag) => ({ type: EDIT_REQUEST, payload: flag });

export const addNewEntryFailed = (flag) => ({ type: NEW_ENTRY_FAILED, payload: flag });
export const addNewEntry = (id, name, age, phone, email) => ({
  type: NEW_ENTRY, payload: {
    'ID':id, 'Name':name, 'Age':age, 'Phone':phone, 'E-mail':email
  }
});

export const Sort = (id) => ({ type: SORT, payload: id });

