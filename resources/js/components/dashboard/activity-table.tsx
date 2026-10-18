import {
    ArrowDown,
    ArrowUp,
    ArrowUpDown,
    ChevronLeft,
    ChevronRight,
    MoreHorizontal,
    Search,
    SlidersHorizontal,
} from 'lucide-react';
import { useMemo, useState } from 'react';
import { toast } from 'sonner';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
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
    DropdownMenuCheckboxItem,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Input } from '@/components/ui/input';
import { cn } from '@/lib/utils';

type ActivityStatus = 'Completed' | 'In progress' | 'Pending';

type Activity = {
    id: string;
    person: string;
    email: string;
    type: string;
    date: string;
    status: ActivityStatus;
};

const activities: Activity[] = [
    {
        id: 'REQ-1048',
        person: 'Amina Rahman',
        email: 'amina@example.com',
        type: 'Service request',
        date: '18 Oct, 10:42',
        status: 'Completed',
    },
    {
        id: 'REQ-1047',
        person: 'Tanvir Hasan',
        email: 'tanvir@example.com',
        type: 'Document review',
        date: '18 Oct, 09:18',
        status: 'In progress',
    },
    {
        id: 'REQ-1046',
        person: 'Nusrat Jahan',
        email: 'nusrat@example.com',
        type: 'Community support',
        date: '17 Oct, 16:05',
        status: 'Pending',
    },
    {
        id: 'REQ-1045',
        person: 'Fahim Ahmed',
        email: 'fahim@example.com',
        type: 'Case follow-up',
        date: '17 Oct, 13:22',
        status: 'Completed',
    },
    {
        id: 'REQ-1044',
        person: 'Sadia Islam',
        email: 'sadia@example.com',
        type: 'Service request',
        date: '17 Oct, 11:40',
        status: 'Completed',
    },
    {
        id: 'REQ-1043',
        person: 'Rafi Chowdhury',
        email: 'rafi@example.com',
        type: 'Document review',
        date: '16 Oct, 15:12',
        status: 'In progress',
    },
    {
        id: 'REQ-1042',
        person: 'Maliha Khan',
        email: 'maliha@example.com',
        type: 'Community support',
        date: '16 Oct, 12:37',
        status: 'Pending',
    },
    {
        id: 'REQ-1041',
        person: 'Imran Kabir',
        email: 'imran@example.com',
        type: 'Case follow-up',
        date: '15 Oct, 09:54',
        status: 'Completed',
    },
];

const pageSize = 5;

const statusStyles: Record<ActivityStatus, string> = {
    Completed:
        'border-emerald-200 bg-emerald-50 text-emerald-700 dark:border-success/30 dark:bg-success/10 dark:text-success',
    'In progress':
        'border-blue-200 bg-blue-50 text-blue-700 dark:border-primary/30 dark:bg-primary/10 dark:text-accent',
    Pending:
        'border-amber-200 bg-amber-50 text-amber-700 dark:border-warning/30 dark:bg-warning/10 dark:text-warning',
};

export function ActivityTable() {
    const [query, setQuery] = useState('');
    const [statuses, setStatuses] = useState<ActivityStatus[]>([]);
    const [sortDirection, setSortDirection] = useState<'asc' | 'desc'>('desc');
    const [page, setPage] = useState(1);

    const filteredActivities = useMemo(() => {
        const normalizedQuery = query.trim().toLowerCase();

        return activities
            .filter((activity) => {
                const matchesQuery =
                    normalizedQuery === '' ||
                    [
                        activity.person,
                        activity.email,
                        activity.id,
                        activity.type,
                    ]
                        .join(' ')
                        .toLowerCase()
                        .includes(normalizedQuery);
                const matchesStatus =
                    statuses.length === 0 || statuses.includes(activity.status);

                return matchesQuery && matchesStatus;
            })
            .sort((first, second) =>
                sortDirection === 'asc'
                    ? first.id.localeCompare(second.id)
                    : second.id.localeCompare(first.id),
            );
    }, [query, sortDirection, statuses]);

    const pageCount = Math.max(
        1,
        Math.ceil(filteredActivities.length / pageSize),
    );
    const currentPage = Math.min(page, pageCount);
    const visibleActivities = filteredActivities.slice(
        (currentPage - 1) * pageSize,
        currentPage * pageSize,
    );

    function toggleStatus(status: ActivityStatus): void {
        setPage(1);
        setStatuses((currentStatuses) =>
            currentStatuses.includes(status)
                ? currentStatuses.filter(
                      (currentStatus) => currentStatus !== status,
                  )
                : [...currentStatuses, status],
        );
    }

    return (
        <Card className="gap-0 overflow-hidden py-0 shadow-xs">
            <CardHeader className="flex flex-col gap-4 border-b py-5 lg:flex-row lg:items-center lg:justify-between">
                <div className="grid gap-1.5">
                    <CardTitle className="text-base">Recent requests</CardTitle>
                    <CardDescription>
                        Track and manage the latest constituent activity.
                    </CardDescription>
                </div>
                <div className="flex w-full flex-col gap-2 sm:flex-row lg:w-auto">
                    <div className="relative min-w-0 flex-1 lg:w-64">
                        <Search className="pointer-events-none absolute top-1/2 left-3 size-4 -translate-y-1/2 text-muted-foreground" />
                        <Input
                            value={query}
                            onChange={(event) => {
                                setQuery(event.target.value);
                                setPage(1);
                            }}
                            type="search"
                            placeholder="Search requests..."
                            aria-label="Search requests"
                            className="pl-9 shadow-none"
                        />
                    </div>
                    <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                            <Button
                                variant="outline"
                                className="justify-center"
                            >
                                <SlidersHorizontal />
                                Filter
                                {statuses.length > 0 && (
                                    <span className="rounded-full bg-primary px-1.5 text-[10px] text-primary-foreground">
                                        {statuses.length}
                                    </span>
                                )}
                            </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end" className="w-48">
                            <DropdownMenuLabel>Status</DropdownMenuLabel>
                            <DropdownMenuSeparator />
                            {(
                                ['Completed', 'In progress', 'Pending'] as const
                            ).map((status) => (
                                <DropdownMenuCheckboxItem
                                    key={status}
                                    checked={statuses.includes(status)}
                                    onCheckedChange={() => toggleStatus(status)}
                                >
                                    {status}
                                </DropdownMenuCheckboxItem>
                            ))}
                        </DropdownMenuContent>
                    </DropdownMenu>
                </div>
            </CardHeader>

            <CardContent className="p-0">
                <div className="overflow-x-auto">
                    <table className="w-full min-w-3xl text-left text-sm">
                        <caption className="sr-only">
                            Recent constituent requests with status and date
                        </caption>
                        <thead className="border-b bg-muted/35 text-xs text-muted-foreground">
                            <tr>
                                <th
                                    scope="col"
                                    className="px-6 py-3 font-medium"
                                >
                                    Constituent
                                </th>
                                <th
                                    scope="col"
                                    className="px-4 py-3 font-medium"
                                >
                                    Request
                                </th>
                                <th
                                    scope="col"
                                    className="px-4 py-3 font-medium"
                                >
                                    Status
                                </th>
                                <th
                                    scope="col"
                                    aria-sort={
                                        sortDirection === 'asc'
                                            ? 'ascending'
                                            : 'descending'
                                    }
                                    className="px-4 py-3 font-medium"
                                >
                                    <button
                                        type="button"
                                        onClick={() =>
                                            setSortDirection((direction) =>
                                                direction === 'asc'
                                                    ? 'desc'
                                                    : 'asc',
                                            )
                                        }
                                        className="inline-flex items-center gap-1.5 rounded-sm outline-none focus-visible:ring-2 focus-visible:ring-ring"
                                    >
                                        Reference
                                        {sortDirection === 'asc' ? (
                                            <ArrowUp className="size-3" />
                                        ) : sortDirection === 'desc' ? (
                                            <ArrowDown className="size-3" />
                                        ) : (
                                            <ArrowUpDown className="size-3" />
                                        )}
                                    </button>
                                </th>
                                <th
                                    scope="col"
                                    className="px-4 py-3 font-medium"
                                >
                                    Updated
                                </th>
                                <th scope="col" className="w-12 px-4 py-3">
                                    <span className="sr-only">Actions</span>
                                </th>
                            </tr>
                        </thead>
                        <tbody className="divide-y">
                            {visibleActivities.map((activity) => (
                                <tr
                                    key={activity.id}
                                    className="transition-colors hover:bg-muted/30"
                                >
                                    <td className="px-6 py-3.5">
                                        <div className="flex items-center gap-3">
                                            <Avatar className="size-8">
                                                <AvatarFallback className="bg-primary/10 text-[11px] font-semibold text-primary">
                                                    {activity.person
                                                        .split(' ')
                                                        .map((part) => part[0])
                                                        .join('')}
                                                </AvatarFallback>
                                            </Avatar>
                                            <div className="grid min-w-0 gap-0.5">
                                                <span className="truncate font-medium">
                                                    {activity.person}
                                                </span>
                                                <span className="truncate text-xs text-muted-foreground">
                                                    {activity.email}
                                                </span>
                                            </div>
                                        </div>
                                    </td>
                                    <td className="px-4 py-3.5 text-muted-foreground">
                                        {activity.type}
                                    </td>
                                    <td className="px-4 py-3.5">
                                        <Badge
                                            variant="outline"
                                            className={cn(
                                                'font-medium',
                                                statusStyles[activity.status],
                                            )}
                                        >
                                            <span className="size-1.5 rounded-full bg-current" />
                                            {activity.status}
                                        </Badge>
                                    </td>
                                    <td className="px-4 py-3.5 font-mono text-xs">
                                        {activity.id}
                                    </td>
                                    <td className="px-4 py-3.5 whitespace-nowrap text-muted-foreground">
                                        {activity.date}
                                    </td>
                                    <td className="px-4 py-3.5">
                                        <DropdownMenu>
                                            <DropdownMenuTrigger asChild>
                                                <Button
                                                    variant="ghost"
                                                    size="icon"
                                                    aria-label={`Actions for ${activity.id}`}
                                                >
                                                    <MoreHorizontal />
                                                </Button>
                                            </DropdownMenuTrigger>
                                            <DropdownMenuContent align="end">
                                                <DropdownMenuItem
                                                    onSelect={() =>
                                                        toast.info(
                                                            `Opening ${activity.id}`,
                                                        )
                                                    }
                                                >
                                                    View details
                                                </DropdownMenuItem>
                                                <DropdownMenuItem
                                                    onSelect={() =>
                                                        toast.success(
                                                            `${activity.id} assigned to you`,
                                                        )
                                                    }
                                                >
                                                    Assign to me
                                                </DropdownMenuItem>
                                            </DropdownMenuContent>
                                        </DropdownMenu>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>

                {visibleActivities.length === 0 ? (
                    <div
                        className="grid min-h-48 place-items-center p-6 text-center"
                        role="status"
                    >
                        <div className="grid max-w-sm gap-2">
                            <div className="mx-auto grid size-10 place-items-center rounded-full bg-muted">
                                <Search className="size-5 text-muted-foreground" />
                            </div>
                            <p className="font-medium">No matching requests</p>
                            <p className="text-sm text-muted-foreground">
                                Try changing your search or clearing the active
                                filters.
                            </p>
                            <Button
                                variant="outline"
                                size="sm"
                                className="mx-auto mt-1"
                                onClick={() => {
                                    setQuery('');
                                    setStatuses([]);
                                }}
                            >
                                Clear filters
                            </Button>
                        </div>
                    </div>
                ) : (
                    <div className="flex flex-col gap-3 border-t px-4 py-3 text-sm sm:flex-row sm:items-center sm:justify-between sm:px-6">
                        <p className="text-xs text-muted-foreground">
                            Showing {(currentPage - 1) * pageSize + 1}–
                            {Math.min(
                                currentPage * pageSize,
                                filteredActivities.length,
                            )}{' '}
                            of {filteredActivities.length}
                        </p>
                        <div className="flex items-center gap-2">
                            <Button
                                variant="outline"
                                size="sm"
                                disabled={currentPage === 1}
                                onClick={() =>
                                    setPage((value) => Math.max(1, value - 1))
                                }
                            >
                                <ChevronLeft /> Previous
                            </Button>
                            <span className="px-1 text-xs font-medium tabular-nums">
                                {currentPage} / {pageCount}
                            </span>
                            <Button
                                variant="outline"
                                size="sm"
                                disabled={currentPage === pageCount}
                                onClick={() =>
                                    setPage((value) =>
                                        Math.min(pageCount, value + 1),
                                    )
                                }
                            >
                                Next <ChevronRight />
                            </Button>
                        </div>
                    </div>
                )}
            </CardContent>
        </Card>
    );
}
