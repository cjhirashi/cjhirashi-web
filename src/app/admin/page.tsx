import prisma from "@/lib/prisma"
import { FileText, FolderKanban } from "lucide-react"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

async function getStats() {
    const [postsCount, projectsCount] = await Promise.all([
        prisma.post.count(),
        prisma.project.count(),
    ])

    return {
        postsCount,
        projectsCount,
    }
}

export default async function AdminDashboard() {
    const { postsCount, projectsCount } = await getStats()

    return (
        <div className="space-y-8">
            <div className="flex items-center justify-between space-y-2">
                <h2 className="text-3xl font-bold tracking-tight">Dashboard</h2>
            </div>
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
                <Card>
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                        <CardTitle className="text-sm font-medium">Total Posts</CardTitle>
                        <FileText className="h-4 w-4 text-muted-foreground" />
                    </CardHeader>
                    <CardContent>
                        <div className="text-2xl font-bold">{postsCount}</div>
                        <p className="text-xs text-muted-foreground">
                            Published and drafts
                        </p>
                    </CardContent>
                </Card>
                <Card>
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                        <CardTitle className="text-sm font-medium">
                            Total Projects
                        </CardTitle>
                        <FolderKanban className="h-4 w-4 text-muted-foreground" />
                    </CardHeader>
                    <CardContent>
                        <div className="text-2xl font-bold">{projectsCount}</div>
                        <p className="text-xs text-muted-foreground">
                            Portfolio items
                        </p>
                    </CardContent>
                </Card>
            </div>
        </div>
    )
}
