import {
  editSuccess, editFailure
} from '../redux/actionCreators';

function editThunk(id, name, age, phone, email) {
  return async (dispatch) => {
    try {
      // const data = await fetch('https://frontend-test.netbox.ru/', {
      //   method: "update",
      //   headers: {
      //     'Content-type': 'application/json',
      //   },
      //   body: JSON.stringify({
      //     id, name, age, phone, email
      //   })
      // });
      // const response = await data.json();;
      // if condition {dispatch editSuccess}
      dispatch(editSuccess(id, name, age, phone, email));
    }
    catch (error) {
      dispatch(editFailure('Something went wrong'));
    }
  };
};

export default editThunk
