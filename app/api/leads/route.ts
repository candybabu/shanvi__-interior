import { NextResponse } from 'next/server';
import { supabase } from '@/lib/supabase';

export async function GET(request: Request) {
  // 1. URL se "key" nikalna
  const { searchParams } = new URL(request.url);
  const userKey = searchParams.get('key');

  // 2. Check karna ki key sahi hai ya nahi
  if (userKey !== process.env.MY_API_SECRET) {
    return NextResponse.json({ error: 'Unauthorized: Galat Key' }, { status: 401 });
  }

  try {
    const { data, error } = await supabase.from('leads').select('*');

    if (error) throw error;

    return NextResponse.json(data);
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}