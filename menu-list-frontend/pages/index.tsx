import type { NextPage } from 'next'
import { fetchCategories } from '../redux/modules/category'
import { useDispatch, useSelector } from 'react-redux'
import { AppDispatch } from '../redux/store'
import { useEffect } from 'react'
import { categoriesSelector } from '../redux/selector/category'
import { fetchMenus } from '../redux/modules/menu'
import { menusSelector } from '../redux/selector/menu'
import Card from "../components/card";

const Home: NextPage = () => {
  const dispatch: AppDispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchCategories());
    dispatch(fetchMenus());
  }, []);
  const categories = useSelector(categoriesSelector);
  const menus = useSelector(menusSelector);
  return (
    <>
      <div>
        <p>カテゴリ</p>
        <ul>
          <li>すべて</li>
          <li>おすすめ</li>
          {categories.map((category) => (
            <li key={category.sort_number}>{category.title}</li>
          ))}
        </ul>
      </div>
      <div>
        <p>メニュー</p>
        <ul>
          {menus.map((menu) => (
            <Card key={menu.id} menu={menu} />
          ))}
        </ul>
      </div>

    </>
  )
}

export default Home
