import { Plus, Send } from 'lucide-react';
import { useState } from 'react';
import type { FormEvent } from 'react';
import { toast } from 'sonner';
import { Button } from '@/components/ui/button';
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from '@/components/ui/select';

export function QuickRequestDialog() {
    const [open, setOpen] = useState(false);
    const [isSubmitting, setIsSubmitting] = useState(false);

    function submitRequest(event: FormEvent<HTMLFormElement>): void {
        event.preventDefault();
        setIsSubmitting(true);

        window.setTimeout(() => {
            setIsSubmitting(false);
            setOpen(false);
            toast.success('Request created', {
                description: 'The new request was added to your workspace.',
            });
        }, 500);
    }

    return (
        <Dialog open={open} onOpenChange={setOpen}>
            <DialogTrigger asChild>
                <Button>
                    <Plus />
                    New request
                </Button>
            </DialogTrigger>
            <DialogContent>
                <form onSubmit={submitRequest} className="grid gap-5">
                    <DialogHeader>
                        <DialogTitle>Create a new request</DialogTitle>
                        <DialogDescription>
                            Capture a request and assign its initial priority.
                        </DialogDescription>
                    </DialogHeader>
                    <div className="grid gap-4">
                        <div className="grid gap-2">
                            <Label htmlFor="request-name">
                                Constituent name
                            </Label>
                            <Input
                                id="request-name"
                                name="name"
                                required
                                autoComplete="name"
                                placeholder="Enter full name"
                            />
                        </div>
                        <div className="grid gap-2">
                            <Label htmlFor="request-email">Email address</Label>
                            <Input
                                id="request-email"
                                name="email"
                                type="email"
                                required
                                autoComplete="email"
                                placeholder="name@example.com"
                            />
                        </div>
                        <div className="grid gap-2">
                            <Label htmlFor="request-type">Request type</Label>
                            <Select name="type" required>
                                <SelectTrigger
                                    id="request-type"
                                    className="w-full"
                                >
                                    <SelectValue placeholder="Select a request type" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectItem value="service">
                                        Service request
                                    </SelectItem>
                                    <SelectItem value="document">
                                        Document review
                                    </SelectItem>
                                    <SelectItem value="support">
                                        Community support
                                    </SelectItem>
                                    <SelectItem value="follow-up">
                                        Case follow-up
                                    </SelectItem>
                                </SelectContent>
                            </Select>
                        </div>
                    </div>
                    <DialogFooter>
                        <Button
                            type="button"
                            variant="outline"
                            onClick={() => setOpen(false)}
                        >
                            Cancel
                        </Button>
                        <Button type="submit" disabled={isSubmitting}>
                            <Send />
                            {isSubmitting ? 'Creating...' : 'Create request'}
                        </Button>
                    </DialogFooter>
                </form>
            </DialogContent>
        </Dialog>
    );
}
