import type { Metadata } from "next";
import { LegalShell } from "../../../components/Legal"; 

export const metadata: Metadata = {
  title: "Terms & Conditions",
  description: "Read the Terms & Conditions governing the use of YourApp.",
};

export default function TermsPage() {
  return (
    <LegalShell title="Terms & Conditions" subtitle="Please read these terms carefully before using our services.">
      <h2 id="agreement">1. Agreement to Terms</h2>
      <p>
        By accessing or using <strong>YourApp</strong>, you agree to be bound by these Terms & Conditions. If you disagree
        with any part, you may not access the service.
      </p>

      <h2 id="eligibility">2. Eligibility</h2>
      <p>
        You represent that you are at least 18 years old (or the age of majority in your jurisdiction) and have the legal
        capacity to enter into these terms.
      </p>

      <h2 id="accounts">3. Accounts</h2>
      <ul>
        <li>You are responsible for maintaining the confidentiality of your login credentials.</li>
        <li>You must promptly notify us of any unauthorized use of your account.</li>
      </ul>

      <h2 id="use">4. Acceptable Use</h2>
      <p>
        You agree not to misuse the service, including attempting to interfere with normal operation, reverse engineer,
        or access data you are not authorized to access.
      </p>

      <h2 id="ip">5. Intellectual Property</h2>
      <p>
        The service, features, and original content are the exclusive property of YourApp and its licensors.
      </p>

      <h2 id="termination">6. Termination</h2>
      <p>
        We may suspend or terminate your access immediately for any breach of these terms.
      </p>

      <h2 id="liability">7. Limitation of Liability</h2>
      <p>
        To the maximum extent permitted by law, YourApp shall not be liable for indirect, incidental, or consequential damages.
      </p>

      <h2 id="changes">8. Changes</h2>
      <p>
        We may update these terms from time to time. Updates take effect upon posting unless otherwise stated.
      </p>

      <h2 id="contact">9. Contact</h2>
      <p>
        Questions? Email us at <a href="mailto:legal@yourapp.com">legal@yourapp.com</a>.
      </p>
    </LegalShell>
  );
}