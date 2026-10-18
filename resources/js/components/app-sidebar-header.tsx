import { Link, usePage } from '@inertiajs/react';
import { Bell, CheckCheck, Search } from 'lucide-react';
import { Breadcrumbs } from '@/components/breadcrumbs';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from '@/components/ui/dialog';
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Input } from '@/components/ui/input';
import { SidebarTrigger } from '@/components/ui/sidebar';
import { UserMenuContent } from '@/components/user-menu-content';
import { useInitials } from '@/hooks/use-initials';
import { dashboard } from '@/routes';
import type { BreadcrumbItem as BreadcrumbItemType } from '@/types';

export function AppSidebarHeader({
    breadcrumbs = [],
}: {
    breadcrumbs?: BreadcrumbItemType[];
}) {
    const { auth } = usePage().props;
    const getInitials = useInitials();

    return (
        <header className="sticky top-0 z-30 flex h-16 shrink-0 items-center gap-3 border-b border-border/70 bg-background/90 px-4 backdrop-blur-xl transition-[width,height] ease-linear group-has-data-[collapsible=icon]/sidebar-wrapper:h-14 md:px-6">
            <div className="flex min-w-0 items-center gap-2">
                <SidebarTrigger className="-ml-1 size-8" />
                <div className="hidden sm:block">
                    <Breadcrumbs breadcrumbs={breadcrumbs} />
                </div>
            </div>

            <div className="ml-auto flex items-center gap-1.5">
                <div className="relative hidden lg:block">
                    <Search className="pointer-events-none absolute top-1/2 left-3 size-4 -translate-y-1/2 text-muted-foreground" />
                    <Input
                        type="search"
                        aria-label="Search dashboard"
                        placeholder="Search dashboard..."
                        className="h-9 w-64 bg-muted/40 pl-9 shadow-none xl:w-80"
                    />
                    <kbd className="pointer-events-none absolute top-1/2 right-2.5 -translate-y-1/2 rounded border bg-background px-1.5 py-0.5 text-[10px] font-medium text-muted-foreground">
                        ⌘K
                    </kbd>
                </div>

                <Dialog>
                    <DialogTrigger asChild>
                        <Button
                            variant="ghost"
                            size="icon"
                            className="lg:hidden"
                            aria-label="Search"
                        >
                            <Search />
                        </Button>
                    </DialogTrigger>
                    <DialogContent className="top-[22%] p-4 sm:max-w-xl">
                        <DialogHeader className="sr-only">
                            <DialogTitle>Search dashboard</DialogTitle>
                            <DialogDescription>
                                Search pages, people, and reports.
                            </DialogDescription>
                        </DialogHeader>
                        <div className="relative">
                            <Search className="pointer-events-none absolute top-1/2 left-3 size-4 -translate-y-1/2 text-muted-foreground" />
                            <Input
                                autoFocus
                                type="search"
                                placeholder="Search pages, people, and reports..."
                                className="h-11 pl-9"
                            />
                        </div>
                    </DialogContent>
                </Dialog>

                <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                        <Button
                            variant="ghost"
                            size="icon"
                            className="relative"
                            aria-label="Open notifications"
                        >
                            <Bell />
                            <span className="absolute top-2 right-2 size-1.5 rounded-full bg-primary ring-2 ring-background" />
                        </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end" className="w-80 p-0">
                        <div className="flex items-center justify-between px-4 py-3">
                            <DropdownMenuLabel className="p-0">
                                Notifications
                            </DropdownMenuLabel>
                            <span className="text-xs text-muted-foreground">
                                2 new
                            </span>
                        </div>
                        <DropdownMenuSeparator className="m-0" />
                        <div className="grid gap-1 p-2">
                            <Link
                                href={dashboard()}
                                className="flex gap-3 rounded-lg p-2.5 transition-colors outline-none hover:bg-muted focus-visible:ring-2 focus-visible:ring-ring"
                            >
                                <span className="mt-1 size-2 shrink-0 rounded-full bg-primary" />
                                <span className="grid gap-0.5">
                                    <span className="text-sm font-medium">
                                        Monthly report is ready
                                    </span>
                                    <span className="text-xs text-muted-foreground">
                                        Review your latest performance summary.
                                    </span>
                                </span>
                            </Link>
                            <div className="flex gap-3 rounded-lg p-2.5">
                                <CheckCheck className="mt-0.5 size-4 shrink-0 text-emerald-600" />
                                <span className="grid gap-0.5">
                                    <span className="text-sm font-medium">
                                        Data sync completed
                                    </span>
                                    <span className="text-xs text-muted-foreground">
                                        All workspace data is up to date.
                                    </span>
                                </span>
                            </div>
                        </div>
                    </DropdownMenuContent>
                </DropdownMenu>

                {auth.user && (
                    <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                            <Button
                                variant="ghost"
                                className="size-9 rounded-full p-0"
                                aria-label="Open profile menu"
                            >
                                <Avatar className="size-8">
                                    <AvatarImage
                                        src={auth.user.avatar}
                                        alt={auth.user.name}
                                    />
                                    <AvatarFallback className="bg-primary/10 text-xs font-semibold text-primary">
                                        {getInitials(auth.user.name)}
                                    </AvatarFallback>
                                </Avatar>
                            </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end" className="w-56">
                            <UserMenuContent user={auth.user} />
                        </DropdownMenuContent>
                    </DropdownMenu>
                )}
            </div>
        </header>
    );
}
