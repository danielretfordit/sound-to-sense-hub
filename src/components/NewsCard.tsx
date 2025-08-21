import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Clock, ExternalLink, Share2 } from "lucide-react";

interface NewsCardProps {
  title: string;
  excerpt: string;
  source: string;
  category: string;
  publishedAt: string;
  url: string;
  isAI?: boolean;
}

export const NewsCard = ({ 
  title, 
  excerpt, 
  source, 
  category, 
  publishedAt, 
  url, 
  isAI = false 
}: NewsCardProps) => {
  const timeAgo = (dateString: string) => {
    const now = new Date();
    const published = new Date(dateString);
    const diffInHours = Math.floor((now.getTime() - published.getTime()) / (1000 * 60 * 60));
    
    if (diffInHours < 1) return "Just now";
    if (diffInHours < 24) return `${diffInHours}h ago`;
    return `${Math.floor(diffInHours / 24)}d ago`;
  };

  const getCategoryColor = (cat: string) => {
    const colors: { [key: string]: string } = {
      technology: "bg-blue-500/15 text-blue-400 border-blue-500/20",
      business: "bg-green-500/15 text-green-400 border-green-500/20", 
      science: "bg-purple-500/15 text-purple-400 border-purple-500/20",
      general: "bg-gray-500/15 text-gray-400 border-gray-500/20",
      ai: "bg-primary/15 text-primary border-primary/20"
    };
    return colors[cat.toLowerCase()] || colors.general;
  };

  return (
    <Card className="group bg-gradient-card border border-border/50 hover:border-primary/30 transition-all duration-300 hover:shadow-glow cursor-pointer">
      <CardHeader className="pb-3">
        <div className="flex items-start justify-between gap-3 mb-2">
          <div className="flex items-center gap-2 flex-wrap">
            <Badge variant="outline" className={getCategoryColor(category)}>
              {category}
            </Badge>
            {isAI && (
              <Badge variant="outline" className="bg-primary/15 text-primary border-primary/20">
                AI Generated
              </Badge>
            )}
          </div>
          <div className="flex items-center gap-1 text-xs text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity">
            <Button variant="ghost" size="sm" className="h-8 w-8 p-0 hover:bg-primary/10">
              <Share2 className="h-3 w-3" />
            </Button>
            <Button variant="ghost" size="sm" className="h-8 w-8 p-0 hover:bg-primary/10">
              <ExternalLink className="h-3 w-3" />
            </Button>
          </div>
        </div>
        
        <h3 className="text-lg font-semibold text-foreground leading-tight group-hover:text-primary transition-colors line-clamp-2">
          {title}
        </h3>
      </CardHeader>
      
      <CardContent className="pt-0">
        <p className="text-muted-foreground text-sm leading-relaxed mb-4 line-clamp-3">
          {excerpt}
        </p>
        
        <div className="flex items-center justify-between text-xs text-muted-foreground">
          <span className="font-medium">{source}</span>
          <div className="flex items-center gap-1">
            <Clock className="h-3 w-3" />
            <span>{timeAgo(publishedAt)}</span>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};