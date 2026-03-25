import { motion } from "framer-motion";
import {
  Cloud, Sun, CloudRain, Newspaper, TrendingUp, Clock,
  ArrowUpRight, ArrowDownRight, BarChart3, Droplets, Wind,
  MapPin, Thermometer
} from "lucide-react";

const weatherData = {
  temp: "22°C",
  feelsLike: "20°C",
  condition: "Partly Cloudy",
  humidity: "65%",
  wind: "12 km/h",
  uv: "Moderate",
  location: "San Francisco",
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
  { symbol: "MSFT", price: "378.90", change: "+0.67%", up: true },
];

const newsItems = [
  {
    category: "Technology",
    title: "AI Revolution Transforms Healthcare Diagnostics Worldwide",
    time: "2h ago",
    source: "TechCrunch",
  },
  {
    category: "Finance",
    title: "Global Markets Rally on Economic Optimism and Rate Cuts",
    time: "4h ago",
    source: "Bloomberg",
  },
  {
    category: "Science",
    title: "New Renewable Energy Breakthrough Achieved in Solar Tech",
    time: "5h ago",
    source: "Nature",
  },
  {
    category: "World",
    title: "International Climate Summit Reaches Historic Agreement",
    time: "7h ago",
    source: "Reuters",
  },
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.2 },
  },
};

const item = {
  hidden: { opacity: 0, x: -20 },
  show: { opacity: 1, x: 0, transition: { duration: 0.4, ease: "easeOut" } },
};

const NewsWeatherPanel = () => {
  return (
    <motion.div
      className="h-full overflow-y-auto p-8 space-y-6"
      variants={container}
      initial="hidden"
      animate="show"
    >
      <motion.h2
        className="text-2xl font-bold font-display text-foreground flex items-center gap-2"
        variants={item}
      >
        <Newspaper className="h-6 w-6 text-primary" />
        Dashboard
      </motion.h2>

      {/* Weather Card */}
      <motion.div
        className="rounded-2xl bg-gradient-to-br from-[hsl(200,70%,50%)] to-[hsl(220,60%,35%)] p-5 text-[hsl(0,0%,100%)] shadow-lg"
        variants={item}
        whileHover={{ scale: 1.01 }}
        transition={{ type: "spring", stiffness: 300 }}
      >
        <div className="flex items-center gap-1 text-xs opacity-70 mb-3">
          <MapPin className="h-3 w-3" />
          {weatherData.location}
        </div>
        <div className="flex items-center justify-between mb-4">
          <div>
            <p className="text-4xl font-bold font-display">{weatherData.temp}</p>
            <p className="text-sm opacity-80 mt-1">{weatherData.condition}</p>
          </div>
          <motion.div
            animate={{ rotate: [0, 5, -5, 0] }}
            transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
          >
            <Cloud className="h-14 w-14 opacity-80" />
          </motion.div>
        </div>
        <div className="grid grid-cols-3 gap-2 text-xs opacity-80 mb-4">
          <span className="flex items-center gap-1"><Droplets className="h-3 w-3" /> {weatherData.humidity}</span>
          <span className="flex items-center gap-1"><Wind className="h-3 w-3" /> {weatherData.wind}</span>
          <span className="flex items-center gap-1"><Thermometer className="h-3 w-3" /> Feels {weatherData.feelsLike}</span>
        </div>
        <div className="pt-3 border-t border-[hsl(0,0%,100%,0.2)] grid grid-cols-4 gap-2">
          {weatherData.forecast.map((day) => (
            <div key={day.day} className="text-center space-y-1">
              <p className="text-xs opacity-70">{day.day}</p>
              <day.icon className="h-4 w-4 mx-auto" />
              <p className="text-sm font-semibold">{day.temp}</p>
              <p className="text-[10px] opacity-60">{day.low}</p>
            </div>
          ))}
        </div>
      </motion.div>

      {/* Stock Tickers */}
      <motion.div variants={item}>
        <h3 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground flex items-center gap-2 mb-3">
          <BarChart3 className="h-4 w-4" />
          Markets
        </h3>
        <div className="grid grid-cols-2 gap-2">
          {stockTickers.map((stock) => (
            <motion.div
              key={stock.symbol}
              className="p-3 rounded-xl bg-card border border-border/50 hover:border-primary/30 transition-colors cursor-pointer"
              whileHover={{ y: -2, boxShadow: "0 4px 12px hsl(var(--primary) / 0.1)" }}
            >
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold text-foreground">{stock.symbol}</span>
                <span className={`text-[10px] font-semibold flex items-center gap-0.5 ${stock.up ? "text-[hsl(142,70%,40%)]" : "text-destructive"}`}>
                  {stock.up ? <ArrowUpRight className="h-3 w-3" /> : <ArrowDownRight className="h-3 w-3" />}
                  {stock.change}
                </span>
              </div>
              <p className="text-sm font-semibold text-foreground mt-1">${stock.price}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* News */}
      <motion.div variants={item}>
        <h3 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground flex items-center gap-2 mb-3">
          <TrendingUp className="h-4 w-4" />
          Latest News
        </h3>
        <div className="space-y-2.5">
          {newsItems.map((newsItem, i) => (
            <motion.article
              key={i}
              className="group p-4 rounded-xl bg-card border border-border/50 hover:border-primary/30 transition-all cursor-pointer"
              whileHover={{ x: 4, boxShadow: "0 4px 16px hsl(var(--primary) / 0.08)" }}
              transition={{ type: "spring", stiffness: 400, damping: 25 }}
            >
              <div className="flex items-center gap-2 mb-1.5">
                <span className="text-[10px] font-bold uppercase tracking-wider text-primary bg-primary/10 px-2 py-0.5 rounded-full">
                  {newsItem.category}
                </span>
                <span className="text-[10px] text-muted-foreground flex items-center gap-1">
                  <Clock className="h-3 w-3" />
                  {newsItem.time}
                </span>
                <span className="text-[10px] text-muted-foreground ml-auto">
                  {newsItem.source}
                </span>
              </div>
              <h4 className="text-sm font-medium text-foreground group-hover:text-primary transition-colors leading-snug">
                {newsItem.title}
              </h4>
            </motion.article>
          ))}
        </div>
      </motion.div>
    </motion.div>
  );
};

export default NewsWeatherPanel;
