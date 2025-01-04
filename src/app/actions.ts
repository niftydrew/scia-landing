'use server';

import { supabase } from '@/lib/supabase';

async function login() {
  console.log('Attempting to login anonymously');
  const { data, error } = await supabase.auth.signInAnonymously();

  if (!error && data?.session) {
    await supabase.auth.setSession({
      access_token: data.session.access_token,
      refresh_token: data.session.refresh_token,
    });
    await supabase.auth.getSession();

    // console.log('Session set:', sessionData);
  }
}

async function checkUser() {
  const { data } = await supabase.auth.getUser();
  return data;
}

export async function submitEmail(email: string) {
  try {
    console.log('Attempting to submit email:', email);
    const user = await checkUser();
    if (user?.user === null) {
      await login();
    }

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
          message: 'This email is already on our waitlist.',
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
      message: 'Failed to submit email. Please try again.',
    };
  }
}
