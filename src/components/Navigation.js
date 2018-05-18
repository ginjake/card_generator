import React from 'react';

class Navigation extends React.Component {
  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-dark bg-info">
        <div className="container">
          <div className="navbar-brand" href="/">
            <div className="navbar_title">アナログゲームプロトタイプメーカー</div>
          </div>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">

              <div className="navbar-right">
                <a className="nav_item text-light" href="http://www.ginjake.net/yagi/index.html">おしまい畑と世界の種 <span className="sr-only">(current)</span></a>
                <a className="text-light" href="https://www.ginjake.net/blog">ginjakeブログ <span className="sr-only">(current)</span></a>
              </div>
          </div>
        </div>
      </nav>
    )
  }
}

export default Navigation;