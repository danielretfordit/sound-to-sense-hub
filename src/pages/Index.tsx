import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Header } from "@/components/Header";
import { Newspaper, Mic, Bot } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-primary text-foreground">
      <div className="container mx-auto px-6 py-8">
        <Header />
        
        <div className="flex flex-col items-center justify-center min-h-[60vh] text-center space-y-8">
          <div className="space-y-4">
            <h2 className="text-4xl font-bold text-foreground">
              Choose Your <span className="text-primary">AI Tool</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl">
              Access powerful AI-driven tools for voice transcription and news analysis
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-4xl">
            <div className="bg-gradient-card p-8 rounded-xl border border-border/50 hover:border-primary/30 transition-all duration-300 hover:shadow-glow group">
              <div className="text-center space-y-4">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto group-hover:bg-primary/20 transition-colors">
                  <Mic className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-2xl font-semibold text-foreground">Voice Recognition</h3>
                <p className="text-muted-foreground">
                  Convert audio to text with AI-powered transcription and analysis
                </p>
                <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-medium shadow-glow">
                  <Mic className="w-4 h-4 mr-2" />
                  Start Transcription
                </Button>
              </div>
            </div>

            <Link to="/news" className="block">
              <div className="bg-gradient-card p-8 rounded-xl border border-border/50 hover:border-primary/30 transition-all duration-300 hover:shadow-glow group h-full">
                <div className="text-center space-y-4">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto group-hover:bg-primary/20 transition-colors">
                    <Newspaper className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-2xl font-semibold text-foreground">News Analysis</h3>
                  <p className="text-muted-foreground">
                    Browse and analyze news articles with AI-powered summaries
                  </p>
                  <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-medium shadow-glow">
                    <Bot className="w-4 h-4 mr-2" />
                    Explore News
                  </Button>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
