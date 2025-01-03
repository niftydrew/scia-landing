'use client';

import * as z from 'zod';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { Form, FormControl, FormField, FormItem } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { SubmitButton } from './submit-button';
import { useEffect, useState } from 'react';

const formSchema = z.object({
  email: z.string().email('Please enter a valid email address'),
});

type FormValues = z.infer<typeof formSchema>;

export function WaitlistForm() {
  const [showSubmit, setShowSubmit] = useState(false);
  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: '',
    },
    mode: 'onChange',
  });

  // Watch for valid email changes
  useEffect(() => {
    const subscription = form.watch((value, { name }) => {
      if (name === 'email') {
        try {
          formSchema.parse({ email: value.email });
          setShowSubmit(true);
        } catch {
          setShowSubmit(false);
        }
      }
    });
    return () => subscription.unsubscribe();
  }, [form]);

  function onSubmit(data: FormValues) {
    // Handle form submission
    console.log(data);
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className='flex items-center gap-2 p-1.5 rounded-xl bg-[#7FEC7F]/5 border border-[#7FEC7F]/10 backdrop-blur-sm w-full max-w-[400px] relative overflow-hidden focus-within:border-[#7FEC7F] transition-colors duration-200'
      >
        <FormField
          control={form.control}
          name='email'
          render={({ field }) => (
            <FormItem className='flex-1'>
              <FormControl>
                <Input
                  placeholder='Enter email'
                  className='border-0 bg-transparent text-white !text-base placeholder:text-base placeholder:text-white/40 focus-visible:ring-0 focus-visible:ring-offset-0 pl-4 autofill:bg-transparent autofill:text-white [-webkit-autofill:active]:!bg-transparent [-webkit-autofill:hover]:!bg-transparent [-webkit-autofill:focus]:!bg-transparent [-webkit-autofill]:!bg-transparent [-webkit-autofill]:shadow-[inset_0_0_0px_1000px_rgb(0,0,0)] [-webkit-autofill]:!text-white'
                  style={{ fontFamily: 'var(--font-inter)' }}
                  {...field}
                />
              </FormControl>
            </FormItem>
          )}
        />
        <div
          className={`transition-all duration-300 transform ${
            showSubmit
              ? 'translate-x-0 opacity-100'
              : 'translate-x-full opacity-0'
          }`}
        >
          <SubmitButton />
        </div>
      </form>
    </Form>
  );
}
