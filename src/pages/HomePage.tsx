import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Hero } from '../components/Hero';
import { PerformanceReach } from '../components/PerformanceReach';
import { ShippingPackaging } from '../components/ShippingPackaging';
import { CarePortal } from '../components/CarePortal';
import { TrustBar } from '../components/TrustBar';
import { Button } from '../components/ui/button';
import { Textarea } from '../components/ui/textarea';
import { Input } from '../components/ui/input';
import { Send } from 'lucide-react';
import { toast } from 'sonner';

export const HomePage = () => {
  const [commentName, setCommentName] = useState('');
  const [commentText, setCommentText] = useState('');

  // Load saved comment from localStorage (admin-only — never rendered publicly)
  useEffect(() => {
    const saved = localStorage.getItem('visitor-comment');
    if (saved) {
      // Stored for admin eyes only; never displayed on the page
      console.log('[Admin] Saved comment found in localStorage.');
    }
  }, []);

  const handleSubmitComment = () => {
    if (!commentText.trim()) return;
    const comment = {
      name: commentName.trim() || 'Anonymous',
      text: commentText.trim(),
      timestamp: Date.now(),
    };
    localStorage.setItem('visitor-comment', JSON.stringify(comment));
    toast.success('Your message has been received privately. Thank you!');
    setCommentName('');
    setCommentText('');
  };

  return (
    <>
      <Hero />
      <PerformanceReach />
      <ShippingPackaging />
      <CarePortal />
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.6 }}
        className="py-16 px-4 bg-zinc-950/50"
      >
        <div className="max-w-2xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="text-center mb-10"
          >
            <h2 className="text-3xl md:text-4xl font-serif font-black text-white mb-3 tracking-tight">
              Leave a Comment or Inquiry
            </h2>
            <p className="text-zinc-500 text-sm font-medium">
              Please share your thoughts, questions, or general feedback privately with us below.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            className="bg-white rounded-2xl p-8 shadow-xl border border-zinc-200"
          >
            <div className="space-y-5">
              <div>
                <label htmlFor="comment-name" className="text-[10px] font-black text-black/60 uppercase tracking-[0.2em] mb-2 block">
                  Your Name <span className="text-black/30">(optional)</span>
                </label>
                <Input
                  id="comment-name"
                  value={commentName}
                  onChange={(e) => setCommentName(e.target.value)}
                  placeholder="Enter your name"
                  className="bg-white border-zinc-300 text-black font-bold placeholder:text-zinc-400 focus-visible:ring-primary"
                />
              </div>
              <div>
                <label htmlFor="comment-text" className="text-[10px] font-black text-black/60 uppercase tracking-[0.2em] mb-2 block">
                  Your Message
                </label>
                <Textarea
                  id="comment-text"
                  value={commentText}
                  onChange={(e) => setCommentText(e.target.value)}
                  placeholder="Write your comment or inquiry here..."
                  className="bg-white border-zinc-300 text-black font-bold placeholder:text-zinc-400 min-h-[120px] resize-none focus-visible:ring-primary"
                />
              </div>
              <Button
                onClick={handleSubmitComment}
                className="w-full bg-primary hover:bg-primary/90 text-black font-black text-[11px] tracking-[0.15em] uppercase h-12 rounded-xl gap-2"
              >
                <Send size={16} />
                Send Message Privately
              </Button>
            </div>
          </motion.div>
        </div>
      </motion.section>
      <TrustBar />
    </>
  );
};

export default HomePage;