import React from 'react';
import { FaArrowRight, FaRegCirclePlay } from 'react-icons/fa6';


const HeaderSection = () => {
  return (
    <header className="header-section">
      <div className="header-content">
        <div className="header-feature">
         <div><span>New feature </span>  Check out the team dashboard <FaArrowRight id='icon'/></div>
        </div>

        <h1>Beautiful analytics to grow smarter</h1>

        <p>Powerful, self-serve product and growth analytics to help you convert, engage, and retain more users. Trusted by over 4,000 1  startups.</p>

        <div className="header-buttons">
          <button><span><FaRegCirclePlay /></span> Demo</button>
          <button>Sign up</button>
        </div>
      </div>
      <div id='header-img'>
        <img src="https://s3-alpha-sig.figma.com/img/081a/4c6e/48bee3c577d90c805ebc6abe73e441d3?Expires=1734307200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=NrwquPw2aaeCS4STk0un5yL3ITslnF08KjUbXAkYRPSkhZtByVqy7ucnmTt8jq59xWHe8j-NClmhk4f2shUc3JxwtJGR0pX8P50HP8GntSNv3ADHyvaJkrpwBwVejYqZ9y8NWRQ5L4QVuExkJF7hGs9FuBePxT5cG~-0gxCT-6zMtQVBMzmyn6mBxoSfE41jfpJbglZkZi3sHUio43WvqJ42qTgPQQn4AdKSgHI9k0Fy2Rbrqmxcmm2IIwz7JRqcmj8g5at6MEP-4GxUpEaMjyImtowvdzDQiv-nc95CCBop0TML4iego0bPsh3onqvktBeqPkqcI937YgtTfapR0g__" alt="" />
      </div>
    </header>
  );
};

export default HeaderSection;