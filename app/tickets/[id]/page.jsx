import { notFound } from "next/navigation";

export const dynamicParams = true // if false, shows an 404 age if the use land on the ticket page that is not created yet

// Static Rendering
export async function generateStaticParams() {
    const response = await fetch('http://localhost:4000/tickets/')
    const tickets = await response.json()

    return tickets.map((ticket) => ({
        id: ticket.id 
    }))
}   

async function getTicket(id) {

    const response = await fetch('http://localhost:4000/tickets/' + id, {
        next: {
            revalidate: 60 // The data is initially cached so this property revalidates the data every 60 seconds
        }
    });

    if (!response.ok){
        // this is a builtin 404 page from next js
        notFound()
    }
    
    return response.json()
}

export default async function TicketDetails({ params }) {
    const ticket = await getTicket(params.id);

  return (
    <main>
        <nav>
            <h2>TicketDetails</h2>
        </nav>
        <div className="card">
            <h3>{ticket.title}</h3>
            <small>Created by {ticket.user_email}</small>
            <p>{ticket.body}</p>
            <div className={`pill ${ticket.priority}`}>
                {ticket.priority} priority
            </div>
        </div>
    </main>
  )
}
