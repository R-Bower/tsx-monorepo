export interface SidebarConfigEntry {
  label: string
  url: string
}

export const sidebarConfig: SidebarConfigEntry[] = [
  {label: "Overview", url: "/"},
  {label: "Theme", url: "/theme"},
  {label: "System props", url: "/system-props"},
  {label: "Core concepts", url: "/core-concepts"},
  {label: "Philosophy", url: "/philosophy"},
]
