import { motion } from "framer-motion";

export default function TermsOfService() {
  return (
    <div className="w-full pt-12 pb-24 bg-background">
      <div className="container mx-auto px-4 md:px-6 max-w-3xl">
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-4xl font-bold font-serif text-foreground mb-4">Terms of Service</h1>
          <p className="text-muted-foreground mb-12">Last updated: October 24, 2026</p>

          <div className="prose prose-slate dark:prose-invert prose-headings:font-serif prose-headings:text-foreground prose-p:text-muted-foreground prose-a:text-primary max-w-none">
            
            <p>
              These Terms of Service ("Terms") govern your access to and use of the A&N Creative website, digital products, and services. Please read these Terms carefully before using our website or purchasing our products.
            </p>

            <h2>1. Acceptance of Terms</h2>
            <p>
              By accessing our website or purchasing our products, you agree to be bound by these Terms and all applicable laws and regulations. If you do not agree with any of these terms, you are prohibited from using or accessing this site.
            </p>

            <h2>2. Digital Products License</h2>
            <p>
              Upon purchasing a digital product from A&N Creative, you are granted a non-exclusive, non-transferable, revocable license to use the digital asset in accordance with the specific license purchased (e.g., Personal, Commercial, or Extended Commercial).
            </p>
            <p>
              <strong>You may not:</strong>
            </p>
            <ul>
              <li>Resell, sublicense, or redistribute the source files.</li>
              <li>Include the source files in an open-source project or repository.</li>
              <li>Claim the original designs as your own work.</li>
              <li>Use the assets to create a direct competitor to the original product.</li>
            </ul>

            <h2>3. Refund Policy</h2>
            <p>
              Due to the nature of digital products, which cannot be returned once downloaded, <strong>all sales of digital products are final and non-refundable</strong>. We encourage you to carefully review the product descriptions and previews before making a purchase. If you experience technical issues with a file, please contact our support team for assistance.
            </p>
            <p>
              For our consulting and design services, refund policies are outlined in the specific project proposals or service agreements signed prior to project commencement.
            </p>

            <h2>4. Intellectual Property</h2>
            <p>
              All content on this website, including but not limited to text, graphics, logos, images, digital products, and software, is the property of A&N Creative and is protected by international copyright laws.
            </p>

            <h2>5. Service Modifications and Pricing</h2>
            <p>
              Prices for our products and services are subject to change without notice. We reserve the right at any time to modify or discontinue any product or service without notice. We shall not be liable to you or to any third-party for any modification, price change, suspension, or discontinuance of the Service.
            </p>

            <h2>6. Limitations of Liability</h2>
            <p>
              In no event shall A&N Creative or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on our website, even if A&N Creative has been notified orally or in writing of the possibility of such damage.
            </p>

            <h2>7. Governing Law</h2>
            <p>
              These Terms shall be governed by and construed in accordance with the laws of the jurisdiction in which A&N Creative operates, without regard to its conflict of law provisions.
            </p>

            <h2>8. Contact Information</h2>
            <p>
              Questions about the Terms of Service should be sent to us at:
              <br />
              <a href="mailto:legal@ancreative.com" className="font-medium hover:underline">legal@ancreative.com</a>
            </p>
            
          </div>
        </motion.div>

      </div>
    </div>
  );
}