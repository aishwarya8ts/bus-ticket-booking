import React, { useState } from "react";
// import { Card, CardContent } from "@/components/ui/card";
// import { Button } from "@/components/ui/button";
// import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@shadcn/ui/card";
import { Button } from "@shadcn/ui/button";
import { Input } from "@shadcn/ui/input";

const BusBooking = () => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [location, setLocation] = useState("");
  const [destination, setDestination] = useState("");
  const [bus, setBus] = useState(null);
  const [time, setTime] = useState("");
  const [ticket, setTicket] = useState(null);

  const searchBus = () => {
    setBus({ name: "Express Bus", number: "KA-01-1234" });
  };

  const generateTicket = () => {
    const expiryTime = new Date(new Date(time).getTime() + 45 * 60000);
    setTicket({
      name,
      phone,
      bus,
      startTime: time,
      expiryTime: expiryTime.toLocaleTimeString(),
    });
  };

  return (
    <div className="p-6 space-y-4">
      <Card>
        <CardContent className="space-y-4 p-4">
          <Input
            placeholder="Enter Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <Input
            placeholder="Enter Phone Number"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />
          <Input
            placeholder="Current Location"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
          />
          <Input
            placeholder="Destination"
            value={destination}
            onChange={(e) => setDestination(e.target.value)}
          />
          <Button onClick={searchBus}>Find Bus</Button>
        </CardContent>
      </Card>

      {bus && (
        <Card>
          <CardContent className="p-4">
            <p>
              Bus: {bus.name} ({bus.number})
            </p>
            <Input
              type="time"
              value={time}
              onChange={(e) => setTime(e.target.value)}
            />
            <Button onClick={generateTicket}>Book Ticket</Button>
          </CardContent>
        </Card>
      )}

      {ticket && (
        <Card className="border border-green-500">
          <CardContent className="p-4">
            <h2>🎟️ Ticket Confirmed</h2>
            <p>Name: {ticket.name}</p>
            <p>Phone: {ticket.phone}</p>
            <p>
              Bus: {ticket.bus.name} ({ticket.bus.number})
            </p>
            <p>Start Time: {ticket.startTime}</p>
            <p>Expiry Time: {ticket.expiryTime}</p>
          </CardContent>
        </Card>
      )}
    </div>
  );
};

export default BusBooking;
