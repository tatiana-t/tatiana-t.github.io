import React, { PureComponent } from 'react';
import './menu.scss';

const menuConfig = [
  {
    title: 'Характеристики',
    anchor: 'abilities',
    icon: 'fas fa-eye',
  },
  {
    title: 'Испытания',
    anchor: 'savingThrows',
    icon: 'fab fa-accessible-icon',
  },
  {
    title: 'Внимание',
    anchor: 'attention',
    icon: 'fas fa-broadcast-tower',
  },
  {
    title: 'Навыки',
    anchor: 'skills',
    icon: 'fas fa-broadcast-tower',
  },
  {
    title: 'Фокусы',
    anchor: 'cantrips',
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
              <li className="menu__item">
                <a
                  href={`#${item.anchor}`}
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
