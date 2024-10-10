import { PropsWithChildren } from 'react';
import { useTheme } from '../context';

function PageWrapper({ children }: PropsWithChildren) {
  const { theme } = useTheme();
  return (
    <div
      className={`min-h-screen ${theme === 'light' ? 'bg-gray-100' : 'bg-gray-900 text-white'}`}
    >
      {children}
    </div>
  );
}

function ContentWrapper({ children }: PropsWithChildren) {
  return <div className="container mx-auto px-4 py-8">{children}</div>;
}

function FlexContainer({ children }: PropsWithChildren) {
  return <div className="flex flex-col md:flex-row">{children}</div>;
}

interface FlexItemProps extends PropsWithChildren {
  className?: string;
}
function FlexItem({ children, className = '' }: FlexItemProps) {
  return <div className={`w-full md:w-1/2 ${className}`}>{children}</div>;
}
export { ContentWrapper, FlexContainer, FlexItem, PageWrapper };
