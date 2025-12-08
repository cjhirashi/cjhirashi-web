import Link from "next/link"
import { Plus, GripVertical, Pencil, Trash, Eye, EyeOff } from "lucide-react"

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
import { getSections, deleteSection } from "./actions"

export default async function HomeBuilderPage() {
    const sections = await getSections()

    return (
        <div className="space-y-8">
            <div className="flex items-center justify-between">
                <div>
                    <h2 className="text-3xl font-bold tracking-tight">Home Builder</h2>
                    <p className="text-muted-foreground">Manage and reorder sections on your homepage.</p>
                </div>
                <Button asChild>
                    <Link href="/admin/home/new">
                        <Plus className="mr-2 h-4 w-4" />
                        Add Section
                    </Link>
                </Button>
            </div>

            <div className="rounded-md border bg-card">
                <Table>
                    <TableHeader>
                        <TableRow>
                            <TableHead className="w-[50px]"></TableHead>
                            <TableHead>Type</TableHead>
                            <TableHead>Preview Content</TableHead>
                            <TableHead>Status</TableHead>
                            <TableHead className="w-[70px]"></TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {sections.map((section) => (
                            <TableRow key={section.id}>
                                <TableCell>
                                    <GripVertical className="h-5 w-5 text-muted-foreground cursor-move" />
                                </TableCell>
                                <TableCell className="font-medium">
                                    <span className="inline-flex items-center rounded-md bg-primary/10 px-2 py-1 text-xs font-medium text-primary ring-1 ring-inset ring-primary/20">
                                        {section.type}
                                    </span>
                                </TableCell>
                                <TableCell className="max-w-[300px] truncate text-muted-foreground">
                                    {/* Preview logic based on flexible JSON content */}
                                    {/* eslint-disable-next-line @typescript-eslint/no-explicit-any */}
                                    {(section.content as any).title || (section.content as any).headline || "No title"}
                                </TableCell>
                                <TableCell>
                                    {section.isActive ? (
                                        <div className="flex items-center text-green-600 text-sm">
                                            <Eye className="mr-1 h-3 w-3" /> Active
                                        </div>
                                    ) : (
                                        <div className="flex items-center text-muted-foreground text-sm">
                                            <EyeOff className="mr-1 h-3 w-3" /> Hidden
                                        </div>
                                    )}
                                </TableCell>
                                <TableCell>
                                    <DropdownMenu>
                                        <DropdownMenuTrigger asChild>
                                            <Button variant="ghost" className="h-8 w-8 p-0">
                                                <span className="sr-only">Open menu</span>
                                                <Pencil className="h-4 w-4" />
                                            </Button>
                                        </DropdownMenuTrigger>
                                        <DropdownMenuContent align="end">
                                            <DropdownMenuItem asChild>
                                                <Link href={`/admin/home/${section.id}/edit`}>
                                                    <Pencil className="mr-2 h-4 w-4" />
                                                    Edit
                                                </Link>
                                            </DropdownMenuItem>
                                            <form action={deleteSection.bind(null, section.id)}>
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
                        {sections.length === 0 && (
                            <TableRow>
                                <TableCell colSpan={5} className="h-32 text-center text-muted-foreground">
                                    No sections added yet. <br />
                                    Click "Add Section" to start building your homepage.
                                </TableCell>
                            </TableRow>
                        )}
                    </TableBody>
                </Table>
            </div>

            <div className="bg-muted/50 p-4 rounded-lg text-sm text-muted-foreground">
                <p><strong>Note:</strong> Drag and drop reordering is not fully active in this preview (requires client component). Sections will display in the order shown.</p>
            </div>
        </div>
    )
}
