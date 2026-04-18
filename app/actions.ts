'use server'

import { supabase } from '@/lib/supabase'

export async function submitLead(formData: FormData) {
  const name = formData.get('name') as string
  const phone = formData.get('phone') as string
  const message = formData.get('message') as string

  const { data, error } = await supabase
    .from('leads')
    .insert([{ name, phone, message }])

  if (error) {
    console.error('Error:', error)
    return { success: false }
  }

  return { success: true }
}