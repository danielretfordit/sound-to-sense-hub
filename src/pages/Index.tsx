import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Header } from "@/components/Header";
import { Newspaper, Mic, Bot, FileText, ImageIcon, Volume2, Languages } from "lucide-react";

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

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-6xl">
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

            {/* BETA Tools */}
            <div className="bg-gradient-card/50 p-8 rounded-xl border border-muted/30 hover:border-muted/50 transition-all duration-300 group relative">
              <div className="absolute top-3 right-3">
                <span className="bg-muted/20 text-muted-foreground px-2 py-1 rounded-full text-xs font-medium">BETA</span>
              </div>
              <div className="text-center space-y-4 opacity-70 group-hover:opacity-90 transition-opacity">
                <div className="w-16 h-16 bg-muted/10 rounded-full flex items-center justify-center mx-auto group-hover:bg-muted/20 transition-colors">
                  <Bot className="w-8 h-8 text-muted-foreground" />
                </div>
                <h3 className="text-2xl font-semibold text-muted-foreground">AI Chat</h3>
                <p className="text-muted-foreground/80">
                  Interactive AI assistant for questions and content generation
                </p>
                <Button variant="secondary" className="w-full font-medium">
                  <Bot className="w-4 h-4 mr-2" />
                  Start Chat
                </Button>
              </div>
            </div>

            <div className="bg-gradient-card/50 p-8 rounded-xl border border-muted/30 hover:border-muted/50 transition-all duration-300 group relative">
              <div className="absolute top-3 right-3">
                <span className="bg-muted/20 text-muted-foreground px-2 py-1 rounded-full text-xs font-medium">BETA</span>
              </div>
              <div className="text-center space-y-4 opacity-70 group-hover:opacity-90 transition-opacity">
                <div className="w-16 h-16 bg-muted/10 rounded-full flex items-center justify-center mx-auto group-hover:bg-muted/20 transition-colors">
                  <FileText className="w-8 h-8 text-muted-foreground" />
                </div>
                <h3 className="text-2xl font-semibold text-muted-foreground">Document Analysis</h3>
                <p className="text-muted-foreground/80">
                  Extract insights and summaries from documents and PDFs
                </p>
                <Button variant="secondary" className="w-full font-medium">
                  <FileText className="w-4 h-4 mr-2" />
                  Analyze Document
                </Button>
              </div>
            </div>

            <div className="bg-gradient-card/50 p-8 rounded-xl border border-muted/30 hover:border-muted/50 transition-all duration-300 group relative">
              <div className="absolute top-3 right-3">
                <span className="bg-muted/20 text-muted-foreground px-2 py-1 rounded-full text-xs font-medium">BETA</span>
              </div>
              <div className="text-center space-y-4 opacity-70 group-hover:opacity-90 transition-opacity">
                <div className="w-16 h-16 bg-muted/10 rounded-full flex items-center justify-center mx-auto group-hover:bg-muted/20 transition-colors">
                  <ImageIcon className="w-8 h-8 text-muted-foreground" />
                </div>
                <h3 className="text-2xl font-semibold text-muted-foreground">Image Recognition</h3>
                <p className="text-muted-foreground/80">
                  AI-powered image analysis and object detection
                </p>
                <Button variant="secondary" className="w-full font-medium">
                  <ImageIcon className="w-4 h-4 mr-2" />
                  Analyze Image
                </Button>
              </div>
            </div>

            <div className="bg-gradient-card/50 p-8 rounded-xl border border-muted/30 hover:border-muted/50 transition-all duration-300 group relative">
              <div className="absolute top-3 right-3">
                <span className="bg-muted/20 text-muted-foreground px-2 py-1 rounded-full text-xs font-medium">BETA</span>
              </div>
              <div className="text-center space-y-4 opacity-70 group-hover:opacity-90 transition-opacity">
                <div className="w-16 h-16 bg-muted/10 rounded-full flex items-center justify-center mx-auto group-hover:bg-muted/20 transition-colors">
                  <Volume2 className="w-8 h-8 text-muted-foreground" />
                </div>
                <h3 className="text-2xl font-semibold text-muted-foreground">Audio Enhancement</h3>
                <p className="text-muted-foreground/80">
                  Clean and enhance audio quality with AI processing
                </p>
                <Button variant="secondary" className="w-full font-medium">
                  <Volume2 className="w-4 h-4 mr-2" />
                  Enhance Audio
                </Button>
              </div>
            </div>

            <div className="bg-gradient-card/50 p-8 rounded-xl border border-muted/30 hover:border-muted/50 transition-all duration-300 group relative">
              <div className="absolute top-3 right-3">
                <span className="bg-muted/20 text-muted-foreground px-2 py-1 rounded-full text-xs font-medium">BETA</span>
              </div>
              <div className="text-center space-y-4 opacity-70 group-hover:opacity-90 transition-opacity">
                <div className="w-16 h-16 bg-muted/10 rounded-full flex items-center justify-center mx-auto group-hover:bg-muted/20 transition-colors">
                  <Languages className="w-8 h-8 text-muted-foreground" />
                </div>
                <h3 className="text-2xl font-semibold text-muted-foreground">Text Translation</h3>
                <p className="text-muted-foreground/80">
                  Multi-language translation with context awareness
                </p>
                <Button variant="secondary" className="w-full font-medium">
                  <Languages className="w-4 h-4 mr-2" />
                  Translate Text
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
