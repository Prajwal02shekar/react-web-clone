import React from 'react';
import { FaDotCircle } from 'react-icons/fa';


const Nav= () => {
  return (
    <nav className="navbar">
      <div className="logo">
        <img src="https://t3.ftcdn.net/jpg/06/05/00/08/360_F_605000896_qhXxs5nFKUxHzGIRuxZjzzEO4tieXaHA.jpg" alt="Logo" />
        <span>Untitled UI</span>
      </div>
      <ul className="nav-links">
        <li><a href="/">Home</a></li>
        <li><a href="/products">Products</a></li>
        <li><a href="/resources">Resources</a></li>
        <li><a href="/pricing">Pricing</a></li>
      </ul>
      <div className="profile">
        <img src="https://s3-alpha-sig.figma.com/img/6c1f/e88a/3b9e8dfddf4a065581b04df49638ca9c?Expires=1734307200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=ffKmMWaQxZr2j4k07JUEsL0VBGC3eaPd~Cw0tgkPaltq5QpEoT9MP8cwNz0erF5AqBIRMpcue~eFRVfzR8T5WlPGrvnEPl8kYGg01w~GX1ON5p7m7b0F4WiAfgsyXMU9JQA4ZwGeMoY5buWAs4DUxDCnVyQFWuY41hfckZav4N20w3Wg21D3RcUuGjcSpOA7UY2TDVS5YQuxyq0urhiXjMCkuuW2iiC2eU9TLnxuM~qQPBiE1pTF2gaYaitC6QWaYSJ~a7O7vQjZkaKqJWeG2Yfl9rMJaQveeqslFGC76K9oaHHETzMuvUgsX5zUyLUcYbIPzHoUlsamnGta30wNNg__" alt="Profile" />
      </div>
    </nav>
  );
};

export default Nav;