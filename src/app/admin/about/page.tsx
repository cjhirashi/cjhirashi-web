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
import { getSections, deleteSection } from "@/app/admin/home/actions"

export default async function AboutBuilderPage() {
    // 1. Fetch ONLY About Sections
    const sections = await getSections('ABOUT')

    return (
        <div className="space-y-8">
            <div className="flex items-center justify-between">
                <div>
                    <h2 className="text-3xl font-bold tracking-tight">About Page Builder</h2>
                    <p className="text-muted-foreground">Manage and reorder sections on your About page.</p>
                </div>
                {/* 2. Route to /admin/about/new */}
                <Button asChild>
                    <Link href="/admin/about/new">
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
                                    <span className="inline-flex items-center rounded-md bg-purple-100 px-2 py-1 text-xs font-medium text-purple-700 ring-1 ring-inset ring-purple-700/10">
                                        {/* Display Cleaner Name */}
                                        {section.type.replace('ABOUT_', '')}
                                    </span>
                                </TableCell>
                                <TableCell className="max-w-[300px] truncate text-muted-foreground">
                                    {/* eslint-disable-next-line @typescript-eslint/no-explicit-any */}
                                    {(section.content as any).title || (section.content as any).headline || (section.content as any).badge || "Section content..."}
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
                                            {/* 3. Route to /admin/about/[id]/edit */}
                                            <DropdownMenuItem asChild>
                                                <Link href={`/admin/about/${section.id}/edit`}>
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
                                    Click "Add Section" to start building your About page.
                                </TableCell>
                            </TableRow>
                        )}
                    </TableBody>
                </Table>
            </div>

            <div className="bg-muted/50 p-4 rounded-lg text-sm text-muted-foreground">
                <p><strong>Note:</strong> Drag and drop reordering relies on the same system as the home page.</p>
            </div>
        </div>
    )
}
