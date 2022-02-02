import React, { PureComponent } from 'react';
import './menu.scss';

const menuConfig = [
  {
    title: 'Характеристики',
    id: 'abilities',
    icon: 'fas fa-eye',
  },
  {
    title: 'Испытания',
    id: 'savingThrows',
    icon: 'fab fa-accessible-icon',
  },
  {
    title: 'Внимание',
    id: 'attention',
    icon: 'fas fa-broadcast-tower',
  },
  {
    title: 'Навыки',
    id: 'skills',
    icon: 'fas fa-broadcast-tower',
  },
  {
    title: 'Фокусы',
    id: 'cantrips',
    icon: 'fas fa-broadcast-tower',
  },
];
class Menu extends PureComponent {
  render() {
    return (
      <div className="menu">
        <ul className="menu__list">
          {menuConfig.map((item) => {
            return (
              <li className="menu__item" key={item.id}>
                <a
                  href={`#${item.id}`}
                  className="menu__link"
                  title={item.title}
                >
                  <i className={item.icon}></i>
                </a>
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}
export default Menu;
