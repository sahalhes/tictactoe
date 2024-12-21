    "use client"

    import * as React from "react"
    // @ts-ignore
    import { Moon, MoonIcon, Sun } from "lucide-react"
    import { useTheme } from "next-themes"

    import { Button } from "@/components/ui/button"
    import {
      DropdownMenu,
      DropdownMenuContent,
      DropdownMenuItem,
      DropdownMenuTrigger,
    } from "@/components/ui/dropdown-menu"

    export function ModeToggle() {
      const { setTheme } = useTheme()

      return (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <
// @ts-ignore
            Button variant="outline" size="icon" className={undefined} children={undefined}>
              <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
              <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
              <span className="sr-only">Toggle theme</span>
            </Button>
          </DropdownMenuTrigger>
          <
// @ts-ignore
          DropdownMenuContent align="end">
            <
// @ts-ignore
            DropdownMenuItem onClick={() => setTheme("light")}>
              Light
            </DropdownMenuItem>
            <
// @ts-ignore
            DropdownMenuItem onClick={() => setTheme("dark")}>
              Dark
            </DropdownMenuItem>
            <
// @ts-ignore
            DropdownMenuItem onClick={() => setTheme("system")}>
              System
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      )
    }
        