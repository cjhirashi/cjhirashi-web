import Link from "next/link"
import { PrismaClient } from "@prisma/client"
import { Plus, MoreHorizontal, Pencil, Trash, Calendar } from "lucide-react"

import { Button } from "@/components/ui/button"
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { formatDate } from "@/lib/utils"
import { deleteEvent } from "./actions"

const prisma = new PrismaClient()

export default async function EventsPage() {
    const events = await prisma.event.findMany({
        orderBy: { date: "asc" },
    })

    return (
        <div className="space-y-8">
            <div className="flex items-center justify-between">
                <h2 className="text-3xl font-bold tracking-tight">Events</h2>
                <Button asChild>
                    <Link href="/admin/events/new">
                        <Plus className="mr-2 h-4 w-4" />
                        New Event
                    </Link>
                </Button>
            </div>

            <div className="rounded-md border bg-card">
                <Table>
                    <TableHeader>
                        <TableRow>
                            <TableHead>Title</TableHead>
                            <TableHead>Event Date</TableHead>
                            <TableHead>Location</TableHead>
                            <TableHead>Status</TableHead>
                            <TableHead className="w-[70px]"></TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {events.map((event) => (
                            <TableRow key={event.id}>
                                <TableCell className="font-medium">{event.title}</TableCell>
                                <TableCell>
                                    <div className="flex items-center">
                                        <Calendar className="mr-2 h-3 w-3 text-muted-foreground" />
                                        {formatDate(event.date)}
                                    </div>
                                </TableCell>
                                <TableCell>{event.location || 'Online'}</TableCell>
                                <TableCell>
                                    <span
                                        className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium ${event.published
                                            ? "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300"
                                            : "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-300"
                                            }`}
                                    >
                                        {event.published ? "Published" : "Draft"}
                                    </span>
                                </TableCell>
                                <TableCell>
                                    <DropdownMenu>
                                        <DropdownMenuTrigger asChild>
                                            <Button variant="ghost" className="h-8 w-8 p-0">
                                                <span className="sr-only">Open menu</span>
                                                <MoreHorizontal className="h-4 w-4" />
                                            </Button>
                                        </DropdownMenuTrigger>
                                        <DropdownMenuContent align="end">
                                            <DropdownMenuItem asChild>
                                                <Link href={`/admin/events/${event.id}/edit`}>
                                                    <Pencil className="mr-2 h-4 w-4" />
                                                    Edit
                                                </Link>
                                            </DropdownMenuItem>
                                            <form action={deleteEvent.bind(null, event.id)}>
                                                <button className="w-full text-left">
                                                    <DropdownMenuItem className="text-red-600 focus:text-red-600">
                                                        <Trash className="mr-2 h-4 w-4" />
                                                        Delete
                                                    </DropdownMenuItem>
                                                </button>
                                            </form>
                                        </DropdownMenuContent>
                                    </DropdownMenu>
                                </TableCell>
                            </TableRow>
                        ))}
                        {events.length === 0 && (
                            <TableRow>
                                <TableCell colSpan={5} className="h-24 text-center">
                                    No events found.
                                </TableCell>
                            </TableRow>
                        )}
                    </TableBody>
                </Table>
            </div>
        </div>
    )
}
