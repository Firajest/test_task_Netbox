import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import getInfo from '../../thunk/getInfoThunk';
import deleteThunk from '../../thunk/deleteThunk';
import editThunk from '../../thunk/editThunk';
import { editRequest, Sort } from '../../redux/actionCreators'
import { Table } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

function Info() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getInfo());
  }, [dispatch])
  const info = useSelector((state) => state.mainState)
  const editStatus = useSelector((state) => state.edit)
  console.log(info);

  function handleDelete(event) {
    const id = event.target.parentElement.parentElement.firstChild.innerText;
    dispatch(deleteThunk(id))
  }

  function handleEdit(event) {
    
    const parent = event.target.parentElement.parentElement;
    console.log(parent);
    const editFlag = !editStatus;
    parent.setAttribute('contenteditable', editFlag)
    dispatch(editRequest(editFlag))
  }

  function handleSave(event) {
    const id = event.target.parentElement.parentElement.firstChild.innerText;
    const email = event.target.parentElement.previousSibling.innerText;
    const phone = event.target.parentElement.previousSibling.previousSibling.innerText;
    const age = event.target.parentElement.previousSibling.previousSibling.previousSibling.innerText;
    const name = event.target.parentElement.previousSibling.previousSibling.previousSibling.previousSibling.innerText;
    // console.log(id, name, age, phone, email);
    dispatch(editThunk(id, name, age, phone, email))
    const parent = event.target.parentElement.parentElement;
    console.log(parent);
    const editFlag = !editStatus;
    parent.setAttribute('contenteditable', editFlag)
  }
  function handleCancel(event) {
    const editFlag = !editStatus;
    dispatch(editRequest(editFlag))
  }
  function handleSort(id) {
    dispatch(Sort(id));
  }
  return (
    <>
      <Table hover bordered>
        <thead>
          <tr>
            <th id='ID' onClick={(event) => handleSort(event.target.id)}>ID</th>
            <th id='Name' onClick={(event) => handleSort(event.target.id)}>Name</th>
            <th id='Age' onClick={(event) => handleSort(event.target.id)}>Age</th>
            <th id='Phone' onClick={(event) => handleSort(event.target.id)}>Phone</th>
            <th id='E-mail' onClick={(event) => handleSort(event.target.id)}>E-mail</th>
            <th>events</th>
          </tr>
        </thead>
        <tbody>
          {info !== undefined ? info.map((array) => {
            return <tr key={Math.random()}>{
              array.map((el) => {
                return (
                  <td key={Math.random()} name={el.field}>{el.value}</td>
                )
              })
            }
              {editStatus ?
                <td>
                  <button name='save' type="button" onClick={(event) => handleSave(event)}>Save</button>
                  <button name='cancel' type="button" onClick={(event) => handleCancel(event)}>Cancel</button>
                </td>
                :
                <td>
                  <button name='edit' type="button" onClick={(event) => handleEdit(event)}>Edit</button>
                  <button name='delete' type="button" onClick={(event) => handleDelete(event)}>Delete</button>
                </td>}
            </tr>
          }) : <></>}
        </tbody>
      </Table>
      Counter: { info.length !== undefined ? info.length : <></>}
    </>
  );
}

export default Info;
