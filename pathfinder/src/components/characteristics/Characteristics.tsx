import React, { PureComponent } from 'react';
import { Data } from '../../data';
import InfoBlock from '../ui/infoBlock';
import './characeristics.scss';

interface Props {
  className?: string;
}
class Characteristics extends PureComponent<Props> {
  render() {
    return (
      <div
        className={`characteristics ${this.props.className || ''}`}
        id="abilities"
      >
        <InfoBlock title="Characteristics">
          {Data.characteristics.map((item) => {
            return (
              <div className="characteristics__item" key={item.title}>
                <span className="characteristics__title">{item.title}</span>
                <span className="characteristics__value">{item.value}</span>
                <span className="characteristics__mod">{item.mod}</span>
              </div>
            );
          })}
        </InfoBlock>
      </div>
    );
  }
}

export default Characteristics;
