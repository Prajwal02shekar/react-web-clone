import React from 'react';
import { FaArrowRight } from 'react-icons/fa';
import { FaArrowUpRightFromSquare, FaBoltLightning } from 'react-icons/fa6';
import { LuMessagesSquare } from 'react-icons/lu';


const Content = () => {
    return (

        <div>
            <section className="features-section">
                <h4 className="section-title">Features</h4>
                <h1 className="feature-heading">Cutting-edge features for advanced analytics</h1>
                <p className="feature-description">Powerful, self-serve product and growth analytics to help you convert, engage, and retain more users. Trusted by over 4,000 startups.</p>
            </section>
            <section className='features-image'>
                <div id='image1'><img  src="https://s3-alpha-sig.figma.com/img/081a/4c6e/48bee3c577d90c805ebc6abe73e441d3?Expires=1734307200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=NrwquPw2aaeCS4STk0un5yL3ITslnF08KjUbXAkYRPSkhZtByVqy7ucnmTt8jq59xWHe8j-NClmhk4f2shUc3JxwtJGR0pX8P50HP8GntSNv3ADHyvaJkrpwBwVejYqZ9y8NWRQ5L4QVuExkJF7hGs9FuBePxT5cG~-0gxCT-6zMtQVBMzmyn6mBxoSfE41jfpJbglZkZi3sHUio43WvqJ42qTgPQQn4AdKSgHI9k0Fy2Rbrqmxcmm2IIwz7JRqcmj8g5at6MEP-4GxUpEaMjyImtowvdzDQiv-nc95CCBop0TML4iego0bPsh3onqvktBeqPkqcI937YgtTfapR0g__" alt="" />
                </div>
                <img id='image2' src="https://s3-alpha-sig.figma.com/img/91ca/8938/7f26a92b60f8e7bf4bfe8c9f528cf3c1?Expires=1734307200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=YfJLiFgzxJ6Ze52QcH5iBC2G44tQveLIlk0P0y8X5cL2S9wQ9qVF8GRqcjvP3yVRG6I2ZnxomWSb~lRFk8S0QMsSi4JGnDn3Xfwk0EWvNWmMFMPw2fKOg5ItBPbFeIn7ESYgVq~KriX3~Co1--EJo7hc7NDmKB8DR6Zb8trWiY940XNmPgqcjnS9eYlG~m0G-LLzRErTLXthQRKZgbjIRmO-AtKq-UHuK~3SEowArW~pZDrUdQQk-z02mzuoSEMRdBZOOUU1IkmFKYpA2-7Ofnl6bS~sEHEJVcAJa7sEvfvtzS8Iu3U5zy5zvkeIQnA59QmrYqjcya4JFQH0nmTDnw__" alt="" />
            </section>
            <section className="features-section">

                <div className="features-container">
                    <div className="feature-card">
                        <i className="icon-bell"><LuMessagesSquare /></i>
                        <h3>Share team inboxes</h3>
                        <p>Whether you have a team of 2 or 200, our shared team inboxes keep everyone on the same page and in the loop.</p>
                        <h4>Learn more <FaArrowRight id='icon' /> </h4>
                    </div>

                    <div className="feature-card">
                        <i className="icon-lightning"><FaBoltLightning /></i>
                        <h3>Deliver instant answers</h3>
                        <p>An all-in-one customer service platform that helps you balance everything your customers need to be happy.</p>
                        <h4>Learn more <FaArrowRight id='icon' /> </h4>
                    </div>

                    <div className="feature-card">
                        <i className="icon-calendar"><FaArrowUpRightFromSquare /></i>
                        <h3>Manage your team with reports</h3>
                        <p>Measure what matters with Untitled's easy-to-use reports. You can filter, export, and drilldown on the data in a couple clicks.</p>
                        <h4>Learn more <FaArrowRight id='icon' /> </h4>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Content;