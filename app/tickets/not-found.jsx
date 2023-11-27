import Link from 'next/link'
import React from 'react'
// This is a custom 404 page for /tickets, this will override the main 404 page
export default function NotFound() {
  return (
    <main className='text-center'>
        <h2 className='text-3xl'>We Hit a Brick Wall.</h2>
        <p>We could not find the ticket you were lookin for</p>
        <p>Go back to all <Link href="/tickets">tickets</Link>.</p>
    </main>
  )
}
