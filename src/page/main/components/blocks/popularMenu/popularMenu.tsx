import React from 'react';
import style from './popularMenu.module.scss';
import dataBaseDishes from '../../../../../assets/dataBase/dataBaseDishes/dataBaseDishes.json'
import Dish from './dish/dish';



interface Dish {
    id: number;
    type: string;
    name: string;
    price: number;
    description?: string;
    image: string;
  }
const PopularMenu = () => {

    const listDish: Dish[] = dataBaseDishes

    



    const products: Product[] = [
        {
          id: 1,
          name: 'Product 1',
          price: 29.99,
          description: 'This is the description for product 1',
          image: '/images/product1.jpg'
        },
        {
          id: 2,
          name: 'Product 2',
          price: 39.99,
          description: 'This is the description for product 2',
          image: '/images/product2.jpg'
        },
        {
          id: 3,
          name: 'Product 3',
          price: 49.99,
          description: 'This is the description for product 3',
          image: '/images/product3.jpg'
        }
      ];





    return (
        <div className={style.popularMenu}>
          <div className={style.subtitle}>
            Choose best menus
          </div>
          <h3 className={style.title}>
            Popular Foods Menu
          </h3>
            <div className={style['list-menu'] + ' container'}>
                {listDish.filter((dish)=> {return dish.type == 'dishes'}).map((dish) => (
                  <Dish key={dish.id} dish={dish} />
                ))}
                <div className={style['list-menu__vertical-line']}></div>
            </div>
        </div>
    );
};

export default PopularMenu;