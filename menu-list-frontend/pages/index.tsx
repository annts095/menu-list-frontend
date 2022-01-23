import type { NextPage } from 'next'
import { fetchCategories } from '../redux/modules/category'
import { useDispatch, useSelector } from 'react-redux'
import { AppDispatch } from '../redux/store'
import { useEffect, useState } from 'react'
import { categoriesSelector } from '../redux/selector/category'
import { fetchMenus, setMenus } from '../redux/modules/menu'
import { menusSelector } from '../redux/selector/menu'
import Card from "../components/card";

const Home: NextPage = () => {

  const dispatch: AppDispatch = useDispatch();

  const clickCategory = (e: React.MouseEvent<HTMLElement>) => {
    if (e.currentTarget.dataset.id) {
      dispatch(setMenus(e.currentTarget.dataset.id));
    }
  }

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
          <li onClick={clickCategory} data-id='0'>すべて</li>
          <li onClick={clickCategory} data-id='99'>おすすめ</li>
          {categories.map((category) => (
            <li key={category.sort_number} onClick={clickCategory} data-id={category.id}>{category.title}</li>
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
