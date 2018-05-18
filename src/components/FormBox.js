import React, { Component } from 'react';
class FormBox extends React.Component {

  constructor(props) {
    super(props);
    this.state = this.props.data
    this.changeText = this.changeText.bind(this);
    this.changeImage = this.changeImage.bind(this);
  }
  
  changeImage(ele) {
    var files = ele.target.files;
    var self = this;

    if (!ele.target.files.length) return;  // ファイル未選択

    var file = ele.target.files[0];
    if (!/^image\/(png|jpeg|gif)$/.test(file.type)) return;  // typeプロパティでMIMEタイプを参照

    var fr = new FileReader();
    fr.onload = function() {
      var image = new Image();
      image.onload = function(){
        self.setState(
          {
            image: fr.result,
            width: image.width,
            height: image.height
          },
          () => self.props.onEventCallback(self.state)
        );
      }
       image.src = fr.result;
    }
    fr.readAsDataURL(file);  // 画像読み込み
  }

  changeText(e) {
    this.setState(
      {[e.target.id]: e.target.value},
      () => this.props.onEventCallback(this.state)
    );
  }
  render() {
    return (
      <div className="col-sm-8">
        <div class="form-group">
          <label for="name">名前</label>
          <input type="text" class="form-control col-sm-6" id="name" placeholder="名前" value={this.state.name} onChange={this.changeText}/>
        </div>
        <div class="form-group">
          <div class="col-xs-9 form-inline">
            <label for="atk" class="col-sm-3">攻撃</label>
            <label for="def" class="col-sm-3">防御</label>
            <label for="mana" class="col-sm-3">マナ</label>
            <label for="type" class="col-sm-3">属性</label>
          </div>
          <div class="col-xs-9 form-inline">
            <input type="text" class="form-control col-sm-3" id="atk" placeholder="2" value={this.state.atk} onChange={this.changeText}/>
            <input type="text" class="form-control col-sm-3" id="def" placeholder="10" value={this.state.def} onChange={this.changeText}/>
            <input type="text" class="form-control col-sm-3" id="mana" placeholder="2" value={this.state.mana} onChange={this.changeText}/>
            <input type="text" class="form-control col-sm-3" id="type" placeholder="火" value={this.state.type} onChange={this.changeText}/>
          </div>
        </div>

        <div class="form-group">
          <label for="image">画像</label>
          <input type="file" class="form-control" id="image_up" placeholder="10"  onChange={this.changeImage}/>
          <img id="image" src=""/>
          <div class="col-xs-9 form-inline">
            <label for="width" class="col-sm-3">横幅</label>
            <label for="height" class="col-sm-3">縦幅</label>
            <label for="position_x" class="col-sm-3">x</label>
            <label for="position_y" class="col-sm-3">y</label>
          </div>
          <div class="col-xs-9 form-inline">
            <input type="text" class="form-control col-sm-3" id="width" value={this.state.width} onChange={this.changeText}/>
            <input type="text" class="form-control col-sm-3" id="height" value={this.state.height} onChange={this.changeText}/>
            <input type="text" class="form-control col-sm-3" id="position_x" value={this.state.position_x} onChange={this.changeText}/>
            <input type="text" class="form-control col-sm-3" id="position_y" value={this.state.position_y} onChange={this.changeText}/>
          </div>
        </div>

        <div class="form-group">
          <label for="race">タイプ</label>
          <input type="text" class="form-control" id="race" placeholder="テスト族" value={this.state.race} onChange={this.changeText}/>
        </div>
        <div class="form-group">
          <label for="detail">説明テキスト</label>
          <textarea class="form-control" id="detail" rows="3" onChange={this.changeText}>{this.state.detail}</textarea>
        </div>
      </div>
    );
  }
}

export default FormBox;
