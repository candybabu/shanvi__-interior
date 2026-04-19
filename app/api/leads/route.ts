import { NextResponse } from 'next/server';
import { supabase } from '@/lib/supabase';

export async function GET() {
  try {
    const { data, error } = await supabase
      .from('leads')
      .select('*'); // Maine order wali line hata di hai

    if (error) {
      return NextResponse.json({ 
        error: "Supabase Error", 
        message: error.message 
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