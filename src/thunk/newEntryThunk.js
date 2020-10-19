import {
  addNewEntry, addNewEntryFailed
} from '../redux/actionCreators';

function editThunk(id, name, age, phone, email) {
  return async (dispatch) => {
    try {
      // const data = await fetch('https://frontend-test.netbox.ru/', {
      //   method: "add",
      //   headers: {
      //     'Content-type': 'application/json',
      //   },
      //   body: JSON.stringify({
      //     id, name, age, phone, email
      //   })
      // });
      // const response = await data.json();
      // console.log(response);
      // if condition {dispatch addNewEntry}
      dispatch(addNewEntry(id, name, age, phone, email));
    }
    catch (error) {
      dispatch(addNewEntryFailed('Something went wrong'));
    }
  };
};

export default editThunk
