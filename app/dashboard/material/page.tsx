import {
  Copy,
  CreditCard,
  MoreVertical,
  PenLine,
  PlusCircle,
  Truck,
} from "lucide-react"

import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Separator } from "@/components/ui/separator"
import { DialogOverlay } from "@/components/Create"

export default function Material() {
  return (
    <main className="grid flex-1 items-start gap-4 p-4 sm:px-6 sm:py-0 md:gap-8">
      <div className="grid auto-rows-max items-start gap-4 md:gap-8 lg:col-span-2">
        <div className="flex justify-between pb-4">
          <h1 className="text-4xl font-semibold leading-none tracking-tight">
            WAVE Raw Material Inventory
          </h1>
          <DialogOverlay />
        </div>
        <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6">
          <Card>
            <CardHeader className="pb-2">
              <CardDescription>Total Quantity</CardDescription>
              <CardTitle className="text-4xl">224 KG</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-xs text-muted-foreground">
                +25% from last month
              </div>
            </CardContent>
            <CardFooter>
              <Progress value={25} aria-label="25% increase" />
            </CardFooter>
          </Card>
        </div>
        <Card>
          <CardHeader className="px-7">
            <CardTitle>Entries</CardTitle>
            <CardDescription>Raw Material Transactions.</CardDescription>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>ID</TableHead>
                  <TableHead>From</TableHead>
                  <TableHead className="hidden sm:table-cell">
                    Quantity(in KG)
                  </TableHead>
                  <TableHead className="hidden md:table-cell">Date</TableHead>
                  <TableHead className="text-right">Amount</TableHead>
                  <TableHead className="text-right">Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow className="bg-accent">
                  <TableHead>QAZ1</TableHead>
                  <TableCell>
                    <div className="font-medium">name</div>
                    <div className="hidden text-sm text-muted-foreground md:inline">
                      email_address
                    </div>
                  </TableCell>
                  <TableCell className="hidden sm:table-cell">1000</TableCell>
                  <TableCell className="hidden md:table-cell">
                    2023-06-23
                  </TableCell>
                  <TableCell className="text-right">₹2500.00</TableCell>
                  <TableCell className="flex justify-end">
                    <Button
                      size="sm"
                      variant="ghost"
                      className="h-8 w-24 gap-1"
                    >
                      <PenLine className="h-3.5 w-3.5" />
                      <span className="lg:sr-only xl:not-sr-only xl:whitespace-nowrap">
                        Edit
                      </span>
                    </Button>
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableHead>WSX2</TableHead>
                  <TableCell>
                    <div className="font-medium">name</div>
                    <div className="hidden text-sm text-muted-foreground md:inline">
                      email_address
                    </div>
                  </TableCell>
                  <TableCell className="hidden sm:table-cell">1500</TableCell>
                  <TableCell className="hidden md:table-cell">
                    2023-06-24
                  </TableCell>
                  <TableCell className="text-right">₹1950.00</TableCell>
                  <TableCell className="flex justify-end">
                    <Button
                      size="sm"
                      variant="ghost"
                      className="h-8 w-24 gap-1"
                    >
                      <PenLine className="h-3.5 w-3.5" />
                      <span className="lg:sr-only xl:not-sr-only xl:whitespace-nowrap">
                        Edit
                      </span>
                    </Button>
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableHead>EDC3</TableHead>
                  <TableCell>
                    <div className="font-medium">name</div>
                    <div className="hidden text-sm text-muted-foreground md:inline">
                      email_address
                    </div>
                  </TableCell>
                  <TableCell className="hidden sm:table-cell">3000</TableCell>
                  <TableCell className="hidden md:table-cell">
                    2023-06-25
                  </TableCell>
                  <TableCell className="text-right">₹3510.00</TableCell>
                  <TableCell className="flex justify-end">
                    <Button
                      size="sm"
                      variant="ghost"
                      className="h-8 w-24 gap-1"
                    >
                      <PenLine className="h-3.5 w-3.5" />
                      <span className="lg:sr-only xl:not-sr-only xl:whitespace-nowrap">
                        Edit
                      </span>
                    </Button>
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableHead>RFV4</TableHead>
                  <TableCell>
                    <div className="font-medium">name</div>
                    <div className="hidden text-sm text-muted-foreground md:inline">
                      email_address
                    </div>
                  </TableCell>
                  <TableCell className="hidden sm:table-cell">2500</TableCell>
                  <TableCell className="hidden md:table-cell">
                    2023-06-26
                  </TableCell>
                  <TableCell className="text-right">₹2450.00</TableCell>
                  <TableCell className="flex justify-end">
                    <Button
                      size="sm"
                      variant="ghost"
                      className="h-8 w-24 gap-1"
                    >
                      <PenLine className="h-3.5 w-3.5" />
                      <span className="lg:sr-only xl:not-sr-only xl:whitespace-nowrap">
                        Edit
                      </span>
                    </Button>
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableHead>TGB5</TableHead>
                  <TableCell>
                    <div className="font-medium">name</div>
                    <div className="hidden text-sm text-muted-foreground md:inline">
                      email_address
                    </div>
                  </TableCell>
                  <TableCell className="hidden sm:table-cell">1890</TableCell>
                  <TableCell className="hidden md:table-cell">
                    2023-06-23
                  </TableCell>
                  <TableCell className="text-right">₹1250.00</TableCell>
                  <TableCell className="flex justify-end">
                    <Button
                      size="sm"
                      variant="ghost"
                      className="h-8 w-24 gap-1"
                    >
                      <PenLine className="h-3.5 w-3.5" />
                      <span className="lg:sr-only xl:not-sr-only xl:whitespace-nowrap">
                        Edit
                      </span>
                    </Button>
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableHead>YHN6</TableHead>
                  <TableCell>
                    <div className="font-medium">name</div>
                    <div className="hidden text-sm text-muted-foreground md:inline">
                      email_address
                    </div>
                  </TableCell>
                  <TableCell className="hidden sm:table-cell">2300</TableCell>
                  <TableCell className="hidden md:table-cell">
                    2023-06-23
                  </TableCell>
                  <TableCell className="text-right">₹2250.00</TableCell>
                  <TableCell className="flex justify-end">
                    <Button
                      size="sm"
                      variant="ghost"
                      className="h-8 w-24 gap-1"
                    >
                      <PenLine className="h-3.5 w-3.5" />
                      <span className="lg:sr-only xl:not-sr-only xl:whitespace-nowrap">
                        Edit
                      </span>
                    </Button>
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableHead>UJM7</TableHead>
                  <TableCell>
                    <div className="font-medium">name</div>
                    <div className="hidden text-sm text-muted-foreground md:inline">
                      email_address
                    </div>
                  </TableCell>
                  <TableCell className="hidden sm:table-cell">1130</TableCell>
                  <TableCell className="hidden md:table-cell">
                    2023-06-24
                  </TableCell>
                  <TableCell className="text-right">₹1650.00</TableCell>
                  <TableCell className="flex justify-end">
                    <Button
                      size="sm"
                      variant="ghost"
                      className="h-8 w-24 gap-1"
                    >
                      <PenLine className="h-3.5 w-3.5" />
                      <span className="lg:sr-only xl:not-sr-only xl:whitespace-nowrap">
                        Edit
                      </span>
                    </Button>
                  </TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      </div>
    </main>
  )
}
