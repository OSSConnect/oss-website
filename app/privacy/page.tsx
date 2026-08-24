import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function PrivacyPolicy() {
  return (
    <main className="bg-oss-bg min-h-screen pt-32">
      <Navbar />
      <div className="mx-auto max-w-3xl px-6 py-12">
        <h1 className="font-display text-4xl font-bold text-oss-text mb-8">Privacy Policy</h1>
        
        <div className="prose prose-lg text-oss-muted">
          <p className="mb-6">
            Last updated: {new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
          </p>
          
          <h2 className="text-2xl font-bold text-oss-text mt-8 mb-4">1. Introduction</h2>
          <p className="mb-4">
            Welcome to OSS | Let&rsquo;s Connect. We respect your privacy and are committed to protecting your personal data. 
            This privacy policy will inform you as to how we look after your personal data when you visit our website.
          </p>

          <h2 className="text-2xl font-bold text-oss-text mt-8 mb-4">2. The Data We Collect</h2>
          <p className="mb-4">
            We may collect, use, store and transfer different kinds of personal data about you which we have grouped together as follows:
          </p>
          <ul className="list-disc pl-6 mb-4 space-y-2">
            <li><strong>Identity Data</strong> includes first name, last name, username or similar identifier.</li>
            <li><strong>Contact Data</strong> includes email address.</li>
            <li><strong>Technical Data</strong> includes internet protocol (IP) address, browser type and version.</li>
          </ul>

          <h2 className="text-2xl font-bold text-oss-text mt-8 mb-4">3. How We Use Your Data</h2>
          <p className="mb-4">
            We will only use your personal data when the law allows us to. Most commonly, we will use your personal data in the following circumstances:
          </p>
          <ul className="list-disc pl-6 mb-4 space-y-2">
            <li>To manage your relationship with us and the community.</li>
            <li>To administer and protect our website.</li>
            <li>To deliver relevant community content to you.</li>
          </ul>

          <h2 className="text-2xl font-bold text-oss-text mt-8 mb-4">4. Contact Us</h2>
          <p className="mb-4">
            If you have any questions about this privacy policy or our privacy practices, please contact us.
          </p>
        </div>
      </div>
      <Footer />
    </main>
  );
}
