import CreateForm from "./CreateForm";

// by default all components are server components
export default function CreateTicket() {
  return (
    <main>
      <h2 className="text-primary text-center">Add a New Ticket</h2>
      {/* This is a client component */}
      <CreateForm />
    </main>
  )
}
