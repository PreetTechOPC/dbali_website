// E:\Dbali website\src\components\ProjectCard.tsx
import Image from "next/image";
import Link from "next/link";

interface Spec {
  label: string;
  value: string;
}

interface ProjectCardProps {
  title: string;
  location: string;
  image: string;
  specs: Spec[];
  badgeText: string;
  badgeColorClass: string; // 'orange' | 'blue' | 'teal'
  description: string;
  detailsLink?: string;
}

export default function ProjectCard({
  title,
  image,
  specs,
  badgeText,
  badgeColorClass,
  description,
  detailsLink,
}: ProjectCardProps) {
  const badgeClassMap = {
    orange: "project-badge-orange",
    blue: "project-badge-blue",
    teal: "project-badge-teal",
  };

  const badgeClass = badgeClassMap[badgeColorClass as keyof typeof badgeClassMap] || "project-badge-orange";

  return (
    <div className="project-card">
      <div className="project-image-wrapper">
        <span className={`project-badge ${badgeClass}`}>
          {badgeText}
        </span>
        <Image
          src={image}
          alt={title}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
          className="project-image"
        />
      </div>
      <div className="project-content">
        <h3 className="project-title">{title}</h3>
        <p className="project-desc">{description}</p>
        
        <div className="project-specs">
          {specs.map((spec, idx) => (
            <div className="spec-item" key={idx}>
              <span className="spec-label">{spec.label}</span>
              <span className="spec-val">{spec.value}</span>
            </div>
          ))}
        </div>
        
        <div style={{ display: "flex", gap: "10px", marginTop: "20px" }}>
          {detailsLink && (
            <Link href={encodeURI(detailsLink)} className="btn btn-outline" style={{ flex: 1, textAlign: "center", fontSize: "13px", padding: "10px 0" }}>
              View Details
            </Link>
          )}
          <Link href="/contact" className="btn btn-orange" style={{ flex: 1, textAlign: "center", fontSize: "13px", padding: "10px 0" }}>
            Enquire
          </Link>
        </div>
      </div>
    </div>
  );
}
