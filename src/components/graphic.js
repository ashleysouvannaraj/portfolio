import React,{Component} from 'react';
import menu from './images/P&P MENU.png'
import frontbc from './images/businesscardfront.png'
import backbc from './images/businesscardback.png'
import './graphic.css';

class Graphic extends Component {


    render() {
        return (
                <div class ="notification">
                    <div class="columns is-mulitline is-moblie">
                        <div class="column">
                            <p class="title has-text-centered">Graphic Design</p>
                                <p>I was put in charge of creating the service menu and business card, along with other decor graphics for my business. It's a very simple design that correlates to our salon. I share this boutique nail studio with two other co-owners. We collaborated to come up with the basis of the design and I had to execute it.</p>
                        </div> 
                    </div>
                 <div class="columns is-multiline">
                    <div class="column is-half">
                        <figure class="image is-2by3">
                            <img class="" src= {menu} alt="menu"/>
                        </figure>
                    </div>
                    <div class="column is-half"> 
                        <br />
                        <br />
                        <figure class="image is-5by3"> 
                            <img class="" src={frontbc} alt="front of busness card"/>
                        </figure> <br />
                        <figure class="image is-5by3">
                            <img class="" src={backbc} alt="back of busness card"/>
                        </figure>
                </div>
                </div>
        </div>
        
        )

    }
}
export default Graphic;

