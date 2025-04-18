import { ReactNode } from 'react';

interface SmallCardProps {
  children: ReactNode;
  title?: string;
  className?: string;
}

const SmallCard = ({ children, title, className = '' }: SmallCardProps) => {
  return (
    <div className={`bg-[#D3D3D3] rounded-lg p-4 shadow-sm ${className}`}>
      {title && <h3 className="text-base font-medium mb-2 text-gray-800">{title}</h3>}
      <div>
        {children}
      </div>
    </div>
  );
};

export default SmallCard;