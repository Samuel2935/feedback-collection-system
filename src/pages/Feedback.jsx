import Logo from '../assets/feedback7.png';
import Rating from '@mui/material/Rating';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { Button } from "@/components/ui/button"


import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '../components/ui/form';
import { useForm } from 'react-hook-form';
import { Input } from '../components/ui/input';
import { useNavigate } from 'react-router-dom';
import { toast } from "react-toastify";
import { Textarea } from '@/components/ui/textarea';
import { useState } from 'react';
import Dropdownlist from '@/components/Dropdownlist';
import { Toast, ToastProvider } from '@/components/ui/toast';

const Feedback = () => {
  const [value, setValue] = useState(3);
  const navigate = useNavigate();
  
  const form = useForm({
    defaultValues: {
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      subject: '',
      message: '',
      rating: '',
      
    },
  });

  const successNotifying = () => {
    toast({
      description: "Your message has been sent.",
     
    })
    console.log("toast is here")
  };


  const onSubmit =  (data) => {
    successNotifying();
    navigate('/');
    console.log(data);
  };

  return (
    <ToastProvider>
    <div className="w-5/6 lg:w-[60%] min-h-screen pt-5 p-10 mx-auto hideScrollbar bg-body-tertiary rounded-md ">
      <div>
        <img
          src={Logo}
          alt="Logo"
          className="h-[30px] md:h-[44px] mix-blend-multiply"
        />
      </div>
      <h1 className="md:text-4xl text-2xl font-medium leading-[40px] mt-8">
        Leave a Feedback
      </h1>
      <p className="mt-px text-base font-normal text-neutral-600">
        What is your thought on our product?
      </p>
      <Form {...form}>
        <form className="mt-10 space-y-1">
          <div className="grid grid-cols-2 gap-4">
            <FormField
              control={form.control}
              name="firstName"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="">First name</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Enter your first name"
                      className="border-neutral-300"
                      {...field}
                    />
                  </FormControl>
                  <FormDescription />
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="lastName"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="">Last name</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Enter your last name"
                      className="border-neutral-300"
                      {...field}
                    />
                  </FormControl>
                  <FormDescription />
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="">Email Address</FormLabel>
                <FormControl>
                  <Input
                    placeholder="Enter your email address"
                    className="border-neutral-300"
                    type="email"
                    {...field}
                  />
                </FormControl>
                <FormDescription />
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="phone"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="">Phone number</FormLabel>
                <div className="flex gap-2">
                  <Dropdownlist />
                  <FormControl>
                    <Input
                      placeholder="9034xxxxxx"
                      className="border-neutral-300"
                      type="tel"
                      {...field}
                    />
                  </FormControl>
                </div>
                <FormDescription />
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="subject"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="">Subject</FormLabel>
                <FormControl>
                  <Input
                    placeholder="Subject"
                    type="text"
                    className="border-neutral-300 "
                    {...field}
                  />
                </FormControl>
                <FormDescription />
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="message"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="">Message</FormLabel>
                <FormControl>
                  <Textarea
                    placeholder=" Type your Message here"
                    type="text"
                    className="border-neutral-300"
                    {...field}
                  />
                </FormControl>
                <FormDescription />
                <FormMessage />
              </FormItem>
            )}
          />
          <div>
            <Box
              sx={{
                '& > legend': { mt: 2 },
              }}
            >
              <Typography component="legend">Rate us now</Typography>
              <Rating
                name="rating"
                value={value}
                onChange={(event, newValue) => {
                  setValue(newValue);
                }}
              />
            </Box>
          </div>
        </form>
        <Button
          onClick={form.handleSubmit(onSubmit)}
       
          
          className="w-full h-12 mt-2 bg-blue-600 hover:bg-blue-400"
        >
          Submit Feedback
        </Button>
      </Form>
      <Toast/>
    </div>
    </ToastProvider>
  );
};

export default Feedback;
