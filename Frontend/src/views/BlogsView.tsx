import React from 'react';
import Layout from '@/components/Layout';

const BlogsView = () => {
  const blogPosts = [
    {
      id: 1,
      title: "Market Volatility: How to Navigate Uncertain Times",
      excerpt: "Understanding market volatility and strategies to protect your portfolio during uncertain economic conditions.",
      author: "Dr. Emily Rodriguez",
      date: "April 24, 2024",
      readTime: "5 min read",
      category: "Market Analysis",
      image: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      featured: true
    },
    {
      id: 2,
      title: "The Rise of ESG Investing: A Sustainable Future",
      excerpt: "Exploring the growing trend of Environmental, Social, and Governance investing and its impact on portfolios.",
      author: "Sarah Johnson",
      date: "April 22, 2024",
      readTime: "7 min read",
      category: "Sustainable Investing",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      featured: false
    },
    {
      id: 3,
      title: "Technical Analysis: Reading the Charts Like a Pro",
      excerpt: "Master the art of technical analysis with these essential chart patterns and indicators every investor should know.",
      author: "James Thompson",
      date: "April 20, 2024",
      readTime: "8 min read",
      category: "Education",
      image: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      featured: false
    },
    {
      id: 4,
      title: "Cryptocurrency: The Digital Gold Rush",
      excerpt: "Understanding the fundamentals of cryptocurrency investing and how to approach this volatile asset class.",
      author: "Michael Chen",
      date: "April 18, 2024",
      readTime: "6 min read",
      category: "Crypto",
      image: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      featured: false
    },
    {
      id: 5,
      title: "Retirement Planning: Building Your Nest Egg",
      excerpt: "Essential strategies for retirement planning and ensuring financial security in your golden years.",
      author: "Lisa Wang",
      date: "April 16, 2024",
      readTime: "9 min read",
      category: "Retirement",
      image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      featured: false
    },
    {
      id: 6,
      title: "AI in Finance: The Future of Investment",
      excerpt: "How artificial intelligence is revolutionizing the financial industry and changing the way we invest.",
      author: "David Kumar",
      date: "April 14, 2024",
      readTime: "10 min read",
      category: "Technology",
      image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      featured: false
    }
  ];

  const categories = ["All", "Market Analysis", "Education", "Crypto", "Sustainable Investing", "Retirement", "Technology"];

  return (
    <Layout>
      <div className="min-h-screen bg-gray-50 py-8">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-navy mb-4">Investment Blog</h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Stay informed with expert insights, market analysis, and investment strategies from our team of financial professionals.
            </p>
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category, index) => (
              <button
                key={index}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  index === 0 
                    ? 'bg-navy text-white' 
                    : 'bg-white text-navy hover:bg-navy hover:text-white border border-navy'
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Featured Post */}
          <div className="mb-16">
            <h2 className="text-2xl font-bold text-navy mb-8">Featured Article</h2>
            <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
              <div className="md:flex">
                <div className="md:w-1/2">
                  <img 
                    src={blogPosts[0].image} 
                    alt={blogPosts[0].title}
                    className="w-full h-64 md:h-full object-cover"
                  />
                </div>
                <div className="md:w-1/2 p-8">
                  <div className="flex items-center gap-4 mb-4">
                    <span className="bg-accent text-white px-3 py-1 rounded-full text-sm font-medium">
                      {blogPosts[0].category}
                    </span>
                    <span className="text-gray-500 text-sm">{blogPosts[0].readTime}</span>
                  </div>
                  <h3 className="text-2xl font-bold text-navy mb-4">{blogPosts[0].title}</h3>
                  <p className="text-gray-600 mb-6">{blogPosts[0].excerpt}</p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <div className="w-8 h-8 bg-gray-300 rounded-full mr-3"></div>
                      <div>
                        <p className="font-medium text-navy">{blogPosts[0].author}</p>
                        <p className="text-sm text-gray-500">{blogPosts[0].date}</p>
                      </div>
                    </div>
                    <button className="bg-navy text-white px-6 py-2 rounded-lg hover:bg-navy/90 transition-colors">
                      Read More
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Blog Grid */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-navy mb-8">Latest Articles</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {blogPosts.slice(1).map((post) => (
                <article key={post.id} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                  <img 
                    src={post.image} 
                    alt={post.title}
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-6">
                    <div className="flex items-center gap-4 mb-3">
                      <span className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-xs font-medium">
                        {post.category}
                      </span>
                      <span className="text-gray-500 text-sm">{post.readTime}</span>
                    </div>
                    <h3 className="text-lg font-semibold text-navy mb-3 line-clamp-2">{post.title}</h3>
                    <p className="text-gray-600 text-sm mb-4 line-clamp-3">{post.excerpt}</p>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center">
                        <div className="w-6 h-6 bg-gray-300 rounded-full mr-2"></div>
                        <div>
                          <p className="font-medium text-navy text-sm">{post.author}</p>
                          <p className="text-xs text-gray-500">{post.date}</p>
                        </div>
                      </div>
                      <button className="text-accent hover:text-accent/80 text-sm font-medium">
                        Read →
                      </button>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>

          {/* Newsletter Signup */}
          <div className="text-center">
            <div className="bg-navy text-white rounded-lg p-8">
              <h2 className="text-2xl font-bold mb-4">Stay Updated</h2>
              <p className="text-lg mb-6 opacity-90">
                Subscribe to our newsletter for the latest investment insights and market analysis.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-3 rounded-lg text-navy placeholder-gray-500"
                />
                <button className="bg-accent text-white px-6 py-3 rounded-lg font-semibold hover:bg-accent/90 transition-colors">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default BlogsView;
