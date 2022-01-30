import React, { PureComponent } from 'react';
import { Data } from '../../data';
import InfoBlock from '../ui/infoBlock';
import './cantrips.scss';

interface Props {
  className?: string;
}

class Cantrips extends PureComponent<Props> {
  componentDidMount() {
    fetch(
      'https://pf2e-ru-translation.readthedocs.io/ru/latest/spells/D/disrupt-undead.html?highlight=%D0%A0%D0%B0%D0%B7%D1%80%D1%83%D1%88%D0%B5%D0%BD%D0%B8%D0%B5%20%D0%BD%D0%B5%D0%B6%D0%B8%D1%82%D0%B8#disrupt-undead-1'
    ).then((data) => {
      console.log(data);
    });
  }

  render() {
    return (
      <div className={`cantrips ${this.props.className || ''}`} id="cantrips">
        <InfoBlock title="Фокусы">
          {Data.cantrips.map((item) => {
            return (
              <div className="cantrips__item">
                <div className="cantrips__title">
                  <a href={item.link} className="">
                    {item.title}
                  </a>
                </div>
                <iframe
                  src={item.link}
                  className="cantrips__description"
                ></iframe>
              </div>
            );
          })}
        </InfoBlock>
      </div>
    );
  }
}

export default Cantrips;
