import React from 'react'
import { FaCube } from 'react-icons/fa'
import { GiFeatherWound } from 'react-icons/gi'
import { IoSunnySharp } from 'react-icons/io5'
import { LuDiamond } from 'react-icons/lu'
import { PiLightningBold } from 'react-icons/pi'
import { SiReactos } from 'react-icons/si'

const Socialproofsection = () => {
    return (
        <div>
            <div id='section2a'>
                <div id='section2b'>
                    <div>Join 4,000+ companies already growing</div>
                    <br /> <br />
                    <div id='section2c'>
                        <div>
                            <div ><PiLightningBold className='icons' color='blue'/></div>
                            <div id='section2d'>Boltshift</div>
                        </div>
                        <div>
                        <div ><FaCube className='icons' /></div>
                            <div id='section2d'>Lightbox</div>
                        </div>
                        <div>
                        <div ><GiFeatherWound className='icons' color='green'/></div>
                            <div id='text'>FeatherDev</div>
                        </div>
                        <div>
                        <div ><SiReactos className='icons' color='#6941C6'/></div>
                            <div id='section2d'>Spherule</div>
                        </div>
                        <div>
                        <div ><LuDiamond className='icons' color='#444CE7'/></div>
                            <div id='text'>GlobalBank</div>
                        </div>
                        <div>
                        <div ><IoSunnySharp className='icons' color='#FF4405'/></div>
                            <div id='section2d'>Neitzsche</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Socialproofsection