import { FC, PropsWithChildren } from 'react';

interface LayoutProps extends PropsWithChildren<object> {
  className?: string;
}

export const Layout: FC<LayoutProps> = ({ children, className = '' }) => {
  return (
    <div className={`xl:p-4 xl:pr-8 sm:p-2  ${className}`}>{children}</div>
  );
};
