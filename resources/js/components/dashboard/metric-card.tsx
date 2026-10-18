import type { LucideIcon } from 'lucide-react';
import { ArrowDownRight, ArrowUpRight } from 'lucide-react';
import { cn } from '@/lib/utils';

type MetricCardProps = {
    title: string;
    value: string;
    change: string;
    comparison: string;
    icon: LucideIcon;
    trend?: 'up' | 'down';
};

export function MetricCard({
    title,
    value,
    change,
    comparison,
    icon: Icon,
    trend = 'up',
}: MetricCardProps) {
    const TrendIcon = trend === 'up' ? ArrowUpRight : ArrowDownRight;

    return (
        <article className="group relative overflow-hidden rounded-xl border bg-card p-5 shadow-xs transition-[border-color,box-shadow,transform] duration-200 hover:-translate-y-0.5 hover:border-primary/20 hover:shadow-md">
            <div className="absolute -top-10 -right-10 size-24 rounded-full bg-primary/5 blur-2xl transition-colors group-hover:bg-primary/10" />
            <div className="relative flex items-start justify-between gap-4">
                <div className="grid gap-3">
                    <p className="text-sm font-medium text-muted-foreground">
                        {title}
                    </p>
                    <p className="text-2xl font-semibold tracking-tight tabular-nums lg:text-3xl">
                        {value}
                    </p>
                </div>
                <div className="flex size-10 shrink-0 items-center justify-center rounded-lg border bg-muted/50 text-muted-foreground shadow-xs">
                    <Icon className="size-5" aria-hidden="true" />
                </div>
            </div>
            <div className="relative mt-4 flex items-center gap-2 text-xs">
                <span
                    className={cn(
                        'inline-flex items-center gap-0.5 rounded-full px-2 py-1 font-semibold',
                        trend === 'up'
                            ? 'bg-emerald-500/10 text-emerald-700 dark:bg-success/10 dark:text-success'
                            : 'bg-rose-500/10 text-rose-700 dark:bg-danger/10 dark:text-danger',
                    )}
                >
                    <TrendIcon className="size-3" aria-hidden="true" />
                    {change}
                </span>
                <span className="text-muted-foreground">{comparison}</span>
            </div>
        </article>
    );
}
