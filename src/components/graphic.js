import React,{Component} from 'react';
import menu from './images/P&P MENU.png'
import frontbc from './images/businesscardfront.png'
import backbc from './images/businesscardback.png'

class Graphic extends Component {
  

    render() {
        return (
            <div id="graphic" class="notification">
            <div class="tile is-ancestor">
            <div class="tile is-parent">
                <div class="tile is-child box">
                    <figure class="image is-2by3">
                        <img class="" src= {menu} alt="menu"/>
                    </figure>
                </div>
            </div>
            <div class="tile is-4 is-vertical is-parent">
                <div class="tile has-background-light is-child box">
                    <p class="title has-text-centered">Graphic Design</p>
                        <p class="has-text-centered">
                        I've created these graphic designs for my business. It's a small boutique nail salon. These designs also coordinate with the interior of the salon. We keep it pretty simple and girly. I've included the service menu and matching business card below. 
                        </p>
                </div>
                <div class="tile is-child box notification">
                    <br />
                    <br />
                    <figure class="image is-5by3">
                        <img class="" src={frontbc} alt="front of busness card"/>
                    </figure>
                    <br />
                    <br />
                    <figure class="image is-5by3">
                        <img class="" src={backbc} alt="back of busness card"/>
                    </figure>
                </div>
            </div>
            </div>
          </div>
        )

    }
}
export default Graphic;

