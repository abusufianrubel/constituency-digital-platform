import { Head, usePage } from '@inertiajs/react';
import {
    CalendarDays,
    CheckCircle2,
    Download,
    RefreshCw,
    UsersRound,
    UserRoundCheck,
    Workflow,
} from 'lucide-react';
import { useState } from 'react';
import type { KeyboardEvent } from 'react';
import { toast } from 'sonner';
import { ActivityTable } from '@/components/dashboard/activity-table';
import {
    ChannelChart,
    PerformanceChart,
} from '@/components/dashboard/analytics-charts';
import { MetricCard } from '@/components/dashboard/metric-card';
import { QuickRequestDialog } from '@/components/dashboard/quick-request-dialog';
import { Button } from '@/components/ui/button';
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from '@/components/ui/card';
import { Skeleton } from '@/components/ui/skeleton';
import { cn } from '@/lib/utils';
import { dashboard } from '@/routes';

const metrics = [
    {
        title: 'Active constituents',
        value: '24,892',
        change: '12.5%',
        comparison: 'vs last month',
        icon: UsersRound,
    },
    {
        title: 'Open requests',
        value: '1,248',
        change: '8.2%',
        comparison: 'vs last month',
        icon: Workflow,
    },
    {
        title: 'Resolution rate',
        value: '94.8%',
        change: '3.1%',
        comparison: 'vs last month',
        icon: UserRoundCheck,
    },
    {
        title: 'Avg. response time',
        value: '2h 18m',
        change: '14.3%',
        comparison: 'faster this month',
        icon: CheckCircle2,
    },
];

function DashboardLoadingState() {
    return (
        <div
            className="grid gap-5"
            role="status"
            aria-label="Refreshing dashboard data"
        >
            <span className="sr-only">Refreshing dashboard data</span>
            <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
                {metrics.map((metric) => (
                    <div
                        key={metric.title}
                        className="rounded-xl border bg-card p-5"
                    >
                        <div className="flex justify-between gap-4">
                            <div className="grid flex-1 gap-3">
                                <Skeleton className="h-4 w-28" />
                                <Skeleton className="h-8 w-32" />
                            </div>
                            <Skeleton className="size-10 rounded-lg" />
                        </div>
                        <Skeleton className="mt-4 h-6 w-40" />
                    </div>
                ))}
            </div>
            <div className="grid gap-5 xl:grid-cols-3">
                <Skeleton className="h-[420px] rounded-xl xl:col-span-2" />
                <Skeleton className="h-[420px] rounded-xl" />
            </div>
        </div>
    );
}

export default function Dashboard() {
    const { auth } = usePage().props;
    const [activeTab, setActiveTab] = useState<'overview' | 'requests'>(
        'overview',
    );
    const [isRefreshing, setIsRefreshing] = useState(false);
    const firstName = auth.user?.name.split(' ')[0] ?? 'there';

    function refreshDashboard(): void {
        setIsRefreshing(true);
        window.setTimeout(() => {
            setIsRefreshing(false);
            toast.success('Dashboard is up to date');
        }, 700);
    }

    function handleTabKeyDown(event: KeyboardEvent<HTMLButtonElement>): void {
        if (event.key !== 'ArrowLeft' && event.key !== 'ArrowRight') {
            return;
        }

        event.preventDefault();
        const nextTab = activeTab === 'overview' ? 'requests' : 'overview';
        setActiveTab(nextTab);
        window.requestAnimationFrame(() => {
            document.getElementById(`dashboard-tab-${nextTab}`)?.focus();
        });
    }

    return (
        <>
            <Head title="Dashboard" />
            <div className="flex min-w-0 flex-1 flex-col bg-muted/20">
                <main className="mx-auto flex w-full max-w-[1600px] flex-1 flex-col gap-6 p-4 sm:p-6 lg:p-8">
                    <section className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
                        <div className="grid gap-1.5">
                            <div className="flex items-center gap-2 text-sm text-muted-foreground sm:hidden">
                                <span>Overview</span>
                                <span aria-hidden="true">/</span>
                                <span className="text-foreground">
                                    Dashboard
                                </span>
                            </div>
                            <h1 className="text-2xl font-semibold tracking-tight sm:text-3xl">
                                Welcome back, {firstName}
                            </h1>
                            <p className="max-w-2xl text-sm text-muted-foreground sm:text-base">
                                Here is what is happening across your
                                constituency workspace today.
                            </p>
                        </div>
                        <div className="flex flex-wrap items-center gap-2">
                            <Button
                                variant="outline"
                                onClick={() =>
                                    toast.success(
                                        'Report exported successfully',
                                    )
                                }
                            >
                                <Download />
                                <span className="hidden sm:inline">
                                    Export report
                                </span>
                                <span className="sm:hidden">Export</span>
                            </Button>
                            <QuickRequestDialog />
                        </div>
                    </section>

                    <div className="flex flex-col gap-3 border-b sm:flex-row sm:items-center sm:justify-between">
                        <div
                            role="tablist"
                            aria-label="Dashboard views"
                            className="flex gap-5"
                        >
                            {(['overview', 'requests'] as const).map((tab) => (
                                <button
                                    key={tab}
                                    type="button"
                                    role="tab"
                                    id={`dashboard-tab-${tab}`}
                                    aria-controls={`dashboard-panel-${tab}`}
                                    aria-selected={activeTab === tab}
                                    tabIndex={activeTab === tab ? 0 : -1}
                                    onClick={() => setActiveTab(tab)}
                                    onKeyDown={handleTabKeyDown}
                                    className={cn(
                                        'relative pb-3 text-sm font-medium text-muted-foreground capitalize transition-colors outline-none after:absolute after:right-0 after:bottom-0 after:left-0 after:h-0.5 after:origin-left after:scale-x-0 after:rounded-full after:bg-primary after:transition-transform hover:text-foreground focus-visible:rounded-sm focus-visible:ring-2 focus-visible:ring-ring',
                                        activeTab === tab &&
                                            'text-foreground after:scale-x-100',
                                    )}
                                >
                                    {tab}
                                </button>
                            ))}
                        </div>
                        <div className="flex items-center gap-2 pb-3 text-xs text-muted-foreground sm:pb-2">
                            <CalendarDays className="size-3.5" />
                            Updated just now
                            <Button
                                variant="ghost"
                                size="icon"
                                className="ml-1 size-7"
                                onClick={refreshDashboard}
                                disabled={isRefreshing}
                                aria-label="Refresh dashboard"
                            >
                                <RefreshCw
                                    className={cn(
                                        isRefreshing && 'animate-spin',
                                    )}
                                />
                            </Button>
                        </div>
                    </div>

                    {activeTab === 'overview' && (
                        <section
                            id="dashboard-panel-overview"
                            role="tabpanel"
                            aria-labelledby="dashboard-tab-overview"
                            className="grid gap-5"
                        >
                            {isRefreshing ? (
                                <DashboardLoadingState />
                            ) : (
                                <>
                                    <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
                                        {metrics.map((metric) => (
                                            <MetricCard
                                                key={metric.title}
                                                {...metric}
                                            />
                                        ))}
                                    </div>
                                    <div className="grid gap-5 xl:grid-cols-3">
                                        <PerformanceChart />
                                        <ChannelChart />
                                    </div>
                                    <div className="grid gap-5 xl:grid-cols-[minmax(0,2fr)_minmax(18rem,1fr)]">
                                        <ActivityTable />
                                        <Card className="gap-0 overflow-hidden py-0 shadow-xs">
                                            <CardHeader className="border-b py-5">
                                                <CardTitle className="text-base">
                                                    Service health
                                                </CardTitle>
                                                <CardDescription>
                                                    Live workspace status
                                                </CardDescription>
                                            </CardHeader>
                                            <CardContent className="grid gap-5 p-5">
                                                <div className="flex items-start gap-3 rounded-lg border border-emerald-200 bg-emerald-50 p-3.5 dark:border-success/30 dark:bg-success/10">
                                                    <CheckCircle2 className="mt-0.5 size-5 shrink-0 text-emerald-600 dark:text-success" />
                                                    <div className="grid gap-0.5">
                                                        <p className="text-sm font-semibold text-emerald-900 dark:text-success">
                                                            All systems
                                                            operational
                                                        </p>
                                                        <p className="text-xs text-emerald-700 dark:text-success/80">
                                                            No incidents
                                                            reported in the last
                                                            24 hours.
                                                        </p>
                                                    </div>
                                                </div>
                                                {[
                                                    [
                                                        'Case management',
                                                        '99.99%',
                                                    ],
                                                    ['Notifications', '99.97%'],
                                                    ['Reporting', '99.95%'],
                                                ].map(([service, uptime]) => (
                                                    <div
                                                        key={service}
                                                        className="flex items-center justify-between gap-4 text-sm"
                                                    >
                                                        <span className="flex items-center gap-2.5">
                                                            <span className="size-2 rounded-full bg-emerald-500 ring-4 ring-emerald-500/10 dark:bg-success dark:ring-success/10" />
                                                            {service}
                                                        </span>
                                                        <span className="font-medium text-muted-foreground tabular-nums">
                                                            {uptime}
                                                        </span>
                                                    </div>
                                                ))}
                                            </CardContent>
                                        </Card>
                                    </div>
                                </>
                            )}
                        </section>
                    )}

                    {activeTab === 'requests' && (
                        <section
                            id="dashboard-panel-requests"
                            role="tabpanel"
                            aria-labelledby="dashboard-tab-requests"
                        >
                            <ActivityTable />
                        </section>
                    )}
                </main>
            </div>
        </>
    );
}

Dashboard.layout = {
    breadcrumbs: [
        {
            title: 'Dashboard',
            href: dashboard(),
        },
    ],
};
