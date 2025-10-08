import { NextRequest, NextResponse } from 'next/server';

export const dynamic = 'force-dynamic';
import clientPromise from '@/lib/mongodb/client';

export async function GET() {
  try {
    const client = await clientPromise;
    const db = client.db();
    const tickets = await db.collection('supportTickets').find({}).sort({ createdAt: -1 }).toArray();
    return NextResponse.json(tickets);
  } catch (error: any) {
    console.error('Error fetching support tickets:', error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}

export async function POST(request: NextRequest) {
  try {
    const client = await clientPromise;
    const db = client.db();
    const body = await request.json();
    const result = await db.collection('supportTickets').insertOne(body);
    const ticket = await db.collection('supportTickets').findOne({ _id: result.insertedId });
    return NextResponse.json(ticket, { status: 201 });
  } catch (error: any) {
    console.error('Error creating support ticket:', error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
