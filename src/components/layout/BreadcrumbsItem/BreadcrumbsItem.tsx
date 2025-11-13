import styles from './BreadcrumbsItem.module.scss';

interface BreadcrumbItemProps {
  children: React.ReactNode;
  href?: string;
  isCurrent?: boolean;
}

export const BreadcrumbItem = ({ children, href, isCurrent = false }: BreadcrumbItemProps) => {
  if (isCurrent) {
    return (
      <span >
        {children}
      </span>
    );
  }

  return href ? (
    <a className={`${styles.BreadcrumbsItem}`} href={href}>
      {children}
    </a>
  ) : (
    <span>{children}</span>
  );
};