import React from 'react'

const Blog = () => {

    const blogs = [
        {
          id: 1,
          category: "Design",
          title: "UX review presentations",
          description:
            "How do you create compelling presentations that wow your colleagues and impress your managers?",
          author: "Olivia Rhye",
          date: "20 Jan 2024",
          image: "https://s3-alpha-sig.figma.com/img/92f9/d44d/896aad9fd5981c841633a846ddb6994b?Expires=1734307200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=PXgdmHIlH8bljfP6A26O4TJGcqxLEpD-ZrCENRpk7~SM9unvvh4TTJpOjK5px6CqXtZ8pTLCOUmswOJEnDxlKOg-brBAk-ZeNI4srKKYNZ5g3sp8kj3R87XlxkvWmnf2w3zZ5Q8hBcXBDOefMv02JFbV2r8~BcExCg~alrzXJ2oqlHHTOycFQCPUuo~~CnLCNX3XHtt8eijRfCFFH0HJ96LOFKTbitPpv-Bio8YejQ7EKUGP7-zxjnqQLQV0CTZIdGJVHhkDMq-blEFnalUXVN0n2Ve-6auO7uBi8KFgQnjRGuA9O1dr8CmoEWGNEtMVLMjctf4qg0f8Zi1-MkLiDQ__", 
          authorImage: "https://s3-alpha-sig.figma.com/img/27a8/497d/5cb712a39a846f3d49443b8283852dca?Expires=1734307200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=qjMh4X20b2uK5vl0jZvQUn0hQZuBB61fODs4pDzs1qJHKCHOTKxpVDJHG3lhOz1ckO-0pPioKJTLF5fWBLGCJKeHtrEBwk3oriGcMJMiDGE2E61PW8snIttKI3B7nBtg5qBFPFOrLnwIPFL431H33xSVcSrjbRv9hkJy2cFfUOg9r-iPCfZv2zCAEHwwTiuio1683s6xxHPjhRyul5WHnGMz-IiGPhlvosu9cwWPL~0L-mkwgzFQak3QtfnUYui7VeqkJuNR3kTGrnlgndybjOujHnrVBFUxT3596n4i6DMipyhv4~sRXn1-6RSHg-YCWogqMXflVI-FnuusUk9zDA__", 
        },
        {
          id: 2,
          category: "Product",
          title: "Migrating to Linear 101",
          description:
            "Linear helps streamline software projects, sprints, tasks, and bug tracking. Here’s how to get started.",
          author: "Phoenix Baker",
          date: "19 Jan 2024",
          image: "https://s3-alpha-sig.figma.com/img/a4c5/2ab3/a3c522719b54dd45b1795921034a3f00?Expires=1734307200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=YZI2S7H4G-ckYxhuziDqMJS7LYMf~DpEVHdtvTyFPQFCtkGpQ0f6qhoHVZT~rFRVjsnSK6~dDj6eEjF4yZb9o87vPQS9ua3lF09PO8AspqTE7B7iWwpGvhOepBWgagVDoEdxIiuvZvq4qWKgMeEk98ctchpGfdqIPYKir4eD75~bEwCVlPHJdwdHLrGm4n3DCbHfSNkJk-wORyEscJb1dFhpOX6ZfAUzCDqFLeYrupbM6CwdSEeuCLZJRuLhgduc4HG4-WbIpBeYkOMH~Qmd7MOl1~m~ktdSjcPORbNJpdUQamn9IASrZWnO9pFgAxDQf7yw6FkFhM8kfLh1AMsp0w__", 
          authorImage: "https://s3-alpha-sig.figma.com/img/1173/f077/5d4f6c2c6c7caf725e2ec6d6ed6aca1d?Expires=1734307200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=AtDmmRFpLZGMqb8RHIuLK5K~lELdGNOrkpKfVZiPCyrODbIZ3j3Zp8QW3NIgs9fS-SqAVD8n7000rUVZlNus66nW1iHoLyuv92UgHFi~g8-03XLlMNfzyKoCntKfsR5AwLW8mWq6XFZGDj9Kf0IP0XXW7rIgqlPSoJiStbFW3xMsf5Tra6Jz7G12ZZNBN1jF0i4x-uZoD1gKdc6fNz7BqNGVHAJV4CCE3uHY5grwyaekJ1rt1fz-ooO2-fUcarNUF0xZ1hY87JybuaUeHdGt8FaG-BUaPD5aHOkEuhtByCmSQKXMZlAl1JuvVyzrqaJMUIUjr0QUaj203CltL5TYEw__", 
        },
        {
          id: 3,
          category: "Software Engineering",
          title: "Building your API stack",
          description:
            "The rise of RESTful APIs has been met by a rise in tools for creating, testing, and managing them.",
          author: "Lana Steiner",
          date: "18 Jan 2024",
          image: "https://s3-alpha-sig.figma.com/img/e2d0/7def/1dbd591c5182a37dfedc9ff110ae94d9?Expires=1734307200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Fi5KB-HI4r4JVZHG~5P1SZ-wmI9pkcm0A0U~15IyPNjLl43KPLw3utd-dknQtulfh~calRw3H0qRN8lIKt3EpEic1p7z3E0w3IegOEUzil3h9p5cfcmPym2LiJgq56X96klyeGkgh~SPYZ2AYoC7P4ULCdHIGhBMXRgR~lJ7QoDsxn2x6bYnjN12cXzknUr27FpEinv-w3LTjmH3l~EY7RhnsExqjgUCBl15bJetxDpksQdplRvsjsW-kNJwiJywPDbzyQXD-vc86GdIk~7uBkWwAPh4jX8wGfDcwzJ06unHX1mlEAgA7ijzVn5fiuB1NhVEhqNCog7RvP9aFweHOQ__", // Replace with actual image
          authorImage: "https://s3-alpha-sig.figma.com/img/572a/6183/892ca2df6e032e2c3c86f59b0f2caa70?Expires=1734307200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=LBBWqfMG8KPJ-095gZY2phRiXKXNFt1Z2NZvdWvTnUnjZ~u80m6B6P4b~DW3fRafVtlwVAfbALNYx6bde-FqrXJtIoHvEawhnQ2lWPdKf3BKESrA-uBmoiidlZQuCOMHKR6ZHMEaVkZ7n-Q4s9b9~jC-Sh1ObtKzLdjs9oAqI~oWg5qOvWIpxC~VYnLG4goKRlvabHLMxrqEgcblicx0w9o4JvQsep5fU6KpGS7-lBCiESRkHu7o063NQlXD5OXNz7hpVc~CtcTyhEixivrbmqPOFLI9gcUDcvQLIyAT6l6CarVg-CRTEroN1dJ6MfuDAynjbttzZPbh86hpKVDRPw__", 
        },
      ];
    
  return (
    <div className="blog-section">
    <div className="blog-header">
      <div>
        <h4 className="subtitle">Our blog</h4>
        <h1 className="main-title">Lastest blog posts</h1>
        <p className="description">
          Tool and strategies modern teams need to help their companies grow.
        </p>
      </div>
      <button className="view-posts-button">View all posts</button>
    </div>
    <div className="blog-list">
      {blogs.map((blog) => (
        <div className="blog-card" key={blog.id}>
          <img src={blog.image} alt={blog.title} className="blog-image" />
          <div className="blog-content">
            <span className="blog-category">{blog.category}</span>
            <h3 className="blog-title">{blog.title} ↗</h3>
            <p className="blog-description">{blog.description}</p>
            <div className="blog-meta">
              <img
                src={blog.authorImage}
                alt={blog.author}
                className="author-image"
              />
              <div className='blog-author'>
                <p className="author-name">{blog.author}</p>
                <p className="blog-date">{blog.date}</p>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>
  )
}

export default Blog