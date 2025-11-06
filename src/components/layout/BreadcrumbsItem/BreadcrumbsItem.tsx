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
    <a href={href}>
      {children}
    </a>
  ) : (
    <span>{children}</span>
  );
};