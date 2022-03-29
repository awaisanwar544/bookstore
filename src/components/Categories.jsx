import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { checkStatus } from '../redux/categories/categories';

const Categories = () => {
  const dispatch = useDispatch();
  const status = useSelector((state) => state.status);
  return (
    <div className="categories">
      <p>{status}</p>
      <button
        type="button"
        value="Check Status"
        onClick={() => {
          dispatch(checkStatus('UNDER_CONSTRUCTION'));
        }}
      >
        Check Status
      </button>
    </div>
  );
};

export default Categories;
