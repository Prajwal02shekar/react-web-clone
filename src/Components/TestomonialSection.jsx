import React from 'react'
import { FaBoltLightning } from 'react-icons/fa6'

const TestomonialSection = () => {
  return (
    <div className='testomonial'>
        <div className='testimonialdiv'>
            <div ><span id='testiicon'><FaBoltLightning /></span>  Sisyphus</div>
            <div id='testimonialcontent'>We’ve been using Untitled to kick start every new project and can’t imagine working without it.</div>
            <div id='testimonial'>
                <div className='testimonial-img'><img src="https://s3-alpha-sig.figma.com/img/fcd7/e604/94e98ef4a34b3228a1783b7f500b0df6?Expires=1734307200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=NdqxZENmfRpAao8u62xUNr7VwiwkoDrNEF7oS1o5xitVwp9u2cxGX2UCOLkl~65ga9ahF0LMUaPmZqeOnUih0va3fxMOKkZVHPcGwW5TxnhWsLJwn3pJAtWEO6udoXgre6QCm7t7pOWBlFbrKvAOi58WFMN~PubJdfsoSvGJ4JeyxPpD8UXF-Kq2XQWwh-2vKOstX4ZGWScSEsfyNkUiHRJoT3I1YGT3GcEypnxUt6LuO96LKl-nxgCcEwd8J5kEF5U8dKrGUjCw3O5Fq370LOIAfJJt3UdcyXQSAGH7z~KcPXFPvMIoiSycXhRCx-RpZOArFWhhCcyKeStob~7PVw__" alt="" width="30px" height="30px" /> </div>
                <h4>Candice Wu</h4>
                <p>Product Manager, Sisyphus</p>
            </div>
        </div>
    </div>
  )
}

export default TestomonialSection