import type { Metadata } from "next";
import { LegalShell } from "../../../components/Legal";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "How YourApp collects, uses, and protects your personal data.",
};

export default function PrivacyPage() {
  return (
    <LegalShell
      title="Privacy Policy"
      subtitle="We respect your privacy and are committed to protecting it."
    >
      <h2 id="scope">1. Scope</h2>
      <p>
        This Privacy Policy explains how <strong>YourApp</strong> collects,
        uses, discloses, and safeguards your information when you use our
        services.
      </p>

      <h2 id="data-we-collect">2. Data We Collect</h2>
      <ul>
        <li>
          <strong>Account Data:</strong> name, email, password hash.
        </li>
        <li>
          <strong>Usage Data:</strong> app interactions, device info,
          approximate location (if enabled).
        </li>
        <li>
          <strong>Cookies:</strong> essential and analytics cookies to improve
          the service.
        </li>
      </ul>

      <h2 id="how-we-use">3. How We Use Data</h2>
      <ol>
        <li>Provide and maintain the service.</li>
        <li>Improve performance and user experience.</li>
        <li>Communicate updates and respond to support requests.</li>
      </ol>

      <h2 id="legal-bases">4. Legal Bases (EEA/UK)</h2>
      <p>
        We process data under legitimate interests, contract necessity, and
        consent where required.
      </p>

      <h2 id="sharing">5. Sharing</h2>
      <p>
        We may share data with service providers under strict confidentiality
        and only as necessary to deliver the service.
      </p>

      <h2 id="retention">6. Retention</h2>
      <p>
        We keep data only as long as needed for the purposes described or as
        required by law.
      </p>

      <h2 id="security">7. Security</h2>
      <p>
        We implement technical and organizational measures to protect your
        information. No method is 100% secure.
      </p>

      <h2 id="rights">8. Your Rights</h2>
      <p>
        Depending on your region, you may request access, correction, deletion,
        restriction, portability, or withdrawal of consent.
      </p>

      <h2 id="children">9. Children</h2>
      <p>
        Our services are not directed to children under 13 (or other local age
        limits). We do not knowingly collect such data.
      </p>

      <h2 id="changes">10. Changes</h2>
      <p>
        We may update this policy; we’ll post the new date at the bottom and,
        where appropriate, notify you.
      </p>

      <h2 id="contact">11. Contact</h2>
      <p>
        Privacy questions?{" "}
        <a href="mailto:privacy@yourapp.com">privacy@yourapp.com</a>.
      </p>
    </LegalShell>
  );
}
