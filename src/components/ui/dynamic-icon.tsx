import * as LucideIcons from 'lucide-react';
import { LucideProps } from 'lucide-react';

interface DynamicIconProps extends LucideProps {
    name: string;
}

export const DynamicIcon = ({ name, ...props }: DynamicIconProps) => {
    // Dynamic access to the icon component
    // Note: Lucide icons are exported as PascalCase (e.g., Home, User)
    const IconComponent = (LucideIcons as any)[name];

    if (!IconComponent) {
        return null;
    }

    return <IconComponent {...props} />;
};
