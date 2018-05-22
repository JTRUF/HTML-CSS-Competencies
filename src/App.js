import React, { Component } from 'react';
import './App.css';
import image from './images/background-image.png';

class App extends Component {
  render() {
    return (
      <html>
        <body>
        <head>
          <h1>This is an H1</h1>
          <h2>This is an H2</h2>
        </head>
      <div>
        <script log={console.log("script tag")}/>
        <div className="box-model"><span>box model</span></div>
        <div className="Float-Display">float display</div>
        <div className="Font-Background">font background</div>
        <div className="Position"><p>paragraph</p>position</div>
        <div className="Selectors" id="one">selectors</div>
        <div className="fancy-effects">fancy effects text ellipsis text ellipsis text ellipsis text ellipsis text ellipsis text ellipsis text ellipsis text ellipsis text ellipsis text ellipsis text ellipsis text ellipsis text ellipsis text ellipsis text ellipsis text ellipsis text ellipsis text ellipsis text ellipsis text ellipsis text ellipsis text ellipsis text ellipsis text ellipsis text ellipsis text ellipsis text ellipsis text ellipsis</div>
        <img className="img-spin" src={image} alt=""/>
        <div className="flexbox">Flexbox</div>
        <div className="grid"><p>Grid1</p><p>Grid2</p><p>Grid3</p><p>Grid4</p></div>
        <input className="disable" placeholder="disabled"/>
        <button className="foc">disabled</button>
        <button className="hov">disabled</button>
        <ul>
          <li>one</li>
          <li>two</li>
        </ul>
        <a href="https://www.google.com">Google</a>
        <article>article</article>
        <section>section</section>
        <br/>
        <footer>footer</footer>
      </div>
      </body>
      </html>
    );
  }
}

export default App;
