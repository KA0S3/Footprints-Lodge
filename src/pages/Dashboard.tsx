import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { CalendarDays, Key, Settings, Download, Search } from "lucide-react";

const mockBookings = [
  { id: "BK1001", guest: "John Smith", room: "Room 1", checkin: "2026-02-17", checkout: "2026-02-18", status: "confirmed", gatePin: "482913", roomPin: "719052" },
  { id: "BK1002", guest: "Sarah Johnson", room: "Room 2", checkin: "2026-02-17", checkout: "2026-02-19", status: "checked-in", gatePin: "331205", roomPin: "884721" },
  { id: "BK1003", guest: "Mike Chen", room: "Room 3", checkin: "2026-02-18", checkout: "2026-02-20", status: "confirmed", gatePin: "550192", roomPin: "223847" },
  { id: "BK1004", guest: "Lisa Williams", room: "Room 4", checkin: "2026-02-20", checkout: "2026-02-21", status: "cancelled", gatePin: "—", roomPin: "—" },
];

const statusColors: Record<string, string> = {
  confirmed: "bg-primary/10 text-primary",
  "checked-in": "bg-green-100 text-green-700",
  cancelled: "bg-muted text-muted-foreground",
};

const Dashboard = () => {
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("all");

  const filtered = mockBookings.filter((b) => {
    const matchesSearch = b.guest.toLowerCase().includes(search.toLowerCase()) || b.id.toLowerCase().includes(search.toLowerCase());
    const matchesFilter = filter === "all" || b.status === filter;
    return matchesSearch && matchesFilter;
  });

  return (
    <div className="container py-10">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-8">
        <div>
          <h1 className="font-display text-3xl font-semibold">Dashboard</h1>
          <p className="text-sm text-muted-foreground">Manage bookings, codes, and room status.</p>
        </div>
        <Button variant="outline" size="sm">
          <Download size={14} className="mr-1" /> Export CSV
        </Button>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
        {[
          { label: "Active Bookings", value: "3", icon: CalendarDays },
          { label: "Checked In", value: "1", icon: Key },
          { label: "Rooms Available", value: "2", icon: Settings },
          { label: "This Month Revenue", value: "R4,550", icon: Download },
        ].map((stat) => (
          <div key={stat.label} className="bg-card border rounded-lg p-4">
            <div className="flex items-center gap-2 text-muted-foreground mb-2">
              <stat.icon size={14} />
              <span className="text-xs">{stat.label}</span>
            </div>
            <div className="text-2xl font-bold">{stat.value}</div>
          </div>
        ))}
      </div>

      {/* Filters */}
      <div className="flex flex-col sm:flex-row gap-3 mb-6">
        <div className="relative flex-1">
          <Search size={14} className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" />
          <Input
            placeholder="Search by guest or booking ID..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="pl-9"
          />
        </div>
        <Select value={filter} onValueChange={setFilter}>
          <SelectTrigger className="w-40">
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All</SelectItem>
            <SelectItem value="confirmed">Confirmed</SelectItem>
            <SelectItem value="checked-in">Checked In</SelectItem>
            <SelectItem value="cancelled">Cancelled</SelectItem>
          </SelectContent>
        </Select>
      </div>

      {/* Table */}
      <div className="bg-card border rounded-lg overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b bg-muted/50">
                <th className="text-left p-3 font-medium">Booking</th>
                <th className="text-left p-3 font-medium">Guest</th>
                <th className="text-left p-3 font-medium">Room</th>
                <th className="text-left p-3 font-medium">Dates</th>
                <th className="text-left p-3 font-medium">Status</th>
                <th className="text-left p-3 font-medium">Gate PIN</th>
                <th className="text-left p-3 font-medium">Room PIN</th>
                <th className="text-left p-3 font-medium">Actions</th>
              </tr>
            </thead>
            <tbody>
              {filtered.map((b) => (
                <tr key={b.id} className="border-b last:border-0 hover:bg-muted/30 transition-colors">
                  <td className="p-3 font-mono text-xs">{b.id}</td>
                  <td className="p-3">{b.guest}</td>
                  <td className="p-3">{b.room}</td>
                  <td className="p-3 text-xs text-muted-foreground">{b.checkin} → {b.checkout}</td>
                  <td className="p-3">
                    <Badge variant="secondary" className={statusColors[b.status]}>
                      {b.status}
                    </Badge>
                  </td>
                  <td className="p-3 font-mono text-xs">{b.gatePin}</td>
                  <td className="p-3 font-mono text-xs">{b.roomPin}</td>
                  <td className="p-3">
                    <Button variant="ghost" size="sm" className="text-xs">
                      <Key size={12} className="mr-1" /> Regenerate
                    </Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
