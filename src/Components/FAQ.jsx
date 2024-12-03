import React, { useState } from 'react'
import { FiPlusCircle } from "react-icons/fi";
import { FiMinusCircle } from "react-icons/fi";

const FAQ = () => {

    const [activeIndex, setActiveIndex] = useState(null);
      
     const toggleFAQ = (index) => {
          setActiveIndex(activeIndex === index ? null : index);
        };
        const faqData = [
          {
            question: "Is there a free trial available?",
            answer:
              "Yes, you can try us for free for 30 days. If you want, we’ll provide you with a free, personalized 30-minute onboarding call to get you up and running as soon as possible.",
          },
          { question: "Can I change my plan later?", answer: "Yes, you can change your plan at any time." },
          { question: "What is your cancellation policy?", answer: "You can cancel anytime before the next billing cycle." },
          { question: "Can other info be added to an invoice?", answer: "Yes, additional information can be added upon request." },
          { question: "How does billing work?", answer: "Billing is done on a monthly basis, automatically." },
          { question: "How do I change my account email?", answer: "Go to account settings to update your email." },
        ];

  return (
    <div className="faq-container">
      <h1>Frequently asked questions</h1>
      <p>Everything you need to know about the product and billing.</p>
      <div className="faq-list">
        {faqData.map((item, index) => (
          <div className="faq-item" key={index}>
            <div
              className="faq-question"
              onClick={() => toggleFAQ(index)}
            >
              <span>{item.question}</span>
              <span className="faq-icon">{activeIndex === index ? <FiMinusCircle /> : <FiPlusCircle />}</span>
            </div>
            {activeIndex === index && (
              <div className="faq-answer">
                {item.answer}
              </div>
            )}
          </div>
        ))}
      </div>
      <div className="contact-section">
      <div className="contact-images">
          <img src="https://s3-alpha-sig.figma.com/img/a48e/1aea/866434aa73c311701a963ddc75997754?Expires=1734307200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=RlCbPqZsk4ncqm~FwCqa1JreP0YBfZq0lbUHujqaGo9m52CeZJyhOkVQWr1t~yC0VHc1pbs99Ef36MFps3HvTNJu6PI2xL8bwTjxtd-PVz7BfM8ZQUmeXta5DHwMyZk~BOKD4nww0Oa~JySacur-TNUXY6x4jBQgz0ukRc4pyjzvFoMztRK~gt-NqBtknE1SwJK6ac2ID-o8rt5wH6kIGobZ~cPtbzacEKAuwGsUAb2F3pR6GZiBXZV79aID-H~sV6zyWUbmGN-o-Wg-7v5XNI-jruL4VP85cxkxBuYo6LKDWmSfc9mBJF5Z6la-3ZpASN272a~oUYmH5BM0eaKtXg__" alt="Team member 1" />
          <img src="https://s3-alpha-sig.figma.com/img/27a8/497d/5cb712a39a846f3d49443b8283852dca?Expires=1734307200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=qjMh4X20b2uK5vl0jZvQUn0hQZuBB61fODs4pDzs1qJHKCHOTKxpVDJHG3lhOz1ckO-0pPioKJTLF5fWBLGCJKeHtrEBwk3oriGcMJMiDGE2E61PW8snIttKI3B7nBtg5qBFPFOrLnwIPFL431H33xSVcSrjbRv9hkJy2cFfUOg9r-iPCfZv2zCAEHwwTiuio1683s6xxHPjhRyul5WHnGMz-IiGPhlvosu9cwWPL~0L-mkwgzFQak3QtfnUYui7VeqkJuNR3kTGrnlgndybjOujHnrVBFUxT3596n4i6DMipyhv4~sRXn1-6RSHg-YCWogqMXflVI-FnuusUk9zDA__" alt="Team member 2" />
          <img src="https://s3-alpha-sig.figma.com/img/7ab6/3dcb/71188af6aa830e9296f62671157262d1?Expires=1734307200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=VipHoLj1w~~nD5xKvSfmhQxdkJm1Q~As-Ea2TNs1dInfteUiMAaJqXLBsdSIh69pyyFrhx0R4fvcq1npbFdZS2olevK-LIgIMb2nLvBt9T58DNR5fKzJaau6cQu0yWVwizWwCZFaJJIErKHwB3436-CP4EG4r7bWINme1vDy~2jpraflC-EucZ~X7HVXKYdzypTzKtzyiUKYd448uS18AGhdytsVFXx1OMf33GNJT8h825hSGPwI4Awk4RmjVTEzkkeSDB-q456cw0hM5OAkKTV82qja09NiqmcBu9MmVI9qE7cnokjersHpSG-p7H-QzAnaJ7-jg-QlR1J0PCpLMg__" alt="Team member 3" />
        </div>
        <p>Still have questions?</p>
        <p>Can’t find the answer you’re looking for? Please chat to our friendly team.</p>
        <button>Get in touch</button>
      </div>
    </div>
  )
}

export default FAQ