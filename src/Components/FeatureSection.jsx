import React from 'react';
import { AiOutlineThunderbolt } from 'react-icons/ai';
import { BsChatHeart } from 'react-icons/bs';
import { FaArrowUpRightFromSquare } from 'react-icons/fa6';
import { FiCommand } from 'react-icons/fi';
import { LuMessagesSquare } from 'react-icons/lu';
import { RiChatSmile2Line } from 'react-icons/ri';


const FeaturesSection = () => {
    return (
        <section className="features-section">
            <div className='features-header'>
                <div>Features</div>
                <h2>Analytics that feels like it's from the future</h2>
                <p>Powerful, self-serve product and growth analytics to help you convert, engage, and retain more users. Trusted by over 4,000 startups.</p>
            </div>
            <div className="features-container">
                <div className="feature-card">
                    <i className="icon-bell"><LuMessagesSquare /></i>
                    <h3>Share team inboxes</h3>
                    <p>Whether you have a team of 2 or 200, our shared team inboxes keep everyone on the same page and in the loop.</p>
                </div>

                <div className="feature-card">
                    <i className="icon-lightning"><AiOutlineThunderbolt /></i>
                    <h3>Deliver instant answers</h3>
                    <p>An all-in-one customer service platform that helps you balance everything your customers need to be happy.</p>
                </div>

                <div className="feature-card">
                    <i className="icon-calendar"><FaArrowUpRightFromSquare /></i>
                    <h3>Manage your team with reports</h3>
                    <p>Measure what matters with Untitled's easy-to-use reports. You can filter, export, and drilldown on the data in a couple clicks.</p>
                </div>

                <div className="feature-card">
                    <i className="icon-chat"><RiChatSmile2Line /></i>
                    <h3>Connect with customers</h3>
                    <p>Solve a problem or close a sale in real-time with chat. If no one is available, customers are seamlessly routed to email without confusion.</p>
                </div>

                <div className="feature-card">
                    <i className="icon-puzzle"><FiCommand /></i>
                    <h3>Connect the tools you already use</h3>
                    <p>Explore 100+ integrations that make your day-to-day workflow more efficient and familiar. Plus, our extensive developer tools.</p>
                </div>

                <div className="feature-card">
                    <i className="icon-user"><BsChatHeart /></i>
                    <h3>Our people make the difference</h3>
                    <p>We're an extension of your customer service team, and all of our resources are free. Chat to our friendly team 24/7 when you need help.</p>
                </div>
            </div>
        </section>
    );
};

export default FeaturesSection;