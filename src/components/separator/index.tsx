import { Separator } from "@/components/ui/separator"

export function SeparatorDemo({ data }: any) {
    return (
        <div>
            <div className="space-y-1">
                <h4 className="text-sm font-medium leading-none">Dashboard</h4>
                <p className="text-sm text-muted-foreground">
                    Manage your database
                </p>
            </div>
            <Separator className="my-4" />
            <div className="flex h-5 items-center space-x-4 text-sm">
                <div>Tables</div>
                {data && data.map((t: any, index: any) =>
                (
                    <div key={index} className="bg-cyan-800 card-foreground rounded p-1">
                        <div style={{ color: "rgb(242,242,255)" }}>{t}</div>
                        <Separator orientation="vertical" />
                    </div>
                )
                )}
                <Separator orientation="vertical" />
                <div>Constraints</div>
                <Separator orientation="vertical" />
                <div>Data</div>
            </div>
        </div>
    )
}
