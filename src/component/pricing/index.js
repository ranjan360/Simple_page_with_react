import React, {Component} from 'react'
import MyButton from '../utils/MyButton';
import Zoom from 'react-reveal/Zoom'

class Pricing extends Component {

    state = {
        prices: [100,150,250],
        positions: ['Balcony','Medium','Star'],
        desc: [
            'dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.',
            'Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. ',
            'Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Cras mattis consectetur purus sit amet fermentum.'
        ],
        linkto: ['https://www.facebook.com/Ranjan3606','https://www.facebook.com/Ranjan3606','https://www.facebook.com/Ranjan3606'],
        delay: [500, 0, 500]
    }

    showBoxes = () => (
        this.state.prices.map((box,i)=>(
            <Zoom>
                <div className="pricing_item">
                    <div className="pricing_inner_wrapper">
                        <div className="pricing_title">
                            <span>${this.state.prices[i]}</span>
                            <span>{this.state.positions[i]}</span>
                        </div>
                        <div className="pricing_description">
                            <h3>{this.state.desc[i]}</h3>
                        </div>
                        <div className="pricing_buttons">
                            <MyButton 
                                text="Purchase"
                                bck="#ffa800"
                                color="#fff"
                                link={this.state.linkto[i]}
                                />
                        </div>
                    </div>
                </div>
            </Zoom>
        ))
    )


    render() {
        return (
            <div className="bck_black">
                <div className="center_wrapper pricing_section">
                    <h2>Pricing</h2>

                    <div className="pricing_wrapper">
                        {this.showBoxes()}
                    </div>

                </div>
                
            </div>
        )
    }
}
export default Pricing;