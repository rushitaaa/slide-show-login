import { motion } from "framer-motion";
import {
  Cloud, Sun, CloudRain, Newspaper, TrendingUp, Clock,
  ArrowUpRight, ArrowDownRight, BarChart3, Droplets, Wind,
  MapPin, Thermometer, Eye, Zap
} from "lucide-react";

const weatherData = {
  temp: "22°C",
  feelsLike: "20°C",
  condition: "Partly Cloudy",
  humidity: "65%",
  wind: "12 km/h",
  location: "San Francisco, CA",
  forecast: [
    { day: "Tue", temp: "24°", low: "16°", icon: Sun },
    { day: "Wed", temp: "19°", low: "13°", icon: CloudRain },
    { day: "Thu", temp: "21°", low: "15°", icon: Cloud },
    { day: "Fri", temp: "26°", low: "18°", icon: Sun },
  ],
};

const stockTickers = [
  { symbol: "AAPL", price: "189.25", change: "+1.42%", up: true },
  { symbol: "GOOGL", price: "141.80", change: "+0.85%", up: true },
  { symbol: "TSLA", price: "248.50", change: "-2.13%", up: false },
  { symbol: "AMZN", price: "178.90", change: "+0.67%", up: true },
];

const newsItems = [
  {
    category: "Technology",
    title: "AI Revolution Transforms Healthcare Diagnostics Worldwide",
    time: "2h ago",
    source: "TechCrunch",
    views: "12.4K",
  },
  {
    category: "Finance",
    title: "Global Markets Rally on Economic Optimism and Rate Cuts",
    time: "4h ago",
    source: "Bloomberg",
    views: "8.2K",
  },
  {
    category: "Science",
    title: "New Renewable Energy Breakthrough in Solar Technology",
    time: "5h ago",
    source: "Nature",
    views: "6.1K",
  },
  {
    category: "World",
    title: "International Climate Summit Reaches Historic Agreement",
    time: "7h ago",
    source: "Reuters",
    views: "15.8K",
  },
];

const trendingTopics = [
  { tag: "#AI", posts: "24.5K" },
  { tag: "#Climate", posts: "18.2K" },
  { tag: "#Markets", posts: "12.8K" },
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.08, delayChildren: 0.1 },
  },
};

const item = {
  hidden: { opacity: 0, x: -16 },
  show: { opacity: 1, x: 0, transition: { duration: 0.4 } },
};

const NewsWeatherPanel = () => {
  return (
    <motion.div
      className="h-full overflow-y-auto p-6 space-y-5 scrollbar-thin"
      variants={container}
      initial="hidden"
      animate="show"
    >
      {/* Header */}
      <motion.div className="flex items-center justify-between" variants={item}>
        <h2 className="text-xl font-bold font-display text-foreground flex items-center gap-2">
          <div className="h-8 w-8 rounded-lg bg-primary/10 flex items-center justify-center">
            <Zap className="h-4 w-4 text-primary" />
          </div>
          Live Feed
        </h2>
        <span className="text-[10px] text-muted-foreground bg-secondary px-2.5 py-1 rounded-full flex items-center gap-1">
          <span className="h-1.5 w-1.5 rounded-full bg-[hsl(142,70%,45%)] animate-pulse" />
          Live
        </span>
      </motion.div>

      {/* Weather Card */}
      <motion.div
        className="rounded-2xl bg-gradient-to-br from-[hsl(210,80%,45%)] via-[hsl(220,70%,35%)] to-[hsl(240,60%,25%)] p-5 text-[hsl(0,0%,100%)] shadow-xl shadow-[hsl(220,60%,35%)]/20 relative overflow-hidden"
        variants={item}
        whileHover={{ scale: 1.01 }}
        transition={{ type: "spring", stiffness: 300 }}
      >
        {/* Decorative circles */}
        <div className="absolute -top-8 -right-8 h-32 w-32 rounded-full bg-[hsl(0,0%,100%)]/5" />
        <div className="absolute -bottom-4 -left-4 h-20 w-20 rounded-full bg-[hsl(0,0%,100%)]/5" />
        
        <div className="relative z-10">
          <div className="flex items-center gap-1.5 text-[11px] opacity-70 mb-3">
            <MapPin className="h-3 w-3" />
            {weatherData.location}
          </div>
          <div className="flex items-center justify-between mb-3">
            <div>
              <p className="text-5xl font-bold font-display tracking-tight">{weatherData.temp}</p>
              <p className="text-sm opacity-80 mt-1">{weatherData.condition}</p>
            </div>
            <motion.div
              animate={{ y: [0, -4, 0] }}
              transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
            >
              <Cloud className="h-14 w-14 opacity-80 drop-shadow-lg" />
            </motion.div>
          </div>
          <div className="grid grid-cols-3 gap-3 text-[11px] opacity-80 mb-4">
            <span className="flex items-center gap-1.5 bg-[hsl(0,0%,100%)]/10 rounded-lg px-2 py-1.5"><Droplets className="h-3 w-3" /> {weatherData.humidity}</span>
            <span className="flex items-center gap-1.5 bg-[hsl(0,0%,100%)]/10 rounded-lg px-2 py-1.5"><Wind className="h-3 w-3" /> {weatherData.wind}</span>
            <span className="flex items-center gap-1.5 bg-[hsl(0,0%,100%)]/10 rounded-lg px-2 py-1.5"><Thermometer className="h-3 w-3" /> {weatherData.feelsLike}</span>
          </div>
          <div className="pt-3 border-t border-[hsl(0,0%,100%)]/15 grid grid-cols-4 gap-2">
            {weatherData.forecast.map((day) => (
              <motion.div
                key={day.day}
                className="text-center space-y-1 py-1.5 rounded-lg hover:bg-[hsl(0,0%,100%)]/10 transition-colors cursor-pointer"
                whileHover={{ y: -2 }}
              >
                <p className="text-[10px] opacity-60 uppercase tracking-wider">{day.day}</p>
                <day.icon className="h-4 w-4 mx-auto drop-shadow" />
                <p className="text-xs font-bold">{day.temp}</p>
                <p className="text-[10px] opacity-50">{day.low}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>

      {/* Stock Tickers */}
      <motion.div variants={item}>
        <h3 className="text-[11px] font-semibold uppercase tracking-widest text-muted-foreground flex items-center gap-2 mb-3">
          <BarChart3 className="h-3.5 w-3.5" />
          Markets
        </h3>
        <div className="grid grid-cols-2 gap-2">
          {stockTickers.map((stock) => (
            <motion.div
              key={stock.symbol}
              className="p-3 rounded-xl bg-card border border-border/40 cursor-pointer group"
              whileHover={{ y: -2, borderColor: "hsl(var(--primary) / 0.3)" }}
            >
              <div className="flex items-center justify-between mb-1">
                <span className="text-[11px] font-bold text-foreground">{stock.symbol}</span>
                <span className={`text-[10px] font-semibold flex items-center gap-0.5 px-1.5 py-0.5 rounded-md ${
                  stock.up 
                    ? "text-[hsl(142,70%,35%)] bg-[hsl(142,70%,45%)]/10" 
                    : "text-destructive bg-destructive/10"
                }`}>
                  {stock.up ? <ArrowUpRight className="h-2.5 w-2.5" /> : <ArrowDownRight className="h-2.5 w-2.5" />}
                  {stock.change}
                </span>
              </div>
              <p className="text-sm font-bold text-foreground">${stock.price}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Trending Topics */}
      <motion.div variants={item}>
        <h3 className="text-[11px] font-semibold uppercase tracking-widest text-muted-foreground flex items-center gap-2 mb-3">
          <TrendingUp className="h-3.5 w-3.5" />
          Trending
        </h3>
        <div className="flex gap-2">
          {trendingTopics.map((topic) => (
            <motion.div
              key={topic.tag}
              className="flex-1 p-2.5 rounded-xl bg-primary/5 border border-primary/10 text-center cursor-pointer hover:bg-primary/10 transition-colors"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
            >
              <p className="text-xs font-bold text-primary">{topic.tag}</p>
              <p className="text-[10px] text-muted-foreground mt-0.5">{topic.posts} posts</p>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* News */}
      <motion.div variants={item}>
        <h3 className="text-[11px] font-semibold uppercase tracking-widest text-muted-foreground flex items-center gap-2 mb-3">
          <Newspaper className="h-3.5 w-3.5" />
          Latest News
        </h3>
        <div className="space-y-2">
          {newsItems.map((newsItem, i) => (
            <motion.article
              key={i}
              className="group p-3.5 rounded-xl bg-card border border-border/40 cursor-pointer transition-colors"
              whileHover={{ x: 3, borderColor: "hsl(var(--primary) / 0.3)" }}
              transition={{ type: "spring", stiffness: 400, damping: 25 }}
            >
              <div className="flex items-center gap-2 mb-1.5">
                <span className="text-[9px] font-bold uppercase tracking-wider text-primary bg-primary/10 px-2 py-0.5 rounded-full">
                  {newsItem.category}
                </span>
                <span className="text-[10px] text-muted-foreground flex items-center gap-0.5">
                  <Clock className="h-2.5 w-2.5" />
                  {newsItem.time}
                </span>
                <span className="text-[10px] text-muted-foreground ml-auto flex items-center gap-0.5">
                  <Eye className="h-2.5 w-2.5" />
                  {newsItem.views}
                </span>
              </div>
              <h4 className="text-[13px] font-medium text-foreground group-hover:text-primary transition-colors leading-snug">
                {newsItem.title}
              </h4>
              <p className="text-[10px] text-muted-foreground mt-1.5">{newsItem.source}</p>
            </motion.article>
          ))}
        </div>
      </motion.div>
    </motion.div>
  );
};

export default NewsWeatherPanel;
