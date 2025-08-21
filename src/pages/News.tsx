import { useState, useEffect } from "react";
import { Header } from "@/components/Header";
import { SearchBar } from "@/components/SearchBar";
import { NewsCard } from "@/components/NewsCard";
import { Button } from "@/components/ui/button";
import { RefreshCw, TrendingUp, Zap } from "lucide-react";
import { toast } from "@/hooks/use-toast";

// Mock news data
const mockNews = [
  {
    id: 1,
    title: "МТС провел образовательный день по борьбе с кибербуллингом",
    excerpt: "20 августа в национальном детском центре «Зубренок» компания МТС провела тематический день «Интернет-Безопасности», собрав более 100 подростков 13-15 лет из разных регионов Беларуси.",
    source: "kv.by/news",
    category: "technology",
    publishedAt: "2024-08-21T10:30:00Z",
    url: "https://kv.by/news/",
    isAI: false
  },
  {
    id: 2,
    title: "Adobe представила новую ИИ-платформу Acrobat Studio",
    excerpt: "Adobe представила Acrobat Studio — универсальную платформу, объединяющую работу с PDF, Adobe Express и ИИ-ассистентами. Пользователи могут загружать до 100 документов разных форматов.",
    source: "telasglobal.ru",
    category: "ai",
    publishedAt: "2024-08-21T09:15:00Z", 
    url: "https://telasglobal.ru/media_center/transport_news/",
    isAI: true
  },
  {
    id: 3,
    title: "Вышла ИИ-модель DeepSeek 3.1",
    excerpt: "Китайская компания DeepSeek представила обновленную модель V3.1, сразу доступную для тестов. Главный её плюс — увеличенное контекстное окно, позволяющее обрабатывать больше информации.",
    source: "kv.by/news",
    category: "ai",
    publishedAt: "2024-08-21T08:00:00Z",
    url: "https://kv.by/news/",
    isAI: true
  },
  {
    id: 4,
    title: "Темпы роста грузооборота мировой авиации в июне сильно замедлились",
    excerpt: "Грузооборот мировой гражданской авиации в июне 2025 года вырос лишь на 0,8% год к году, после скачков в апреле (+5,8%) и мае (+2,2%).",
    source: "telasglobal.ru",
    category: "business",
    publishedAt: "2024-08-21T07:30:00Z",
    url: "https://telasglobal.ru/media_center/transport_news/",
    isAI: false
  },
  {
    id: 5,
    title: "Xiaomi выпустила беспроводной телевизор",
    excerpt: "Компания Xiaomi представила революционный беспроводной телевизор, который работает без проводов и может передавать сигнал на расстояние до 10 метров.",
    source: "kv.by/news",
    category: "technology",
    publishedAt: "2024-08-21T06:45:00Z",
    url: "https://kv.by/news/",
    isAI: false
  }
];

export default function News() {
  const [news, setNews] = useState(mockNews);
  const [filteredNews, setFilteredNews] = useState(mockNews);
  const [isLoading, setIsLoading] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");

  useEffect(() => {
    filterNews();
  }, [searchQuery, selectedCategory, news]);

  const filterNews = () => {
    let filtered = news;

    if (searchQuery) {
      filtered = filtered.filter(article =>
        article.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        article.excerpt.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    if (selectedCategory !== "all") {
      filtered = filtered.filter(article => article.category === selectedCategory);
    }

    setFilteredNews(filtered);
  };

  const handleSearch = (query: string) => {
    setSearchQuery(query);
    toast({
      title: "Search Updated",
      description: query ? `Searching for: ${query}` : "Showing all articles",
    });
  };

  const handleCategoryChange = (category: string) => {
    setSelectedCategory(category);
    toast({
      title: "Filter Applied",
      description: `Showing ${category === "all" ? "all" : category} articles`,
    });
  };

  const handleAddSource = () => {
    toast({
      title: "Add News Source",
      description: "This feature will be available soon!",
    });
  };

  const handleRefresh = async () => {
    setIsLoading(true);
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));
    setIsLoading(false);
    toast({
      title: "News Updated",
      description: "Latest articles have been fetched",
    });
  };

  const handleSummaryByAI = () => {
    toast({
      title: "AI Summary",
      description: "Generating AI summary of selected articles...",
    });
  };

  const getStatsText = () => {
    const total = filteredNews.length;
    const aiGenerated = filteredNews.filter(article => article.isAI).length;
    return `${total} articles (${aiGenerated} AI-generated)`;
  };

  return (
    <div className="min-h-screen bg-gradient-primary text-foreground">
      <div className="container mx-auto px-6 py-8">
        <Header />
        
        <div className="mb-6">
          <SearchBar 
            onSearch={handleSearch}
            onCategoryChange={handleCategoryChange}
            onAddSource={handleAddSource}
          />
          
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <TrendingUp className="h-4 w-4" />
                <span>{getStatsText()}</span>
              </div>
            </div>
            
            <div className="flex gap-2">
              <Button
                variant="outline"
                size="sm"
                onClick={handleSummaryByAI}
                className="border-primary/30 hover:bg-primary/10 transition-colors"
              >
                <Zap className="h-4 w-4 mr-2" />
                Summary by AI
              </Button>
              
              <Button
                variant="outline"
                size="sm"
                onClick={handleRefresh}
                disabled={isLoading}
                className="border-primary/30 hover:bg-primary/10 transition-colors"
              >
                <RefreshCw className={`h-4 w-4 mr-2 ${isLoading ? 'animate-spin' : ''}`} />
                {isLoading ? 'Updating...' : 'Get News'}
              </Button>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredNews.map((article) => (
            <NewsCard
              key={article.id}
              title={article.title}
              excerpt={article.excerpt}
              source={article.source}
              category={article.category}
              publishedAt={article.publishedAt}
              url={article.url}
              isAI={article.isAI}
            />
          ))}
        </div>

        {filteredNews.length === 0 && (
          <div className="text-center py-12">
            <div className="text-muted-foreground text-lg mb-2">No articles found</div>
            <div className="text-sm text-muted-foreground">
              Try adjusting your search terms or filters
            </div>
          </div>
        )}
      </div>
    </div>
  );
}