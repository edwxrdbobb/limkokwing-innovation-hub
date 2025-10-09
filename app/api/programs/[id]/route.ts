import { NextResponse } from 'next/server'
import programsData from '@/data/programs.json'

export async function GET(
  request: Request,
  { params }: { params: { id: string } }
) {
  try {
    const { id } = params
    const program = programsData.programs.find(p => p.id === id)
    
    if (!program) {
      return NextResponse.json(
        { error: 'Program not found' },
        { status: 404 }
      )
    }
    
    return NextResponse.json(program)
  } catch (error) {
    console.error('Error serving program data:', error)
    return NextResponse.json(
      { error: 'Failed to load program data' },
      { status: 500 }
    )
  }
}