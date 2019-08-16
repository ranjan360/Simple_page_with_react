import React from 'react'

 const Location = ()=> {
        return (
            <div className="location_wrapper">
                <iframe 
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d56003.786665512205!2d77.23210662382913!3d28.682566243950138!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cfb0f509c976f%3A0x9ec1dbe6a1f4fd3c!2sShahdara%2C+Delhi!5e0!3m2!1sen!2sin!4v1565590044969!5m2!1sen!2sin" 
                    width="600" 
                    height="450" 
                    frameborder="0" 
                    style="border:0" 
                    allowFullScreen>

                </iframe>

                <div className="location_tag">
                    <div>Location</div>
                </div>
            </div>
        )
    }


export default Location