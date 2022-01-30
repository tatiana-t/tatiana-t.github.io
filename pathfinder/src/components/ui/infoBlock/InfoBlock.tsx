import React, { PureComponent } from 'react';
import './info-block.scss';

interface Props {
  title: string;
}

class InfoBlock extends PureComponent<Props> {
  render() {
    return (
      <div className="info-block">
        <div className="info-block__title">{this.props.title}</div>
        <div className="info-block__content">{this.props.children}</div>
      </div>
    );
  }
}
export default InfoBlock;
