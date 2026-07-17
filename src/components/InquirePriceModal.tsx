import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter, DialogTrigger } from './ui/dialog';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { Label } from './ui/label';
import { CONTACT_INFO } from '../data';
import { Send, Mail, Check, Loader2 } from 'lucide-react';
import { toast } from 'sonner';

interface InquirePriceModalProps {
  open?: boolean;
  onOpenChange?: (open: boolean) => void;
  preselectedSpecies?: string;
  trigger?: React.ReactNode;
}

export const InquirePriceModal = ({ open, onOpenChange, preselectedSpecies = '', trigger }: InquirePriceModalProps) => {
  const [internalOpen, setInternalOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showConfirmation, setShowConfirmation] = useState(false);
  const [focusedField, setFocusedField] = useState<string | null>(null);
  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    companyName: '',
    fishSpecies: preselectedSpecies,
    orderNotes: '',
  });

  const isControlled = open !== undefined;
  const isOpen = isControlled ? open : internalOpen;

  const handleOpenChange = (val: boolean) => {
    if (!val) {
      setShowConfirmation(false);
      setIsSubmitting(false);
    }
    if (isControlled) {
      onOpenChange?.(val);
    } else {
      setInternalOpen(val);
    }
  };

  useEffect(() => {
    if (preselectedSpecies) {
      setFormData(prev => ({ ...prev, fishSpecies: preselectedSpecies }));
    }
  }, [preselectedSpecies]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target;
    setFormData(prev => ({ ...prev, [id]: value }));
  };

  const buildMessageBody = () => {
    return `
*Livestock Information Request*
-----------------------------
*Full Name:* ${formData.fullName || 'N/A'}
*Phone Number:* ${formData.phone || 'N/A'}
*Company Name:* ${formData.companyName || 'N/A'}
*Species Preference:* ${formData.fishSpecies || 'N/A'}
*Notes:* ${formData.orderNotes || 'N/A'}
-----------------------------
    `.trim();
  };

  const validate = () => {
    if (!formData.fullName.trim()) {
      toast.error('Please enter your full name');
      return false;
    }
    if (!formData.phone.trim()) {
      toast.error('Please enter your phone number');
      return false;
    }
    return true;
  };

  const handleWhatsAppInquiry = async () => {
    if (!validate()) return;
    setIsSubmitting(true);
    // Simulate a brief sending state for UX polish
    await new Promise(resolve => setTimeout(resolve, 800));
    const message = buildMessageBody();
    window.open(`https://wa.me/${CONTACT_INFO.whatsapp}?text=${encodeURIComponent(message)}`, '_blank');
    setShowConfirmation(true);
    setIsSubmitting(false);
    setTimeout(() => {
      handleOpenChange(false);
    }, 1200);
  };

  const handleEmailInquiry = async () => {
    if (!validate()) return;
    setIsSubmitting(true);
    await new Promise(resolve => setTimeout(resolve, 800));
    const subject = `Livestock Inquiry from ${formData.fullName}`;
    const body = buildMessageBody();
    window.open(`mailto:${CONTACT_INFO.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`, '_blank');
    setShowConfirmation(true);
    setIsSubmitting(false);
    setTimeout(() => {
      handleOpenChange(false);
    }, 1200);
  };

  const inputClass = (fieldId: string) =>
    `bg-zinc-800/80 border text-white transition-all duration-300 ${
      focusedField === fieldId
        ? 'border-primary shadow-[0_0_0_3px_rgba(212,175,55,0.15)]'
        : 'border-zinc-700 hover:border-zinc-500'
    }`;

  return (
    <Dialog open={isOpen} onOpenChange={handleOpenChange}>
      {trigger && <DialogTrigger asChild>{trigger}</DialogTrigger>}
      <DialogContent className="sm:max-w-[625px] bg-zinc-900/95 backdrop-blur-xl border-zinc-800 text-white overflow-hidden">
        <AnimatePresence mode="wait">
          {showConfirmation ? (
            <motion.div
              key="confirmation"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              className="flex flex-col items-center justify-center py-16"
            >
              <motion.div
                initial={{ scale: 0, rotate: -45 }}
                animate={{ scale: 1, rotate: 0 }}
                transition={{ type: "spring", stiffness: 300, damping: 15, delay: 0.1 }}
                className="w-20 h-20 bg-primary rounded-full flex items-center justify-center mb-6"
              >
                <Check size={36} className="text-black" />
              </motion.div>
              <motion.p
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="text-xl font-serif font-bold text-white"
              >
                Inquiry Sent Successfully
              </motion.p>
              <motion.p
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="text-zinc-400 text-sm mt-2"
              >
                Our team will get back to you shortly.
              </motion.p>
            </motion.div>
          ) : (
            <motion.div
              key="form"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <DialogHeader>
                <DialogTitle className="text-2xl font-serif">Livestock Information Request</DialogTitle>
                <p className="text-zinc-400 text-sm mt-2">
                  Fill out the details below to request species availability, packing details, and shipping logistics.
                </p>
              </DialogHeader>
              <div className="grid gap-4 py-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="fullName" className="text-zinc-300">
                      Full Name <span className="text-red-400">*</span>
                    </Label>
                    <Input
                      id="fullName"
                      value={formData.fullName}
                      onChange={handleInputChange}
                      onFocus={() => setFocusedField('fullName')}
                      onBlur={() => setFocusedField(null)}
                      placeholder="Your full name"
                      className={inputClass('fullName')}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="phone" className="text-zinc-300">
                      Phone Number <span className="text-red-400">*</span>
                    </Label>
                    <Input
                      id="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={handleInputChange}
                      onFocus={() => setFocusedField('phone')}
                      onBlur={() => setFocusedField(null)}
                      placeholder="+234 800 000 0000"
                      className={inputClass('phone')}
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="companyName" className="text-zinc-300">Company Name <span className="text-zinc-500">(optional)</span></Label>
                  <Input
                    id="companyName"
                    value={formData.companyName}
                    onChange={handleInputChange}
                    onFocus={() => setFocusedField('companyName')}
                    onBlur={() => setFocusedField(null)}
                    placeholder="Your company or organization"
                    className={inputClass('companyName')}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="fishSpecies" className="text-zinc-300">Species Preference</Label>
                  <Input
                    id="fishSpecies"
                    value={formData.fishSpecies}
                    onChange={handleInputChange}
                    onFocus={() => setFocusedField('fishSpecies')}
                    onBlur={() => setFocusedField(null)}
                    placeholder="e.g., African Tigerfish, Mbu Pufferfish"
                    className={inputClass('fishSpecies')}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="orderNotes" className="text-zinc-300">Notes</Label>
                  <Textarea
                    id="orderNotes"
                    value={formData.orderNotes}
                    onChange={handleInputChange}
                    onFocus={() => setFocusedField('orderNotes')}
                    onBlur={() => setFocusedField(null)}
                    placeholder="Packing preferences, shipping destination, quantity, etc."
                    className={`${inputClass('orderNotes')} min-h-[100px]`}
                  />
                </div>
              </div>
              <DialogFooter className="flex-col sm:flex-row gap-3">
                <Button
                  onClick={handleWhatsAppInquiry}
                  disabled={isSubmitting}
                  className="w-full bg-green-500 hover:bg-green-600 text-white font-bold gap-2 h-12 disabled:opacity-60"
                >
                  {isSubmitting ? (
                    <Loader2 size={16} className="animate-spin" />
                  ) : (
                    <Send size={16} />
                  )}
                  {isSubmitting ? 'SENDING...' : 'SUBMIT VIA WHATSAPP'}
                </Button>
                <Button
                  onClick={handleEmailInquiry}
                  disabled={isSubmitting}
                  className="w-full bg-primary hover:bg-white text-black hover:text-black font-bold gap-2 h-12 disabled:opacity-60"
                >
                  {isSubmitting ? (
                    <Loader2 size={16} className="animate-spin" />
                  ) : (
                    <Mail size={16} />
                  )}
                  {isSubmitting ? 'SENDING...' : 'SUBMIT VIA EMAIL'}
                </Button>
              </DialogFooter>
            </motion.div>
          )}
        </AnimatePresence>
      </DialogContent>
    </Dialog>
  );
};