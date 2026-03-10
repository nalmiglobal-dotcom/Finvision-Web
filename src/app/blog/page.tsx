'use client';

import { motion } from 'framer-motion';
import Header from '@/components/sections/header';
import Footer from '@/components/sections/footer';
import { Book, GraduationCap, Users, ArrowRight, Star, ShoppingCart } from 'lucide-react';

const bookCategories = [
  {
    title: "Forex Trading",
    description: "Master the art of currency trading with these industry-standard guides.",
    icon: GraduationCap,
    books: [
      { 
        title: "Trading in the Zone", 
        author: "Mark Douglas", 
        rating: 4.9, 
        description: "The definitive guide to trading psychology and discipline. Essential for any serious trader.",
        image: "https://m.media-amazon.com/images/I/919fVv0V6KL._AC_UF1000,1000_QL80_.jpg",
        amazonLink: "https://www.amazon.com/Trading-Zone-Confidence-Discipline-Attitude/dp/0735201447"
      },
      { 
        title: "Currency Trading for Dummies", 
        author: "Brian Dolan", 
        rating: 4.7, 
        description: "A great starting point for beginners to understand the basics of the global currency markets.",
        image: "https://m.media-amazon.com/images/I/81A+gBfI5+L._AC_UF1000,1000_QL80_.jpg",
        amazonLink: "https://www.amazon.com/Currency-Trading-Dummies-Business-Personal/dp/1119824729"
      },
      { 
        title: "The Disciplined Trader", 
        author: "Mark Douglas", 
        rating: 4.8, 
        description: "Deep dive into the mental aspects of trading success and emotional control.",
        image: "https://m.media-amazon.com/images/I/71u+oK+4b6L._AC_UF1000,1000_QL80_.jpg",
        amazonLink: "https://www.amazon.com/Disciplined-Trader-Developing-Winning-Attitudes/dp/0132157575"
      },
      { 
        title: "Japanese Candlestick Charting Techniques", 
        author: "Steve Nison", 
        rating: 4.9, 
        description: "Master technical analysis with the foundational book on candlestick patterns.",
        image: "https://m.media-amazon.com/images/I/71Yv0YfXfFL._AC_UF1000,1000_QL80_.jpg",
        amazonLink: "https://www.amazon.com/Japanese-Candlestick-Charting-Techniques-Second/dp/0735201811"
      }
    ]
  },
  {
    title: "Personality Development",
    description: "Transform your mindset and build the character of a successful leader.",
    icon: Star,
    books: [
      { 
        title: "Atomic Habits", 
        author: "James Clear", 
        rating: 4.9, 
        description: "An easy and proven way to build good habits and break bad ones through tiny changes.",
        image: "https://m.media-amazon.com/images/I/81bGKUa1e0L._AC_UF1000,1000_QL80_.jpg",
        amazonLink: "https://www.amazon.com/Atomic-Habits-Proven-Build-Break/dp/0735211299"
      },
      { 
        title: "The 7 Habits of Highly Effective People", 
        author: "Stephen Covey", 
        rating: 4.8, 
        description: "Timeless principles for personal and professional effectiveness and character building.",
        image: "https://m.media-amazon.com/images/I/61vsv6sX3LL._AC_UF1000,1000_QL80_.jpg",
        amazonLink: "https://www.amazon.com/Habits-Highly-Effective-People-Powerful/dp/1982137274"
      },
      { 
        title: "Think and Grow Rich", 
        author: "Napoleon Hill", 
        rating: 4.7, 
        description: "The classic guide to achieving success through mental attitude and burning desire.",
        image: "https://m.media-amazon.com/images/I/71Uup6IDM7L._AC_UF1000,1000_QL80_.jpg",
        amazonLink: "https://www.amazon.com/Think-Grow-Rich-Landmark-Bestseller/dp/1585424331"
      },
      { 
        title: "Can't Hurt Me", 
        author: "David Goggins", 
        rating: 4.9, 
        description: "Master your mind and defy the odds. A raw look at self-discipline and mental toughness.",
        image: "https://m.media-amazon.com/images/I/813G6T596LL._AC_UF1000,1000_QL80_.jpg",
        amazonLink: "https://www.amazon.com/Cant-Hurt-Me-Master-Your/dp/1544512287"
      }
    ]
  },
  {
    title: "Human Etiquettes",
    description: "Enhance your social intelligence and professional relationships.",
    icon: Users,
    books: [
      { 
        title: "How to Win Friends and Influence People", 
        author: "Dale Carnegie", 
        rating: 4.9, 
        description: "The foundational book on improving social skills and building meaningful connections.",
        image: "https://m.media-amazon.com/images/I/71vuySruWGL._AC_UF1000,1000_QL80_.jpg",
        amazonLink: "https://www.amazon.com/How-Win-Friends-Influence-People/dp/0684852884"
      },
      { 
        title: "The Power of Body Language", 
        author: "Joe Navarro", 
        rating: 4.7, 
        description: "Read people's non-verbal intentions and project confidence in any situation.",
        image: "https://m.media-amazon.com/images/I/81x1+FmS9RL._AC_UF1000,1000_QL80_.jpg",
        amazonLink: "https://www.amazon.com/Power-Body-Language-Everything-Intelligence/dp/1416592019"
      },
      { 
        title: "Emotional Intelligence 2.0", 
        author: "Travis Bradberry", 
        rating: 4.6, 
        description: "Practical strategies to increase your EQ and navigate social complexities.",
        image: "https://m.media-amazon.com/images/I/817E17uGk1L._AC_UF1000,1000_QL80_.jpg",
        amazonLink: "https://www.amazon.com/Emotional-Intelligence-2-0-Travis-Bradberry/dp/0974320625"
      },
      { 
        title: "Crucial Conversations", 
        author: "Patterson & Grenny", 
        rating: 4.8, 
        description: "Tools for talking when stakes are high and emotions are strong.",
        image: "https://m.media-amazon.com/images/I/71v4X6+B7NL._AC_UF1000,1000_QL80_.jpg",
        amazonLink: "https://www.amazon.com/Crucial-Conversations-Talking-Stakes-High/dp/0071771322"
      }
    ]
  }
];

export default function BlogPage() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />
      
      <main className="flex-1 pt-32 pb-20 px-4 md:px-8">
        <div className="container mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6">
              <Book className="w-5 h-5 text-primary" />
              <span className="text-primary font-bold text-sm tracking-widest uppercase">Knowledge Hub</span>
            </div>
            
            <h1 className="text-4xl md:text-6xl font-black mb-6">
              Essential <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Readings</span>
            </h1>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Master the markets, your mind, and your interactions with our curated selection of industry-leading books.
            </p>
          </motion.div>

          <div className="space-y-32">
            {bookCategories.map((category, catIdx) => (
              <div key={catIdx}>
                <div className="flex items-center gap-4 mb-12">
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center border border-white/10 shadow-xl shadow-primary/5">
                    <category.icon className="w-7 h-7 text-primary" />
                  </div>
                  <div>
                    <h2 className="text-3xl font-bold tracking-tight">{category.title}</h2>
                    <p className="text-muted-foreground">{category.description}</p>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                  {category.books.map((book, bookIdx) => (
                    <motion.div
                      key={bookIdx}
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: bookIdx * 0.1 }}
                      className="group flex flex-col"
                    >
                      {/* Book Cover Frame - IMPROVED */}
                      <div className="relative aspect-[3/4.5] mb-6 rounded-xl overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.5)] transition-all duration-500 group-hover:scale-[1.03] group-hover:-translate-y-3 group-hover:shadow-primary/30 border border-white/5 bg-neutral-900">
                        {/* Realistic Book Spine Effect */}
                        <div className="absolute left-0 top-0 bottom-0 w-2 bg-black/40 z-20" />
                        <div className="absolute left-2 top-0 bottom-0 w-[1px] bg-white/10 z-20" />
                        
                        {/* Shimmer / Lighting Effect */}
                        <div className="absolute inset-0 bg-gradient-to-tr from-black/40 via-transparent to-white/5 z-10" />
                        
                        <img 
                          src={book.image} 
                          alt={book.title}
                          className="w-full h-full object-cover"
                          loading="lazy"
                        />
                        
                        {/* Overlay Actions */}
                        <div className="absolute inset-0 z-20 bg-background/80 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-all duration-300 flex flex-col items-center justify-center gap-4 px-6 text-center">
                          <button 
                            onClick={() => window.parent.postMessage({ type: "OPEN_EXTERNAL_URL", data: { url: book.amazonLink } }, "*")}
                            className="w-full py-4 bg-primary text-background font-black rounded-xl flex items-center justify-center gap-3 hover:bg-white transition-all shadow-xl shadow-primary/20"
                          >
                            <ShoppingCart className="w-5 h-5" /> BUY ON AMAZON
                          </button>
                          <p className="text-xs text-muted-foreground font-medium">Verified Product Link</p>
                        </div>

                        {/* Rating Badge */}
                        <div className="absolute top-4 right-4 z-30 px-3 py-1.5 rounded-full bg-black/60 backdrop-blur-md border border-white/10 flex items-center gap-1.5">
                          <Star className="w-3.5 h-3.5 text-yellow-500 fill-yellow-500" />
                          <span className="text-white text-xs font-bold">{book.rating}</span>
                        </div>
                      </div>

                      <div className="flex-1 px-2">
                        <div className="flex items-center gap-2 mb-2">
                          <span className="text-[10px] font-black uppercase tracking-widest text-primary bg-primary/10 px-2 py-0.5 rounded-md">Must Read</span>
                        </div>
                        <h3 className="font-bold text-xl mb-1 group-hover:text-primary transition-colors line-clamp-2 leading-tight">
                          {book.title}
                        </h3>
                        <p className="text-muted-foreground text-sm font-semibold mb-3">By {book.author}</p>
                        <p className="text-muted-foreground/80 text-sm line-clamp-3 leading-relaxed font-medium">
                          {book.description}
                        </p>
                      </div>
                      
                      <button 
                        onClick={() => window.parent.postMessage({ type: "OPEN_EXTERNAL_URL", data: { url: book.amazonLink } }, "*")}
                        className="mt-6 mx-2 flex items-center gap-2 text-sm font-black text-primary hover:text-white transition-all group-hover:gap-3 uppercase tracking-wider"
                      >
                        VIEW ON AMAZON <ArrowRight className="w-4 h-4" />
                      </button>
                    </motion.div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* CTA Section */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-40 p-1 rounded-[3rem] bg-gradient-to-r from-primary via-accent to-primary animate-gradient-x shadow-2xl shadow-primary/20"
          >
            <div className="bg-background/90 backdrop-blur-3xl p-12 md:p-24 rounded-[2.9rem] text-center relative overflow-hidden">
              <div className="absolute top-0 right-0 w-96 h-96 bg-primary/20 blur-[120px] -z-10" />
              <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent/20 blur-[120px] -z-10" />
              
              <div className="relative z-10">
                <h2 className="text-4xl md:text-6xl font-black mb-8 tracking-tight">Expand Your Horizon</h2>
                <p className="text-muted-foreground text-xl mb-12 max-w-3xl mx-auto leading-relaxed font-medium">
                  "Knowledge is the only asset that increases when shared." Dive into these resources to build a solid foundation for your trading career and personal growth.
                </p>
                <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                  <button 
                    onClick={() => {
                      const target = document.getElementById('courses');
                      if (target) target.scrollIntoView({ behavior: 'smooth' });
                      else window.location.href = '/#courses';
                    }}
                    className="w-full sm:w-auto px-12 py-5 bg-primary text-background font-black rounded-2xl hover:scale-105 active:scale-95 transition-all shadow-2xl shadow-primary/40 text-lg"
                  >
                    EXPLORE COURSES
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
