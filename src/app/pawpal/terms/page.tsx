import type { Metadata } from "next";
import { LegalNav, LegalShell } from "../../../components/Legal";
import { brand } from "../../../lib/brand";

export const metadata: Metadata = {
  title: "PawPal Terms of Service",
  description: "Review the conditions for using the PawPal companion app.",
};

export default function TermsPage() {
  return (
    <>
      <LegalNav />
      <LegalShell
        title="PawPal Terms of Service"
        subtitle="These terms govern your access to and use of PawPal by Neothone."
      >
        <h2 id="acceptance">1. Acceptance of terms</h2>
        <p>
          By downloading, accessing, or using PawPal, you agree to these Terms
          of Service and any policies referenced here. If you are using PawPal
          on behalf of a household, breeder program, or organization, you
          confirm you have authority to accept for that entity.
        </p>

        <h2 id="accounts">2. Accounts and eligibility</h2>
        <ul>
          <li>You must be at least 16 or the age of digital consent in your region.</li>
          <li>
            Keep your login credentials secure. You are responsible for activity
            under your account.
          </li>
          <li>
            Please keep account information accurate so we can provide support
            and required notices.
          </li>
        </ul>

        <h2 id="acceptable-use">3. Acceptable use</h2>
        <p>
          You agree not to misuse PawPal, including by attempting unauthorized
          access, distributing malware, scraping personal data, or interfering
          with normal operation. Breaches may result in suspension.
        </p>

        <h2 id="user-content">4. User content</h2>
        <p>
          You retain rights to the information, photos, and notes you add. By
          submitting content you grant Neothone a limited license to host,
          display, and process it to operate the service. You confirm you have
          necessary rights to share the data you provide.
        </p>

        <h2 id="subscriptions">5. Plans and payments</h2>
        <p>
          PawPal offers free and paid tiers. Paid plans renew automatically
          unless cancelled before the renewal date. Pricing, features, and
          cancellation instructions are provided in-app and on our website.
        </p>

        <h2 id="intellectual-property">6. Intellectual property</h2>
        <p>
          PawPal, including branding, features, and code, is the property of
          Neothone and its licensors. You may not copy, reverse engineer, or
          create derivative works without permission.
        </p>

        <h2 id="termination">7. Termination</h2>
        <p>
          You may stop using PawPal at any time. We may suspend or terminate
          access for violations of these terms, suspected fraud, or legal
          reasons. Upon termination we will disable access to your account and,
          upon request, delete personal data per our Privacy Policy.
        </p>

        <h2 id="disclaimers">8. Disclaimers and limitation of liability</h2>
        <p>
          PawPal is provided “as is” without warranties of any kind. Neothone is
          not liable for indirect, incidental, or consequential damages arising
          from use of the service, to the maximum extent permitted by law.
        </p>

        <h2 id="indemnity">9. Indemnity</h2>
        <p>
          You agree to indemnify and hold Neothone harmless from claims arising
          out of your misuse of PawPal or violation of these terms.
        </p>

        <h2 id="changes">10. Changes to terms</h2>
        <p>
          We may update these terms as PawPal evolves. Material changes will be
          communicated, and continued use after updates constitutes acceptance.
        </p>

        <h2 id="governing-law">11. Governing law</h2>
        <p>
          These terms are governed by the laws of Oregon, USA, without regard to
          conflict of law rules. Disputes will be handled in state or federal
          courts located in Portland, Oregon.
        </p>

        <h2 id="contact">12. Contact</h2>
        <p>
          Questions about these terms? Email{" "}
          <a href={`mailto:${brand.company.contactEmail}`}>
            {brand.company.contactEmail}
          </a>
          .
        </p>
      </LegalShell>
    </>
  );
}
