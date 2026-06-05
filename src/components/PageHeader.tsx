// E:\Dbali website\src\components\PageHeader.tsx
import Link from "next/link";

interface PageHeaderProps {
  title: string;
  subtitle?: string;
  breadcrumbs: { label: string; href?: string }[];
}

export default function PageHeader({ title, subtitle, breadcrumbs }: PageHeaderProps) {
  return (
    <div className="page-header-banner">
      <div className="container">
        <nav className="breadcrumb-nav" aria-label="Breadcrumb">
          <ul className="breadcrumbs-list">
            <li>
              <Link href="/">Home</Link>
            </li>
            {breadcrumbs.map((crumb, idx) => (
              <li key={idx}>
                <span className="breadcrumb-separator">/</span>
                {crumb.href ? (
                  <Link href={crumb.href}>{crumb.label}</Link>
                ) : (
                  <span className="breadcrumb-current">{crumb.label}</span>
                )}
              </li>
            ))}
          </ul>
        </nav>
        <h1 className="page-header-title">{title}</h1>
        {subtitle && <p className="page-header-subtitle">{subtitle}</p>}
      </div>
    </div>
  );
}
