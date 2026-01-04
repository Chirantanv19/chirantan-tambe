"use client";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { toast } from "sonner";
import { Send, Loader2, Mail, MapPin } from "lucide-react";

const contactSchema = z.object({
    name: z.string().min(2, "Name must be at least 2 characters"),
    email: z.string().email("Please enter a valid email"),
    message: z.string().min(10, "Message must be at least 10 characters"),
});

type ContactFormData = z.infer<typeof contactSchema>;

export default function Contact() {
    const [loading, setLoading] = useState(false);
    const { register, handleSubmit, reset, formState: { errors } } = useForm<ContactFormData>({
        resolver: zodResolver(contactSchema),
    });

    const onSubmit = async (data: ContactFormData) => {
        setLoading(true);
        try {
            const response = await fetch("/api/contact", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(data),
            });

            if (response.ok) {
                toast.success("Message sent! I'll get back to you shortly.");
                reset();
            } else {
                throw new Error("Failed to send");
            }
        } catch {
            toast.error("Failed to send message. Please try again.");
        } finally {
            setLoading(false);
        }
    };

    return (
        <section id="contact" className="py-32 container mx-auto px-6">
            <div className="glass rounded-[3rem] overflow-hidden grid lg:grid-cols-2">
                <div className="p-12 lg:p-16 bg-primary/5 border-r border-white/5">
                    <h2 className="text-4xl font-bold mb-6">{"Let's build something epic."}</h2>
                    <p className="text-gray-400 mb-12 text-lg">{"Have a project in mind? Reach out and let's make it happen."}</p>
                    <div className="space-y-8">
                        <div className="flex items-center gap-4">
                            <Mail className="text-primary" />
                            <span>chirantannt19@gmail.com</span>
                        </div>
                        <div className="flex items-center gap-4">
                            <MapPin className="text-secondary" />
                            <span>Electronic City, Banglore</span>
                        </div>
                    </div>
                </div>
                <form onSubmit={handleSubmit(onSubmit)} className="p-12 lg:p-16 space-y-6">
                    <input {...register("name")} placeholder="Full Name" className="w-full bg-white/5 border border-white/10 rounded-2xl p-4 outline-none focus:border-primary" />
                    {errors.name && <p className="text-red-400 text-xs">{errors.name.message}</p>}
                    <input {...register("email")} placeholder="Email" className="w-full bg-white/5 border border-white/10 rounded-2xl p-4 outline-none focus:border-primary" />
                    {errors.email && <p className="text-red-400 text-xs">{errors.email.message}</p>}
                    <textarea {...register("message")} rows={4} placeholder="Message" className="w-full bg-white/5 border border-white/10 rounded-2xl p-4 outline-none focus:border-primary resize-none" />
                    {errors.message && <p className="text-red-400 text-xs">{errors.message.message}</p>}
                    <button disabled={loading} className="w-full bg-primary py-5 rounded-2xl font-bold flex items-center justify-center gap-3">
                        {loading ? <Loader2 className="animate-spin" /> : <><Send size={18} /> Send Message</>}
                    </button>
                </form>
            </div>
        </section>
    );
}