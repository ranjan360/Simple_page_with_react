import React from 'react'
import Carrousel from './Carrousel'
import TimeUntil from './TimeUntil'



const Index = () => {
        return (
            <div style={{position: 'relative'}}>
                
                <Carrousel />

                <div className="artist_name">
                    <div className="wrapper">
                        Ranjan Roy
                    </div>
                </div>

                <TimeUntil />
            </div>
        )
    }


export default Index;