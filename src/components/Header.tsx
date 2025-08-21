import { Badge } from "@/components/ui/badge";

interface StatusBadgeProps {
  type: 'fast' | 'slow' | 'stopped';
  label: string;
}

const StatusBadge = ({ type, label }: StatusBadgeProps) => {
  const statusStyles = {
    fast: "bg-status-success/15 text-status-success border border-status-success/20",
    slow: "bg-status-warning/15 text-status-warning border border-status-warning/20",
    stopped: "bg-status-error/15 text-status-error border border-status-error/20"
  };

  const dotStyles = {
    fast: "bg-status-success shadow-[0_0_8px_hsl(var(--status-success))]",
    slow: "bg-status-warning shadow-[0_0_8px_hsl(var(--status-warning))]",
    stopped: "bg-status-error shadow-[0_0_8px_hsl(var(--status-error))]"
  };

  const PropellerIcon = ({ spinning }: { spinning: boolean }) => (
    <div className="w-4 h-4 flex items-center justify-center">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 15 15" width="16" height="16">
        <g className={spinning ? (type === 'fast' ? 'animate-spin' : 'animate-spin duration-[3000ms]') : ''}>
          <path 
            fill="currentColor" 
            d="M7.8632 0C11.2331 0 11.3155 2.6775 9.54818 3.5625C8.80679 3.93 8.47728 4.7175 8.335 5.415C8.69446 5.565 9.00899 5.7975 9.24863 6.0975C12.0195 4.5975 15 5.19 15 7.875C15 11.25 12.3265 11.325 11.4428 9.5475C11.0684 8.805 10.2746 8.475 9.57813 8.3325C9.42836 8.6925 9.19621 9 8.89665 9.255C10.3869 12.0225 9.79531 15 7.11433 15C3.74438 15 3.67698 12.315 5.44433 11.43C6.17823 11.0625 6.50774 10.2825 6.65751 9.5925C6.29056 9.4425 5.96855 9.2025 5.72891 8.9025C2.96555 10.3875 0 9.8025 0 7.125C0 3.75 2.666 3.6675 3.54967 5.445C3.92411 6.1875 4.71043 6.51 5.40689 6.6525C5.54918 6.2925 5.78882 5.9775 6.09586 5.7375C4.60559 2.97 5.1972 0 7.8632 0Z"
          />
        </g>
      </svg>
    </div>
  );

  return (
    <Badge variant="outline" className={`${statusStyles[type]} px-3 py-1.5 rounded-full flex items-center gap-2`}>
      <div className={`w-2 h-2 rounded-full ${dotStyles[type]}`} />
      {(type === 'fast' || type === 'slow') && <PropellerIcon spinning={true} />}
      <span className="text-sm font-medium">{label}</span>
    </Badge>
  );
};

export const Header = () => {
  const sessionId = Math.floor(Math.random() * 900000) + 100000;

  return (
    <div className="bg-gradient-card p-6 rounded-xl mb-6 border-l-4 border-primary shadow-subtle">
      <div className="mb-2">
        <h1 className="text-3xl font-bold text-foreground">
          SproVox <span className="text-primary font-extrabold">AI</span>
        </h1>
      </div>
      
      <p className="text-muted-foreground text-base mb-4">
        Voice to text. Text to meaning. AI-tool for your content.
      </p>
      
      <div className="flex flex-wrap items-center gap-4">
        <div className="text-sm text-muted-foreground">
          Session: <span className="font-mono">{sessionId}</span>
        </div>
        
        <div className="flex flex-wrap gap-3">
          <StatusBadge type="fast" label="AI running (fast)" />
          <StatusBadge type="slow" label="AI running (slow)" />
          <StatusBadge type="stopped" label="AI not running" />
        </div>
      </div>
    </div>
  );
};