'use client';

import * as z from 'zod';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { Form, FormControl, FormField, FormItem } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { SubmitButton } from './submit-button';
import { useEffect, useState } from 'react';
import { submitEmail } from '@/app/actions';
import { useToast } from '@/hooks/use-toast';

const TOAST_MESSAGES = {
  success: {
    title: "You're on the list!",
    description: "We'll notify you when SCIA launches. Stay tuned!",
  },
  error: {
    default: {
      title: 'Something went wrong',
      description: 'Please try again in a moment.',
    },
    duplicate: {
      title: 'Already subscribed',
      description:
        "This email is already on our waitlist. We'll notify you when we launch!",
    },
  },
} as const;

const formSchema = z.object({
  email: z.string().email('Please enter a valid email address'),
});

type FormValues = z.infer<typeof formSchema>;

export function WaitlistForm() {
  const [showSubmit, setShowSubmit] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: '',
    },
    mode: 'onChange',
  });

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

  async function onSubmit(data: FormValues) {
    try {
      setIsSubmitting(true);
      const result = await submitEmail(data.email);

      if (result.success) {
        toast({
          ...TOAST_MESSAGES.success,
          variant: 'default',
          className: 'bg-sciaprimary/10 backdrop-blur-sm border-sciaprimary/10',
          duration: 5000,
        });
        form.reset();
        setShowSubmit(false);
      } else {
        toast({
          ...(result.error === 'duplicate'
            ? TOAST_MESSAGES.error.duplicate
            : TOAST_MESSAGES.error.default),
          variant: 'destructive',
          className: 'backdrop-blur-sm',
          duration: 5000,
        });
      }
    } catch {
      toast({
        ...TOAST_MESSAGES.error.default,
        variant: 'destructive',
        className: 'backdrop-blur-sm',
        duration: 5000,
      });
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className='flex items-center gap-2 p-1.5 rounded-xl bg-background/30 border border-sciaprimary backdrop-blur-sm w-full md:w-[350px] max-w-full relative overflow-hidden focus-within:ring-2 focus-within:ring-sciaprimary focus-within:ring-offset-0 transition-all duration-200'
      >
        <FormField
          control={form.control}
          name='email'
          render={({ field }) => (
            <FormItem className='flex-1'>
              <FormControl>
                <Input
                  id='waitlist-email'
                  placeholder='Enter email'
                  className='border-0 bg-transparent text-foreground text-base placeholder:text-sm sm:placeholder:text-base placeholder:text-foreground/40 focus-visible:ring-0 focus-visible:ring-offset-0 pl-3 sm:pl-4 h-9 sm:h-10'
                  disabled={isSubmitting}
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
          <SubmitButton
            loading={isSubmitting}
            className='h-9 sm:h-10'
          />
        </div>
      </form>
    </Form>
  );
}
