import React, { Component } from 'react'
import Fade from 'react-reveal/Fade';
import Slide from 'react-reveal/Slide'

import MyButton from '../utils/MyButton'


class Discount extends Component {

    state = {
        discountStart:0,
        discountEnd: 30
    }


    porcentage = () => {
        if (this.state.discountStart < this.state.discountEnd){
            this.setState({
               discountStart: this.state.discountStart + 1 
            })
        }
    }


     componentDidUpdate(){
         setTimeout(()=> {
             this.porcentage()
         }, 30)
     }



    render() {
        return (
            <div className="center_wrapper">
                <div className="discount_wrapper">
                    <Fade
                        onReveal={()=> this.porcentage()}
                    >
                        <div className="discount_porcentage">
                            <span>{this.state.discountStart}%</span>
                            <span>Off</span>
                        </div>
                    </Fade>
                    
                    <Slide right>
                        <div className="discount_description">
                            <h3>Purchase tickets before 20th JUNE </h3>
                            <p>We have limited time and endless options. The longer you take to learn something, the less impact you have on your organization and the less potential to grow in your career. You need to learn high-impact, value-adding tools quickly.</p>
                        
                            <MyButton 
                                text="Purchase Ticket"
                                bck="#ffa800"
                                color="#fff"
                                link="# "
                            />

                        </div>
                    </Slide>


                </div>
            </div>
        )
    }
}
export default Discount;