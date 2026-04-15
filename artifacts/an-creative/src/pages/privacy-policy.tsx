import { motion } from "framer-motion";

export default function PrivacyPolicy() {
  return (
    <div className="w-full pt-12 pb-24 bg-background">
      <div className="container mx-auto px-4 md:px-6 max-w-3xl">
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-4xl font-bold font-serif text-foreground mb-4">Privacy Policy</h1>
          <p className="text-muted-foreground mb-12">Last updated: October 24, 2026</p>

          <div className="prose prose-slate dark:prose-invert prose-headings:font-serif prose-headings:text-foreground prose-p:text-muted-foreground prose-a:text-primary max-w-none">
            
            <p>
              At A&N Creative, we take your privacy seriously. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or purchase our digital products and services.
            </p>

            <h2>1. Information We Collect</h2>
            <p>
              We collect information that you voluntarily provide to us when you register on the site, express an interest in obtaining information about us or our products, or otherwise contact us.
            </p>
            <ul>
              <li><strong>Personal Data:</strong> Name, email address, billing address, and phone number.</li>
              <li><strong>Payment Data:</strong> Credit card numbers and other payment information (processed securely by our payment providers, e.g., Stripe; we do not store full credit card details).</li>
              <li><strong>Usage Data:</strong> IP address, browser type, operating system, and pages visited on our site.</li>
            </ul>

            <h2>2. How We Use Your Information</h2>
            <p>
              We use the information we collect or receive:
            </p>
            <ul>
              <li>To facilitate account creation and logon process.</li>
              <li>To fulfill and manage your orders, payments, and digital downloads.</li>
              <li>To send administrative information to you, such as product updates or changes to our terms.</li>
              <li>To request feedback and to contact you about your use of our products.</li>
              <li>To protect our services and prevent fraudulent transactions.</li>
            </ul>

            <h2>3. Cookies and Tracking Technologies</h2>
            <p>
              We may use cookies, web beacons, tracking pixels, and other tracking technologies to help customize the Site and improve your experience. When you access the Site, your personal information is not collected through the use of tracking technology.
            </p>

            <h2>4. Third-Party Services</h2>
            <p>
              We may share your information with third-party vendors, service providers, contractors or agents who perform services for us or on our behalf and require access to such information to do that work. These include:
            </p>
            <ul>
              <li>Payment processors (e.g., Stripe, PayPal)</li>
              <li>Email marketing platforms (e.g., Mailchimp)</li>
              <li>Analytics providers (e.g., Google Analytics)</li>
            </ul>

            <h2>5. Data Security</h2>
            <p>
              We use administrative, technical, and physical security measures to help protect your personal information. While we have taken reasonable steps to secure the personal information you provide to us, please be aware that despite our efforts, no security measures are perfect or impenetrable.
            </p>

            <h2>6. Your Privacy Rights</h2>
            <p>
              Depending on your location, you may have certain rights regarding your personal data, including the right to access, correct, or delete your personal information. If you would like to exercise these rights, please contact us.
            </p>

            <h2>7. Contact Us</h2>
            <p>
              If you have questions or comments about this Privacy Policy, please contact us at:
              <br />
              <a href="mailto:privacy@ancreative.com" className="font-medium hover:underline">privacy@ancreative.com</a>
            </p>
            
          </div>
        </motion.div>

      </div>
    </div>
  );
}