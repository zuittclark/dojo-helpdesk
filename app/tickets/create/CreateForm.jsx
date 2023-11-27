// This is going to be a client component since we are using states and lifecycles or interactivity
"use client"

import { useRouter } from "next/navigation"
import { useState } from "react"

export default function CreateForm() {

  const router = useRouter()

  const [title, setTitle] = useState("")
  const [body, setBody] = useState("")
  const [priority, setPriority] = useState("low")
  const [isLoading, setIsLoading] = useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsLoading(true)

    const ticket = {
      title,
      body,
      priority,
      user_email: "clrk@gmail.com"
    }

    const response = await fetch("http://localhost:4000/tickets", {
      method: 'POST',
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify(ticket)
    })

    if(response.status === 201){
      router.refresh() // this will refresh the data when redirecting ot "/tickets" this will ensure that we are not using the cached version of the tickets after creating new item
      router.push("/tickets")
    }

  }

  return (
    <form className="w-1/2" onSubmit={handleSubmit}>
      <label>
        <span>Title:</span>
        <input
          required 
          type="text"
          onChange={(e) => setTitle(e.target.value)}
          value={title}
        />
      </label>
      <label>
        <span>Body:</span>
        <textarea
          required
          onChange={(e) => setBody(e.target.value)}
          value={body}
        />
      </label>
      <label>
        <span>Priority:</span>
        <select 
          onChange={(e) => setPriority(e.target.value)}
          value={priority}
        >
          <option value="low">Low Priority</option>
          <option value="medium">Medium Priority</option>
          <option value="high">High Priority</option>
        </select>
      </label>
      <button 
        className="btn-primary" 
        disabled={isLoading}
      >
      {isLoading && <span>Adding...</span>}
      {!isLoading && <span>Add Ticket</span>}
    </button>
    </form>
  )
}