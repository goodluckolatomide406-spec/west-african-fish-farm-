import { motion } from 'framer-motion';
import { Shield, Lock, AlertTriangle } from 'lucide-react';

export const PrivacyPage = () => {
  return (
    <div className="min-h-screen bg-black pt-32 pb-24 px-4">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          {/* Header */}
          <div className="mb-16">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center">
                <Shield size={28} className="text-primary" />
              </div>
              <div>
                <h1 className="text-4xl md:text-5xl font-serif font-black text-white tracking-tighter">
                  Privacy & Security
                </h1>
                <p className="text-zinc-500 text-sm font-medium mt-1">
                  Last updated: {new Date().toLocaleDateString('en-US', { month: 'long', year: 'numeric' })}
                </p>
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="space-y-12">
            {/* Introduction */}
            <section>
              <p className="text-zinc-300 text-lg leading-relaxed">
                At West Africa Fish Farm, we are committed to protecting your privacy and ensuring the security of your personal information. This policy outlines how we collect, use, and safeguard your data when you interact with our services.
              </p>
            </section>

            {/* Information Collection */}
            <section>
              <h2 className="text-2xl font-serif font-black text-white mb-4 tracking-tight">
                Information We Collect
              </h2>
              <div className="space-y-4 text-zinc-400 leading-relaxed">
                <p>
                  We collect information that you provide directly to us, including:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Contact information (name, email, phone number, company name)</li>
                  <li>Inquiry details (fish species of interest, order notes, shipping preferences)</li>
                  <li>Communication records (WhatsApp messages, email correspondence)</li>
                  <li>Website usage data (comments, feedback submitted through our forms)</li>
                </ul>
              </div>
            </section>

            {/* How We Use Your Information */}
            <section>
              <h2 className="text-2xl font-serif font-black text-white mb-4 tracking-tight">
                How We Use Your Information
              </h2>
              <div className="space-y-4 text-zinc-400 leading-relaxed">
                <p>
                  We use the information we collect to:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Process and respond to your inquiries about fish stock availability</li>
                  <li>Provide shipping quotes and logistics coordination</li>
                  <li>Communicate with you about orders, stock updates, and customer service</li>
                  <li>Improve our website and services based on your feedback</li>
                  <li>Comply with legal obligations and export regulations</li>
                </ul>
              </div>
            </section>

            {/* Data Storage & Security */}
            <section>
              <h2 className="text-2xl font-serif font-black text-white mb-4 tracking-tight flex items-center gap-3">
                <Lock size={24} className="text-primary" />
                Data Storage & Security
              </h2>
              <div className="space-y-4 text-zinc-400 leading-relaxed">
                <p>
                  We implement industry-standard security measures to protect your personal information:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>All data transmissions are encrypted using SSL/TLS protocols</li>
                  <li>Customer inquiries and comments are stored locally on your device (localStorage) and are not publicly displayed</li>
                  <li>Access to personal information is restricted to authorized personnel only</li>
                  <li>We do not sell, trade, or rent your personal information to third parties</li>
                </ul>
              </div>
            </section>

            {/* Critical Security Warning */}
            <section className="bg-red-950/20 border border-red-900/30 rounded-2xl p-8">
              <div className="flex items-start gap-4">
                <AlertTriangle size={24} className="text-red-500 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-xl font-serif font-black text-white mb-3">
                    Critical Security Notice
                  </h3>
                  <p className="text-zinc-300 leading-relaxed">
                    West Africa Fish Farm will <strong className="text-white">never</strong> request sensitive financial information, passwords, or payment details via email or WhatsApp. All legitimate transactions are conducted through secure, verified channels. If you receive suspicious communications claiming to be from us, please contact us directly at <a href="mailto:wagffelfarm@gmail.com" className="text-primary hover:underline">wagffelfarm@gmail.com</a> to verify authenticity.
                  </p>
                </div>
              </div>
            </section>

            {/* Third-Party Services */}
            <section>
              <h2 className="text-2xl font-serif font-black text-white mb-4 tracking-tight">
                Third-Party Services
              </h2>
              <div className="space-y-4 text-zinc-400 leading-relaxed">
                <p>
                  We may use third-party services to facilitate our operations:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li><strong className="text-white">WhatsApp:</strong> For direct customer communication (subject to Meta's privacy policy)</li>
                  <li><strong className="text-white">Email Services:</strong> For order confirmations and customer support</li>
                  <li><strong className="text-white">Shipping Partners:</strong> For international logistics and delivery tracking</li>
                </ul>
                <p>
                  These services have their own privacy policies, and we encourage you to review them.
                </p>
              </div>
            </section>

            {/* Your Rights */}
            <section>
              <h2 className="text-2xl font-serif font-black text-white mb-4 tracking-tight">
                Your Rights
              </h2>
              <div className="space-y-4 text-zinc-400 leading-relaxed">
                <p>
                  You have the right to:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Request access to the personal information we hold about you</li>
                  <li>Request correction or deletion of your personal data</li>
                  <li>Withdraw consent for data processing</li>
                  <li>Opt-out of marketing communications</li>
                </ul>
                <p>
                  To exercise these rights, please contact us at <a href="mailto:wagffelfarm@gmail.com" className="text-primary hover:underline">wagffelfarm@gmail.com</a>.
                </p>
              </div>
            </section>

            {/* International Data Transfers */}
            <section>
              <h2 className="text-2xl font-serif font-black text-white mb-4 tracking-tight">
                International Data Transfers
              </h2>
              <p className="text-zinc-400 leading-relaxed">
                As a global export business, your information may be transferred to and processed in countries outside your country of residence. These countries may have data protection laws that differ from your jurisdiction. We ensure appropriate safeguards are in place to protect your information in accordance with this privacy policy.
              </p>
            </section>

            {/* Changes to This Policy */}
            <section>
              <h2 className="text-2xl font-serif font-black text-white mb-4 tracking-tight">
                Changes to This Policy
              </h2>
              <p className="text-zinc-400 leading-relaxed">
                We may update this privacy policy from time to time to reflect changes in our practices or for other operational, legal, or regulatory reasons. We will notify you of any material changes by posting the new policy on this page with an updated revision date.
              </p>
            </section>

            {/* Contact Us */}
            <section className="bg-zinc-900/50 border border-zinc-800 rounded-2xl p-8">
              <h2 className="text-2xl font-serif font-black text-white mb-4 tracking-tight">
                Contact Us
              </h2>
              <p className="text-zinc-400 leading-relaxed mb-4">
                If you have any questions, concerns, or requests regarding this privacy policy or our data practices, please contact us:
              </p>
              <div className="space-y-2 text-zinc-300">
                <p><strong className="text-white">Email:</strong> <a href="mailto:wagffelfarm@gmail.com" className="text-primary hover:underline">wagffelfarm@gmail.com</a></p>
                <p><strong className="text-white">WhatsApp:</strong> +234 8036708191</p>
                <p><strong className="text-white">Location:</strong> Lagos, Nigeria / West African Region</p>
              </div>
            </section>
          </div>
        </motion.div>
      </div>
    </div>
  );
};
