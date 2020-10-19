import {
  getInfoSuccess, getInfoFailure
} from '../redux/actionCreators';

function getInfo() {
  return async (dispatch) => {
    try {
      const response = await (await fetch('https://frontend-test.netbox.ru/')).json();
      dispatch(getInfoSuccess(response));
    }
    catch (error) {
      dispatch(getInfoFailure('Something went wrong'));
    }
  };
};

export default getInfo
