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
                throw new Error();
            }
        } catch (err) {
            toast.error("Failed to send message. Please try again.");
        } finally {
            setLoading(false);
        }
    };

    return (
        <section id="contact" className="py-32 container mx-auto px-6">
            <div className="glass rounded-[3rem] overflow-hidden grid lg:grid-cols-2">

                {/* Contact Info Sidebar */}
                <div className="p-12 lg:p-16 bg-primary/5 border-r border-white/5">
                    <h2 className="text-4xl font-bold mb-6">Let&apos;s build <br /> something <span className="text-primary">epic</span>.</h2>
                    <p className="text-gray-400 mb-12 text-lg">Have a project in mind? Reach out and let&apos;s make it happen.</p>

                    <div className="space-y-8">
                        <div className="flex items-center gap-4">
                            <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center text-primary">
                                <Mail size={24} />
                            </div>
                            <div>
                                <p className="text-sm text-gray-400">Email me</p>
                                <p className="font-semibold">hello@yourname.com</p>
                            </div>
                        </div>
                        <div className="flex items-center gap-4">
                            <div className="w-12 h-12 rounded-2xl bg-secondary/10 flex items-center justify-center text-secondary">
                                <MapPin size={24} />
                            </div>
                            <div>
                                <p className="text-sm text-gray-400">Location</p>
                                <p className="font-semibold">San Francisco, CA</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Actual Form */}
                <form onSubmit={handleSubmit(onSubmit)} className="p-12 lg:p-16 space-y-6">
                    <div className="space-y-2">
                        <label className="text-sm font-medium text-gray-300">Full Name</label>
                        <input
                            {...register("name")}
                            className="w-full bg-white/5 border border-white/10 rounded-2xl px-5 py-4 focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all"
                            placeholder="Elon Musk"
                        />
                        {errors.name && <p className="text-red-400 text-xs mt-1">{errors.name.message}</p>}
                    </div>

                    <div className="space-y-2">
                        <label className="text-sm font-medium text-gray-300">Email Address</label>
                        <input
                            {...register("email")}
                            className="w-full bg-white/5 border border-white/10 rounded-2xl px-5 py-4 focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all"
                            placeholder="elon@spacex.com"
                        />
                        {errors.email && <p className="text-red-400 text-xs mt-1">{errors.email.message}</p>}
                    </div>

                    <div className="space-y-2">
                        <label className="text-sm font-medium text-gray-300">Message</label>
                        <textarea
                            {...register("message")}
                            rows={4}
                            className="w-full bg-white/5 border border-white/10 rounded-2xl px-5 py-4 focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all resize-none"
                            placeholder="Tell me about your vision..."
                        />
                        {errors.message && <p className="text-red-400 text-xs mt-1">{errors.message.message}</p>}
                    </div>

                    <button
                        disabled={loading}
                        className="w-full bg-primary hover:bg-primary/90 text-white font-bold py-5 rounded-2xl transition-all flex items-center justify-center gap-3 disabled:opacity-50 group"
                    >
                        {loading ? <Loader2 className="animate-spin" /> : <><Send size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" /> Send Message</>}
                    </button>
                </form>
            </div>
        </section>
    );
}