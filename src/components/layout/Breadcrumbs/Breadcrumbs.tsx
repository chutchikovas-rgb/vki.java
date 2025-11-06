import styles from './Breadcrumbs.module.scss';
import React from 'react';

interface Props {
  children?: React.ReactNode;
}

export const Breadcrumbs = ({ children }: Props): React.ReactElement => {
  const childrenArray = React.Children.toArray(children);
  
  return (
    <nav className={ styles.nav }>
        {childrenArray.map((child, index) => (
          <p key={index} className={styles.breadcrumbsItem}>
            {child}
            {index < childrenArray.length - 1 && (
              <span className={styles.separator} aria-hidden="true"> /</span>
            )}
          </p>
        ))}
    </nav>
  );
};