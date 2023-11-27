import { Suspense } from "react";
import TicketList from "./TicketList";
import Loading from "../loading";

export default function Tickets() {
  return (
    <main>
        <nav>
          <div>
            <h2>Tickets</h2>
            <p><small>Currently open tickets.</small></p>
          </div>
        </nav>

        {/* This is added so that it will only load the TicketList component rather the entire component */}
        {/* This is to make sure that we are still seeing the nav contents when loading */}
        <Suspense fallback={<Loading />}>
          <TicketList />
        </Suspense>
    </main>
  ) 
}
