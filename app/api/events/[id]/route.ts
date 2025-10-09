import { NextResponse } from 'next/server'
import events from '@/data/events.json'

export async function GET(
  request: Request,
  { params }: { params: { id: string } }
) {
  const event = events.events.find(e => e.id === params.id)
  
  if (!event) {
    return NextResponse.json(
      { error: 'Event not found' }, 
      { status: 404 }
    )
  }
  
  return NextResponse.json(event)
}