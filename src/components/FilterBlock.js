import React from 'react'
import FilterBtn from '../containers/FilterBtn'
import { Filters } from '../actions/actions'

const FilterBlock = () => (
  <footer className='filter-block'>
    <FilterBtn filter={Filters.FILTER_ALL}>Todas</FilterBtn>
    <FilterBtn filter={Filters.FILTER_PENDING}>Pendentes</FilterBtn>
    <FilterBtn filter={Filters.FILTER_COMPLETED}>Resolvidas</FilterBtn>
  </footer>
)

export default FilterBlock
