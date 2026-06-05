// E:\Dbali website\src\components\StatsSection.tsx

export default function StatsSection() {
  const stats = [
    {
      num: "19+",
      label: "Years of Trust",
      desc: "Delivering architectural excellence since 2007 in Kashipur.",
      colorClass: "stat-card-orange",
    },
    {
      num: "1,200+",
      label: "Happy Families",
      desc: "Providing high-quality residential housing with premium lifestyle standards.",
      colorClass: "stat-card-blue",
    },
    {
      num: "100%",
      label: "On-Time Delivery",
      desc: "Earning recognition for timely completion and handover of assets.",
      colorClass: "stat-card-teal",
    },
    {
      num: "10/10",
      label: "Quality Score",
      desc: "Rigorous vendor surveillance and detailed project management standards.",
      colorClass: "stat-card-green",
    },
  ];

  return (
    <section className="section" id="stats">
      <div className="container">
        <div className="stats-grid">
          {stats.map((stat, idx) => (
            <div
              key={idx}
              className={`stat-card ${stat.colorClass} animate-fade-in-up`}
              style={{ animationDelay: `${idx * 150}ms` }}
            >
              <div className="stat-num">{stat.num}</div>
              <div className="stat-label">{stat.label}</div>
              <div className="stat-desc">{stat.desc}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
