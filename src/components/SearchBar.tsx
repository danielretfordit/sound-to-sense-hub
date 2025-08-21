import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Search, Filter, Rss } from "lucide-react";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

interface SearchBarProps {
  onSearch: (query: string) => void;
  onCategoryChange: (category: string) => void;
  onAddSource: () => void;
}

export const SearchBar = ({ onSearch, onCategoryChange, onAddSource }: SearchBarProps) => {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    onSearch(searchQuery);
  };

  return (
    <div className="space-y-4 mb-6">
      <form onSubmit={handleSearch} className="flex gap-3">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input
            type="text"
            placeholder="Search news articles..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="pl-10 bg-input border-border/50 focus:border-primary/50 transition-colors"
          />
        </div>
        <Button type="submit" className="px-6 bg-primary hover:bg-primary/90 text-primary-foreground font-medium shadow-glow">
          Search
        </Button>
      </form>

      <div className="flex flex-wrap items-center gap-3">
        <div className="flex items-center gap-2">
          <Filter className="h-4 w-4 text-muted-foreground" />
          <span className="text-sm font-medium text-foreground">Filter by:</span>
        </div>
        
        <Select onValueChange={onCategoryChange}>
          <SelectTrigger className="w-[140px] bg-input border-border/50">
            <SelectValue placeholder="Category" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All News</SelectItem>
            <SelectItem value="technology">Technology</SelectItem>
            <SelectItem value="business">Business</SelectItem>
            <SelectItem value="science">Science</SelectItem>
            <SelectItem value="ai">AI & ML</SelectItem>
          </SelectContent>
        </Select>

        <Button 
          variant="outline" 
          size="sm"
          onClick={onAddSource}
          className="border-primary/30 hover:bg-primary/10 hover:border-primary/50 transition-colors"
        >
          <Rss className="h-4 w-4 mr-2" />
          Add Source
        </Button>
      </div>
    </div>
  );
};