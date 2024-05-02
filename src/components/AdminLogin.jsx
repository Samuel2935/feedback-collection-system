'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';

import { Button } from '@/components/ui/button';
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Link } from 'react-router-dom';

const formSchema = z.object({
  username: z.string().min(2, {
    message: 'Username must be at least 2 characters.',
  }),
});

export function AdminLogin() {
  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: '',
    },
  });

  const handleSubmit = () => {
    // do something here
  };

  return (
    <Form {...form}>
      <form
        onSubmit={() => handleSubmit()}
        className="max-w-sm mx-auto mt-5 bg-body-tertiary p-4 space-y-1"
      >
  
        <FormField
          control={form.control}
          name="Email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input placeholder="Enter your email" {...field} />
              </FormControl>
              <FormDescription>
                {/* This is your public display name. */}
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="password"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="">Password</FormLabel>
              <FormControl>
                <Input
                  placeholder="Enter your password"
                  className="border-neutral-300"
                  type="password"
                  {...field}
                />
              </FormControl>
              <FormDescription />
              <FormMessage />
            </FormItem>
          )}
        />
        <p className="mt-4 text-sm font-normal">
          Forgot password?
          <span className="font-semibold text-violet-600">
            <Link to={'/login'}>Reset password</Link>
          </span>
        </p>
        <Button type="submit">Submit</Button>
      </form>
    </Form>
  );
}
