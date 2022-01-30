import React, { PureComponent } from 'react';
import { Data } from '../../data';
import InfoBlock from '../ui/infoBlock';
import './skills.scss';

interface Props {
  className?: string;
}

class Skills extends PureComponent<Props> {
  render() {
    return (
      <div className={`skills ${this.props.className || ''}`} id='skills'>
        <InfoBlock title='Навыки'>
          {Data.skills.map((item) => {
            const characteristic = Data.characteristics.find((char) => char.title === item.characteristics);
            return (
              <div className='skills__item' key={item.title}>
                <span className='skills__title'>{item.title}</span>
                <span className='skills__block'>{item.value} =</span>
                <span className='skills__block'>
                  <span className='skills__block-title'>{item.characteristics}</span>
                  <span className='skills__block-value'>{characteristic?.mod}</span></span>
                <span className='skills__block'>
                  <span className='skills__block-title'>Умение</span>
                  <span className='skills__block-value'>{item.proficiency}</span>
                </span>
              </div>
            );
          })}

        </InfoBlock>
      </div>
    );
  }
}

export default Skills;
