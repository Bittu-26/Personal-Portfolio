'use client';

import Icon from '@/components/ui/AppIcon';

const GitHubStats = () => {
  const username = "Bittu-26"; // your username

  const stats = [
    {
      label: 'Total Repositories',
      value: '15+',
      icon: 'CodeBracketIcon' as const,
      color: 'text-primary'
    },
    {
      label: 'Total Stars',
      value: '<50',
      icon: 'StarIcon' as const,
      color: 'text-warning'
    },
    {
      label: 'Total Forks',
      value: '<50',
      icon: 'ArrowPathIcon' as const,
      color: 'text-accent'
    },
    {
      label: 'Contributions',
      value: '120+',
      icon: 'ChartBarIcon' as const,
      color: 'text-success'
    }
  ];

  // GitHub Contribution Chart (Actual)
  const contributionGraphUrl = `https://github-readme-activity-graph.vercel.app/graph?username=${username}&theme=github-compact&hide_border=true&area=true`;

  return (
    <div className="bg-card border border-border rounded-lg p-6 mb-8">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl font-bold text-foreground">GitHub Activity</h2>
        <a
          href={`https://github.com/${username}`}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 text-sm text-primary hover:text-primary/80 transition-colors"
        >
          <span>View Profile</span>
          <Icon name="ArrowTopRightOnSquareIcon" size={16} variant="outline" />
        </a>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        {stats.map((stat, index) => (
          <div
            key={index}
            className="bg-muted/50 p-4 rounded-lg hover:bg-muted transition-colors"
          >
            <div className="flex items-center gap-3 mb-2">
              <Icon name={stat.icon} size={24} variant="solid" className={stat.color} />
              <span className="text-2xl font-bold text-foreground">{stat.value}</span>
            </div>
            <p className="text-sm text-muted-foreground">{stat.label}</p>
          </div>
        ))}
      </div>
{/* Contribution Activity */}
<div className="mt-6">
  <h3 className="text-sm font-semibold text-foreground mb-3">
    Contribution Activity
  </h3>

  <div className="bg-muted/30 rounded-lg p-4">

    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">

      

      {/* Streak Stats */}
      <div className="bg-muted/20 border border-gray-700/40 rounded-lg p-3">
        <img
          src={`https://streak-stats.demolab.com?user=${username}&theme=tokyonight&hide_border=true`}
          alt="GitHub Streak Stats"
          className="w-full h-auto rounded-md"
          onError={(e) => {
            const target = e.target as HTMLImageElement;
            target.src =
              "https://placehold.co/600x250/1f1f1f/aaa?text=Streak+Unavailable";
          }}
        />
      </div>

      {/* GitHub General Stats */}
      <div className="bg-muted/20 border border-gray-700/40 rounded-lg p-3">
        <img
          src={`https://github-readme-stats.vercel.app/api?username=${username}&theme=tokyonight&show_icons=true&hide_border=true`}
          alt="GitHub Stats Card"
          className="w-full h-auto rounded-md"
          onError={(e) => {
            const target = e.target as HTMLImageElement;
            target.src =
              "https://placehold.co/600x250/1f1f1f/aaa?text=Stats+Unavailable";
          }}
        />
      </div>
    </div>
  </div>
</div>
{/* Contribution Graph */}
      <div className="bg-muted/20 border border-gray-700/40 rounded-lg p-3">
        <img
          src={contributionGraphUrl}
          alt="GitHub Contribution Graph"
          className="w-full h-auto rounded-md"
          onError={(e) => {
            const target = e.target as HTMLImageElement;
            target.src =
              "https://placehold.co/600x250/1f1f1f/aaa?text=Graph+Unavailable";
          }}
        />
      </div>

    </div>
  );
};

export default GitHubStats;
