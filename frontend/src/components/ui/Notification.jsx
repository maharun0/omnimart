import { BellDot, BellDotIcon, ChevronRight } from "lucide-react"

import { Button } from "@/components/ui/button"

export default function Notification() {
  return (
    <Button variant="outline" size="icon">
      <BellDotIcon className="h-4 w-4" />
    </Button>
  )
}
