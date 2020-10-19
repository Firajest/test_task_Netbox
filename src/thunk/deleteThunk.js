import {
  deleteSuccess, deleteFailure
} from '../redux/actionCreators';

function deleteThunk(id) {
  return async (dispatch) => {
    try {
      // const data = await fetch('https://frontend-test.netbox.ru/', {
      //   method: "delete",
      //   headers: {
      //     'Content-type': 'application/json',
      //   },
      //   body: JSON.stringify({
      //     id,
      //   })
      // });
      // const response = await data.json();
      // if condition {dispatch deleteSuccess}
      dispatch(deleteSuccess(id));
    }
    catch (error) {
      dispatch(deleteFailure('Something went wrong'));
    }
  };
};

export default deleteThunk
