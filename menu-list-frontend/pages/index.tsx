import type { NextPage } from 'next'
import { fetchCategories } from '../redux/modules/category'
import { useDispatch, useSelector } from 'react-redux'
import { AppDispatch } from '../redux/store'
import { useEffect } from 'react'
import { categoriesSelector } from '../redux/selector/category'

const Home: NextPage = () => {
  const dispatch: AppDispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchCategories());
  }, []);
  const categories = useSelector(categoriesSelector);
  return (
    <ul>
      {categories.map((category) => (
        <p key={category.sort_number}>{category.title}</p>
      ))}
    </ul>
  )
}

export default Home
