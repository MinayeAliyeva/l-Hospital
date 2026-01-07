'use client';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { useToast } from '@/hooks/use-toast';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { useRequest } from 'ahooks';
import { Phone, Mail, User } from 'lucide-react';

const formSchema = z.object({
  name: z.string().min(2, 'Ad ən azı 2 simvol olmalıdır'),
  phone: z.string().min(10, 'Telefon nömrəsi düzgün deyil'),
  email: z.string().email('Email düzgün deyil'),
  message: z.string().min(10, 'Mesaj ən azı 10 simvol olmalıdır'),
});

type FormData = z.infer<typeof formSchema>;

export default function ContactForm() {
  const { toast } = useToast();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(formSchema),
  });

  const { run: submitForm, loading } = useRequest(
    async (data: FormData) => {
      await new Promise((resolve) => setTimeout(resolve, 1000));
      return data;
    },
    {
      manual: true,
      onSuccess: () => {
        toast({
          title: 'Uğurlu!',
          description: 'Mesajınız uğurla göndərildi!',
        });
        reset();
      },
      onError: () => {
        toast({
          title: 'Xəta',
          description: 'Xəta baş verdi. Yenidən cəhd edin.',
          variant: 'destructive',
        });
      },
    }
  );

  const onSubmit = (data: FormData) => {
    submitForm(data);
  };

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Bizimlə Əlaqə</h2>
            <p className="text-gray-600 text-lg">
              Suallarınız varsa, bizimlə əlaqə saxlayın. Tez bir zamanda sizə cavab verəcəyik.
            </p>
          </div>

        <div className="bg-linear-to-br from-cyan-50 to-blue-50 rounded-3xl p-8 shadow-xl">
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="name">Adınız</Label>
                <div className="relative">
                  <User className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                  <Input
                    id="name"
                    {...register('name')}
                    placeholder="Adınız"
                    className="pl-10 h-11 rounded-lg"
                  />
                </div>
                {errors.name && (
                  <p className="text-sm text-red-500">{errors.name.message}</p>
                )}
              </div>

              <div className="space-y-2">
                <Label htmlFor="phone">Telefon</Label>
                <div className="relative">
                  <Phone className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                  <Input
                    id="phone"
                    {...register('phone')}
                    placeholder="Telefon nömrəniz"
                    className="pl-10 h-11 rounded-lg"
                  />
                </div>
                {errors.phone && (
                  <p className="text-sm text-red-500">{errors.phone.message}</p>
                )}
              </div>

              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <div className="relative">
                  <Mail className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                  <Input
                    id="email"
                    {...register('email')}
                    placeholder="Email ünvanınız"
                    className="pl-10 h-11 rounded-lg"
                  />
                </div>
                {errors.email && (
                  <p className="text-sm text-red-500">{errors.email.message}</p>
                )}
              </div>

              <div className="space-y-2">
                <Label htmlFor="message">Mesaj</Label>
                <Textarea
                  id="message"
                  {...register('message')}
                  placeholder="Mesajınız"
                  rows={4}
                  className="rounded-lg"
                />
                {errors.message && (
                  <p className="text-sm text-red-500">{errors.message.message}</p>
                )}
              </div>

              <Button
                type="submit"
                disabled={loading}
                className="w-full bg-cyan-500 hover:bg-cyan-600 rounded-lg h-12 text-lg font-medium"
              >
                {loading ? 'Göndərilir...' : 'Göndər'}
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
