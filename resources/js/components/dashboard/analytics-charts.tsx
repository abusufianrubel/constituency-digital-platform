import { ArrowUpRight, MoreHorizontal } from 'lucide-react';
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from '@/components/ui/card';
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { cn } from '@/lib/utils';

const series = {
    '7d': [28, 34, 31, 46, 42, 58, 63],
    '30d': [24, 29, 27, 38, 35, 48, 46, 58, 54, 66, 61, 72],
    '90d': [18, 24, 22, 31, 29, 37, 42, 40, 51, 47, 55, 61],
};

type Range = keyof typeof series;

function createChartPath(values: number[]): string {
    const maxValue = Math.max(...values);
    const minValue = Math.min(...values);
    const spread = Math.max(maxValue - minValue, 1);

    return values
        .map((value, index) => {
            const x = (index / (values.length - 1)) * 620 + 10;
            const y = 190 - ((value - minValue) / spread) * 145;

            return `${index === 0 ? 'M' : 'L'} ${x} ${y}`;
        })
        .join(' ');
}

export function PerformanceChart() {
    const [range, setRange] = useState<Range>('30d');
    const path = createChartPath(series[range]);

    return (
        <Card className="gap-0 overflow-hidden py-0 shadow-xs lg:col-span-2">
            <CardHeader className="flex flex-row flex-wrap items-start justify-between gap-4 border-b py-5">
                <div className="grid gap-1.5">
                    <CardTitle className="text-base">
                        Engagement overview
                    </CardTitle>
                    <CardDescription>
                        Completed constituent interactions over time
                    </CardDescription>
                </div>
                <div
                    role="group"
                    aria-label="Chart date range"
                    className="flex rounded-lg bg-muted p-1"
                >
                    {(['7d', '30d', '90d'] as const).map((option) => (
                        <button
                            key={option}
                            type="button"
                            aria-pressed={range === option}
                            onClick={() => setRange(option)}
                            className={cn(
                                'rounded-md px-2.5 py-1 text-xs font-medium text-muted-foreground transition-colors outline-none focus-visible:ring-2 focus-visible:ring-ring',
                                range === option &&
                                    'bg-background text-foreground shadow-xs',
                            )}
                        >
                            {option.toUpperCase()}
                        </button>
                    ))}
                </div>
            </CardHeader>
            <CardContent className="p-5 sm:p-6">
                <div className="flex flex-wrap items-end justify-between gap-3">
                    <div>
                        <p className="text-3xl font-semibold tracking-tight tabular-nums">
                            12,480
                        </p>
                        <p className="mt-1 flex items-center gap-1 text-sm text-emerald-600 dark:text-success">
                            <ArrowUpRight className="size-4" />
                            18.2% from the previous period
                        </p>
                    </div>
                    <div className="flex items-center gap-4 text-xs text-muted-foreground">
                        <span className="flex items-center gap-1.5">
                            <span className="size-2 rounded-full bg-primary" />
                            Completed
                        </span>
                        <span className="flex items-center gap-1.5">
                            <span className="size-2 rounded-full bg-primary/20" />
                            Target
                        </span>
                    </div>
                </div>

                <div
                    className="mt-6 h-56 w-full"
                    aria-label="Engagement line chart"
                >
                    <svg
                        viewBox="0 0 640 220"
                        className="h-full w-full overflow-visible"
                        role="img"
                    >
                        <title>
                            Engagement increased across the selected period
                        </title>
                        <defs>
                            <linearGradient
                                id="engagement-fill"
                                x1="0"
                                y1="0"
                                x2="0"
                                y2="1"
                            >
                                <stop
                                    offset="0%"
                                    stopColor="var(--primary)"
                                    stopOpacity="0.22"
                                />
                                <stop
                                    offset="100%"
                                    stopColor="var(--primary)"
                                    stopOpacity="0"
                                />
                            </linearGradient>
                        </defs>
                        {[45, 93, 141, 189].map((y) => (
                            <line
                                key={y}
                                x1="10"
                                x2="630"
                                y1={y}
                                y2={y}
                                stroke="currentColor"
                                className="text-border"
                                strokeDasharray="4 6"
                            />
                        ))}
                        <path
                            d={`${path} L 630 205 L 10 205 Z`}
                            fill="url(#engagement-fill)"
                        />
                        <path
                            d={path}
                            fill="none"
                            stroke="var(--primary)"
                            strokeWidth="3"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        />
                        {series[range].map((value, index, values) => {
                            const maxValue = Math.max(...values);
                            const minValue = Math.min(...values);
                            const x = (index / (values.length - 1)) * 620 + 10;
                            const y =
                                190 -
                                ((value - minValue) /
                                    Math.max(maxValue - minValue, 1)) *
                                    145;

                            return (
                                <circle
                                    key={`${x}-${value}`}
                                    cx={x}
                                    cy={y}
                                    r="3.5"
                                    fill="var(--background)"
                                    stroke="var(--primary)"
                                    strokeWidth="2.5"
                                />
                            );
                        })}
                    </svg>
                </div>
                <div className="mt-1 flex justify-between text-[11px] font-medium text-muted-foreground">
                    <span>Start</span>
                    <span>Midpoint</span>
                    <span>Today</span>
                </div>
            </CardContent>
        </Card>
    );
}

const channels = [
    { label: 'Walk-in', value: 44, color: 'bg-primary' },
    { label: 'Digital', value: 31, color: 'bg-emerald-500' },
    { label: 'Referral', value: 17, color: 'bg-amber-500' },
    { label: 'Other', value: 8, color: 'bg-violet-500' },
];

export function ChannelChart() {
    return (
        <Card className="gap-0 overflow-hidden py-0 shadow-xs">
            <CardHeader className="flex flex-row items-start justify-between gap-3 border-b py-5">
                <div className="grid gap-1.5">
                    <CardTitle className="text-base">
                        Request channels
                    </CardTitle>
                    <CardDescription>Source distribution</CardDescription>
                </div>
                <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                        <Button
                            variant="ghost"
                            size="icon"
                            aria-label="Chart options"
                        >
                            <MoreHorizontal />
                        </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                        <DropdownMenuItem>Download snapshot</DropdownMenuItem>
                        <DropdownMenuItem>View details</DropdownMenuItem>
                    </DropdownMenuContent>
                </DropdownMenu>
            </CardHeader>
            <CardContent className="grid gap-6 p-6">
                <div className="relative mx-auto grid size-40 place-items-center rounded-full bg-[conic-gradient(var(--primary)_0_44%,oklch(0.72_0.17_165)_44%_75%,oklch(0.78_0.16_75)_75%_92%,oklch(0.68_0.18_305)_92%_100%)]">
                    <div className="grid size-28 place-items-center rounded-full bg-card text-center shadow-inner">
                        <div>
                            <p className="text-2xl font-semibold tabular-nums">
                                1,842
                            </p>
                            <p className="text-xs text-muted-foreground">
                                Requests
                            </p>
                        </div>
                    </div>
                </div>
                <div className="grid grid-cols-2 gap-x-4 gap-y-3">
                    {channels.map((channel) => (
                        <div
                            key={channel.label}
                            className="flex items-center justify-between gap-3 text-sm"
                        >
                            <span className="flex min-w-0 items-center gap-2 text-muted-foreground">
                                <span
                                    className={cn(
                                        'size-2 shrink-0 rounded-full',
                                        channel.color,
                                    )}
                                />
                                <span className="truncate">
                                    {channel.label}
                                </span>
                            </span>
                            <span className="font-semibold tabular-nums">
                                {channel.value}%
                            </span>
                        </div>
                    ))}
                </div>
            </CardContent>
        </Card>
    );
}
