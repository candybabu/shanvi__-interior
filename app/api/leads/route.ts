import { NextResponse } from 'next/server';
import { supabase } from '@/lib/supabase';

export async function GET() {
  try {
    const { data, error } = await supabase
      .from('leads')
      .select('*')
      .order('created_at', { ascending: false });

    if (error) {
      // Yeh line humein browser mein asli wajah dikhayegi
      return NextResponse.json({ 
        error: "Supabase Error", 
        message: error.message, 
        hint: error.hint 
      }, { status: 500 });
    }

    return NextResponse.json(data);
  } catch (error: any) {
    return NextResponse.json({ 
      error: 'Server Error', 
      message: error.message 
    }, { status: 500 });
  }
}