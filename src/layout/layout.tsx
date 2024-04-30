import { FC, PropsWithChildren } from 'react';

interface LayoutProps extends PropsWithChildren<object> {
  className?: string;
}

export const Layout: FC<LayoutProps> = ({ children, className = "" }) => {
  return (
    <div
      className={`xl:p-4 xl:pr-8 sm:p-4  ${className}`}>
      {children}
    </div>
  );
};
