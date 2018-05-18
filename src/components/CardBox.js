import React, { Component } from 'react';
//import sample_img from '../img/sample_card.jpg';
class CardBox extends React.Component {
  constructor(props) {
    super(props);
    this.state = this.props.data
    this.state.index = this.props.index
  }
  data_render(receive){
    this.setState(receive);
  }

  render() {
    var lines = this.state.detail.split(/\n/).map(function(line) {
        return (<div>{line}</div>);
    });

  
    return (
      <div className="col-sm-4 card-box">
        <div className="card_main">
          <div className="card mb-4 box-shadow card-box" >
            <img className="card-main-img" style={{marginTop:"-"+this.state.position_y+"px",marginLeft:"-"+this.state.position_x+"px"}} src={this.state.image} width={this.state.width} height={this.state.height} data-holder-rendered="true"/>
            <div className="card-img-overlay overlay-padding">
              <div className="card-text">
                <div className="card_atk">{this.state.atk}</div>
                <div className="card_def">{this.state.def}</div>
                <div className="card_name">{this.state.name}</div>
              </div>
              <div className="clear"></div>
              <p className="card-text card-detail-text">{lines}</p>
              <div className="card-text">
                <div className="card_mana">{this.state.mana}</div>
                <div className="card_type">{this.state.type}</div>
                <div className="card_race">{this.state.race}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default CardBox;
