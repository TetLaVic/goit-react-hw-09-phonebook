import React, { useCallback } from 'react';
import { v4 as genId } from 'uuid';
import PropTypes from 'prop-types';
import styles from './Filter.module.css';
import { useSelector, useDispatch } from 'react-redux';
import actions from '../../redux/ContactForm/ContactForm-actions';
import selectors from '../../redux/ContactForm/ContactForm-selectors';

export default function Filter() {
  const filterState = useSelector(selectors.getFilter);
  const dispatch = useDispatch();
  const onFilterChange = useCallback(
    event => dispatch(actions.filterChange(event.target.value)),
    [dispatch],
  );
  const filterInputId = genId();

  return (
    <label htmlFor={filterInputId} className={styles.labelFilter}>
      Find contacts by name
      <input
        type="text"
        name="filter"
        id={filterInputId}
        value={filterState}
        onChange={onFilterChange}
        className={styles.inputFilter}
      />
    </label>
  );
}

Filter.propTypes = {
  filters: PropTypes.string,
  onFilterChange: PropTypes.func,
};
