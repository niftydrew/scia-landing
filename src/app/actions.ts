'use server';

import { supabase } from '@/lib/supabase';

export async function submitEmail(email: string) {
  try {
    console.log('Attempting to submit email:', email);
    
    const { data, error } = await supabase
      .from('waitlist')
      .insert([{ email, submitted_at: new Date().toISOString() }])
      .select();

    if (error) {
      console.error('Supabase error details:', {
        message: error.message,
        code: error.code,
        details: error.details,
      });

      if (error.code === '23505') {
        return { 
          success: false, 
          error: 'duplicate',
          message: 'This email is already on our waitlist.'
        };
      }

      throw error;
    }

    console.log('Email submitted successfully:', data);
    return { success: true };
  } catch (error) {
    console.error('Full error object:', error);
    return { 
      success: false, 
      error: 'unknown',
      message: 'Failed to submit email. Please try again.' 
    };
  }
}
