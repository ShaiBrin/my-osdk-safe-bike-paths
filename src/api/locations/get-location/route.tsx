import { NextResponse } from 'next/server';
import { sql } from '@vercel/postgres';

// Define the expected structure of each row returned by the query
type LocationRow = { name: string };

export async function GET() {
  try {
    // Fetch data from the "locations" table, explicitly stating that the rows will have a "name" field
    const result = await sql<LocationRow>`SELECT name FROM locations;`;

    // Explicitly annotate the type of `row` in the map function
    return NextResponse.json({ locations: result.rows.map((row: LocationRow) => row.name) });
  } catch (error) {
    console.error('Error fetching locations:', error);
    return NextResponse.json({ error: 'Failed to fetch locations' }, { status: 500 });
  }
}