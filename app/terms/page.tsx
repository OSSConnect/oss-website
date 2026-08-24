import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function TermsOfService() {
  return (
    <main className="bg-oss-bg min-h-screen pt-32">
      <Navbar />
      <div className="mx-auto max-w-3xl px-6 py-12">
        <h1 className="font-display text-4xl font-bold text-oss-text mb-8">Terms of Service</h1>
        
        <div className="prose prose-lg text-oss-muted">
          <p className="mb-6">
            Last updated: {new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
          </p>
          
          <h2 className="text-2xl font-bold text-oss-text mt-8 mb-4">1. Acceptance of Terms</h2>
          <p className="mb-4">
            By accessing and using OSS | Let&rsquo;s Connect, you accept and agree to be bound by the terms and provision of this agreement.
          </p>

          <h2 className="text-2xl font-bold text-oss-text mt-8 mb-4">2. Community Guidelines</h2>
          <p className="mb-4">
            We are a community built on mutual respect and collaboration. When interacting with the community, you agree to:
          </p>
          <ul className="list-disc pl-6 mb-4 space-y-2">
            <li>Be respectful and constructive in your communications.</li>
            <li>Not post or transmit any content that is unlawful, harmful, or abusive.</li>
            <li>Respect the intellectual property rights of open-source projects.</li>
          </ul>

          <h2 className="text-2xl font-bold text-oss-text mt-8 mb-4">3. User Accounts</h2>
          <p className="mb-4">
            If you create an account on the website, you are responsible for maintaining the security of your account and you are fully responsible for all activities that occur under the account.
          </p>

          <h2 className="text-2xl font-bold text-oss-text mt-8 mb-4">4. Modifications to Service</h2>
          <p className="mb-4">
            OSS | Let&rsquo;s Connect reserves the right at any time to modify or discontinue, temporarily or permanently, the service (or any part thereof) with or without notice.
          </p>

          <h2 className="text-2xl font-bold text-oss-text mt-8 mb-4">5. Contact Information</h2>
          <p className="mb-4">
            If you have any questions about these Terms, please contact us.
          </p>
        </div>
      </div>
      <Footer />
    </main>
  );
}
