import { Heart } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-muted/50 py-12 border-t border-border">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center justify-center gap-4 text-center">
          <div className="flex items-center gap-2 text-muted-foreground">
            <span>Made with</span>
            <Heart className="w-4 h-4 fill-secondary text-secondary animate-pulse" />
            <span>for positive change</span>
          </div>
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Social Awareness Project. All rights reserved.
          </p>
          <p className="text-xs text-muted-foreground max-w-2xl">
            This is a placeholder website for educational purposes. Replace this content with 
            information about your specific social issue.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
