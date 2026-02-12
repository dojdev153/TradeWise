import { X, Check, Trash2 } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface BulkActionsBarProps {
    selectedCount: number;
    onClearSelection: () => void;
    onMarkHealthy: () => void;
    onMarkSick: () => void;
    onDeleteSelected: () => void;
}

export default function BulkActionsBar({
    selectedCount,
    onClearSelection,
    onMarkHealthy,
    onMarkSick,
    onDeleteSelected
}: BulkActionsBarProps) {
    if (selectedCount === 0) return null;

    return (
        <div className="bg-[#590156] text-white rounded-xl p-4 mb-4 flex items-center justify-between shadow-lg animate-in slide-in-from-top-2 duration-300">
            <div className="flex items-center gap-4">
                <span className="font-semibold">{selectedCount} animal{selectedCount > 1 ? 's' : ''} selected</span>
                <div className="h-4 w-px bg-white/30" />
                <div className="flex items-center gap-2">
                    <Button
                        size="sm"
                        variant="secondary"
                        className="bg-white/20 hover:bg-white/30 text-white border-none h-8"
                        onClick={onMarkHealthy}
                    >
                        <Check className="h-4 w-4 mr-1" />
                        Mark as Healthy
                    </Button>
                    <Button
                        size="sm"
                        variant="secondary"
                        className="bg-white/20 hover:bg-white/30 text-white border-none h-8"
                        onClick={onMarkSick}
                    >
                        Mark as Sick
                    </Button>
                    <Button
                        size="sm"
                        variant="secondary"
                        className="bg-red-600 hover:bg-red-700 text-white border-none h-8"
                        onClick={onDeleteSelected}
                    >
                        <Trash2 className="h-4 w-4 mr-1" />
                        Delete Selected
                    </Button>
                </div>
            </div>
            <Button
                size="sm"
                variant="ghost"
                className="text-white hover:bg-white/20 h-8"
                onClick={onClearSelection}
            >
                <X className="h-4 w-4 mr-1" />
                Clear Selection
            </Button>
        </div>
    );
}
