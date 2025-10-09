import { NextResponse } from 'next/server'
import programsData from '@/data/programs.json'

export async function GET() {
  try {
    return NextResponse.json(programsData)
  } catch (error) {
    console.error('Error serving programs data:', error)
    return NextResponse.json(
      { error: 'Failed to load programs data' },
      { status: 500 }
    )
  }
}