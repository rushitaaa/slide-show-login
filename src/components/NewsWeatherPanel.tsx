import { Cloud, Sun, CloudRain, Newspaper, TrendingUp, Clock } from "lucide-react";

const weatherData = {
  temp: "22°C",
  condition: "Partly Cloudy",
  humidity: "65%",
  wind: "12 km/h",
  forecast: [
    { day: "Tue", temp: "24°", icon: Sun },
    { day: "Wed", temp: "19°", icon: CloudRain },
    { day: "Thu", temp: "21°", icon: Cloud },
    { day: "Fri", temp: "26°", icon: Sun },
  ],
};

const newsItems = [
  {
    category: "Technology",
    title: "AI Revolution Transforms Healthcare Diagnostics",
    time: "2h ago",
  },
  {
    category: "Finance",
    title: "Global Markets Rally on Economic Optimism",
    time: "4h ago",
  },
  {
    category: "Science",
    title: "New Renewable Energy Breakthrough Achieved",
    time: "5h ago",
  },
  {
    category: "World",
    title: "International Climate Summit Reaches Historic Agreement",
    time: "7h ago",
  },
];

const NewsWeatherPanel = () => {
  return (
    <div className="h-full overflow-y-auto p-8 space-y-8">
      <h2 className="text-2xl font-bold font-display text-foreground flex items-center gap-2">
        <Newspaper className="h-6 w-6 text-primary" />
        Dashboard
      </h2>

      {/* Weather Card */}
      <div className="rounded-2xl bg-gradient-to-br from-[hsl(200,70%,50%)] to-[hsl(220,60%,35%)] p-6 text-[hsl(0,0%,100%)] shadow-lg">
        <div className="flex items-center justify-between mb-4">
          <div>
            <p className="text-sm opacity-80">Today's Weather</p>
            <p className="text-4xl font-bold font-display">{weatherData.temp}</p>
            <p className="text-sm opacity-80 mt-1">{weatherData.condition}</p>
          </div>
          <Cloud className="h-16 w-16 opacity-80" />
        </div>
        <div className="flex gap-2 text-xs opacity-80">
          <span>💧 {weatherData.humidity}</span>
          <span>💨 {weatherData.wind}</span>
        </div>
        <div className="mt-4 pt-4 border-t border-[hsl(0,0%,100%,0.2)] grid grid-cols-4 gap-2">
          {weatherData.forecast.map((day) => (
            <div key={day.day} className="text-center space-y-1">
              <p className="text-xs opacity-70">{day.day}</p>
              <day.icon className="h-5 w-5 mx-auto" />
              <p className="text-sm font-semibold">{day.temp}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Trending */}
      <div>
        <h3 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground flex items-center gap-2 mb-4">
          <TrendingUp className="h-4 w-4" />
          Latest News
        </h3>
        <div className="space-y-3">
          {newsItems.map((item, i) => (
            <article
              key={i}
              className="group p-4 rounded-xl bg-card border border-border/50 hover:border-primary/30 hover:shadow-md transition-all cursor-pointer"
              style={{ animationDelay: `${i * 100}ms` }}
            >
              <div className="flex items-center gap-2 mb-1">
                <span className="text-[10px] font-bold uppercase tracking-wider text-primary bg-primary/10 px-2 py-0.5 rounded-full">
                  {item.category}
                </span>
                <span className="text-[10px] text-muted-foreground flex items-center gap-1">
                  <Clock className="h-3 w-3" />
                  {item.time}
                </span>
              </div>
              <h4 className="text-sm font-medium text-foreground group-hover:text-primary transition-colors leading-snug">
                {item.title}
              </h4>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
};

export default NewsWeatherPanel;
