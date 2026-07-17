import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from './ui/dialog';
import { Info } from 'lucide-react';

export const PrivacyNoticeModal = () => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <button className="flex items-center gap-2 text-[10px] font-bold text-zinc-600 hover:text-primary transition-colors uppercase tracking-[0.2em]">
          <Info size={12} />
          Privacy Notice
        </button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[625px] bg-zinc-900 border-zinc-800 text-white">
        <DialogHeader>
          <DialogTitle className="text-2xl font-serif">Your Privacy & Security</DialogTitle>
        </DialogHeader>
        <div className="grid gap-4 py-4 text-zinc-300">
          <p>At West Africa Fish Farm, we are committed to protecting your personal information.</p>
          <div className="space-y-4">
            <div>
              <h4 className="font-bold text-primary">Data Usage</h4>
              <p>We only collect necessary contact details provided by you to fulfill orders and respond to inquiries. We do not sell or trade your information.</p>
            </div>
            <div>
              <h4 className="font-bold text-primary">Security</h4>
              <p>We employ secure communication channels to ensure your data remains confidential.</p>
            </div>
            <div className="p-4 bg-yellow-900/20 border border-yellow-500/30 rounded-lg">
              <h4 className="font-bold text-yellow-500">Important Security Warning</h4>
              <p>Please ensure you only communicate with us using the official contact information listed on this website. Do not engage with or share personal information with anyone claiming to be a member of West Africa Fish Farm who does not provide the exact contact details found on this official site.</p>
            </div>
            <div>
              <h4 className="font-bold text-primary">Your Rights</h4>
              <p>You have the right to access, update, or request the deletion of your personal information at any time by contacting us directly.</p>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};