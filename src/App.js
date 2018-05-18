import React, { Component } from 'react';
import './App.css';
import sample_img from './img/sample_card.jpg';
import Navigation from "./components/Navigation"
import FormBox from "./components/FormBox"
import CardBox from "./components/CardBox"
class App extends Component {
  card_data;
  get card_row_limit() { //横一列のカード数
    return 3
  }
  constructor(props) {
    super(props);
    this.card_data = {
      name: "トラジの焼き肉",
      atk: 5,
      def: 10,
      mana: 4,
      type: "飯",
      race: "ランチ族",
      image: sample_img,
      width: "300px",
      height:"400px",
      position_x: 0,
      position_y: 0,
      detail:"1行目の説明テキスト\n2行目の説明テキスト\n3行目"
    }; 
    this.count = 0
    this.cardlist = []
    this.render = this.render.bind(this);
    this.onClick = this.onClick.bind(this);
  }
  onClick(e) {
  // e is SyntheticEvent
    this.cardlist.unshift(this.card_data)
    this.setState(
      { count: this.count },
      () => {
          for (var key in this.refs) {
            if (this.refs.hasOwnProperty(key)){
              this.refs[key].data_render(this.cardlist[key.replace("card","")])
            }
          }
        }
    );
    this.count++
  }
  receive (data) {
    this.card_data = data
    this.refs.FirstCardBox.data_render(this.card_data)
  }
  render() {
    return (
      <div className="container">
        <Navigation />
        <h1 className="no_print">カードジェネレーター</h1>
        <div className="row no_print">
          <div className="col-sm-8">
            <FormBox data={this.card_data} onEventCallback={e => this.receive(e)}/>
            <button className="btn btn-primary btn-lg btn-block" onClick={this.onClick}>カードを作る!</button>
          </div>
          <div>
          <CardBox data={this.card_data} ref='FirstCardBox'/>
          </div>
        </div>
        <div className="printBox">
          {
            Object.keys(this.cardlist).filter(key => key%this.card_row_limit === 0).map(
              (carddata,i) => { 
                  return React.createElement('div',{className:'row'},((row_data,num) =>
                    Object.keys(this.cardlist).filter(key => ((key >= num*this.card_row_limit) && (key <= num*this.card_row_limit+(this.card_row_limit-1)))).map(
                      (row_card_data,in_row_number) =>  {
                        var card_num = num*this.card_row_limit+in_row_number
                        return React.createElement(CardBox, {data:this.cardlist[card_num], index:card_num, ref:"card"+(card_num)})
                      }
                    )
                  )(this.cardlist,i))
              }
            )
          }
        </div>
      </div>
    );
  }
}

export default App;
