import { Eye, Pencil, Trash2 } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface ActionButtonsProps {
    onView: () => void;
    onEdit: () => void;
    onDelete: () => void;
}

export default function ActionButtons({ onView, onEdit, onDelete }: ActionButtonsProps) {
    return (
        <div className="flex items-center gap-2">
            <Button
                variant="ghost"
                size="icon"
                className="h-8 w-8 text-gray-500 hover:text-[#590156] hover:bg-[#F3E8F3]"
                onClick={(e) => {
                    e.stopPropagation();
                    onView();
                }}
                title="View details"
            >
                <Eye className="h-4 w-4" />
            </Button>
            <Button
                variant="ghost"
                size="icon"
                className="h-8 w-8 text-gray-500 hover:text-[#590156] hover:bg-[#F3E8F3]"
                onClick={(e) => {
                    e.stopPropagation();
                    onEdit();
                }}
                title="Edit"
            >
                <Pencil className="h-4 w-4" />
            </Button>
            <Button
                variant="ghost"
                size="icon"
                className="h-8 w-8 text-gray-500 hover:text-red-600 hover:bg-red-50"
                onClick={(e) => {
                    e.stopPropagation();
                    onDelete();
                }}
                title="Delete"
            >
                <Trash2 className="h-4 w-4" />
            </Button>
        </div>
    );
}
