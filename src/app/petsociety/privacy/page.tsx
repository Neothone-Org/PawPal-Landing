import type { Metadata } from "next";
import { LegalNav, LegalShell } from "../../../components/Legal";
import { brand } from "../../../lib/brand";

export const metadata: Metadata = {
  title: "PetSociety Privacy Policy",
  description:
    "Understand how PetSociety by Neothone collects, uses, and protects your information.",
};

export default function PrivacyPage() {
  return (
    <>
      <LegalNav />
      <LegalShell
        title="PetSociety Privacy Policy"
        subtitle="We safeguard family, breeder, and partner data with transparent, choice-driven practices."
      >
        <h2 id="scope">1. Who this covers</h2>
        <p>
          This policy applies to the PetSociety mobile app, web experiences, and
          related services operated by <strong>Neothone Labs Inc.</strong> It
          explains how we collect, use, and share information from pet families,
          breeders, and professional partners.
        </p>

        <h2 id="data-we-collect">2. Data we collect</h2>
        <ul>
          <li>
            <strong>Account basics</strong>: name, email, and encrypted
            authentication credentials.
          </li>
          <li>
            <strong>Pet profiles</strong>: companion names, breed details,
            birthdates, medical notes, and routine logs that you willingly
            provide.
          </li>
          <li>
            <strong>Usage signals</strong>: device type, in-app interactions,
            and diagnostic events that help us improve performance.
          </li>
          <li>
            <strong>Optional telemetry</strong>: wellness data from connected
            devices or breeders, only when you explicitly link them.
          </li>
        </ul>

        <h2 id="how-we-use">3. How we use information</h2>
        <p>We process data to:</p>
        <ol>
          <li>Deliver core functionality and personalize the experience.</li>
          <li>Provide optional insights, alerts, and shared logs.</li>
          <li>Maintain security, prevent abuse, and debug issues.</li>
          <li>Communicate product updates, invitations, and support responses.</li>
        </ol>

        <h2 id="legal-bases">4. Legal bases (EEA/UK)</h2>
        <p>
          Depending on the jurisdiction, we rely on consent (for optional data),
          contract necessity (to run the app), legitimate interest (to keep the
          service secure), and compliance with legal obligations.
        </p>

        <h2 id="sharing">5. How we share data</h2>
        <p>
          We never sell personal data. We only share information with:
        </p>
        <ul>
          <li>
            <strong>Service providers</strong> that help us operate (cloud
            hosting, analytics, email) under strict agreements.
          </li>
          <li>
            <strong>Care collaborators</strong> you invite, such as breeders,
            vets, or co-owners—with controls over what they can view.
          </li>
          <li>Authorities, if required by law or to protect safety.</li>
        </ul>

        <h2 id="retention">6. Retention and deletion</h2>
        <p>
          We retain data as long as your PetSociety account is active or as needed
          to provide services. You can request deletion at any time via the app
          settings or by emailing{" "}
          <a href={`mailto:${brand.company.contactEmail}`}>
            {brand.company.contactEmail}
          </a>
          .
        </p>

        <h2 id="security">7. Security</h2>
        <p>
          PetSociety uses encryption in transit, segregated infrastructure, role
          based access controls, and regular audits. No platform can guarantee
          absolute security, but we work to minimize risk.
        </p>

        <h2 id="rights">8. Your rights</h2>
        <p>
          Depending on local laws you may request access, correction, deletion,
          restriction, portability, or withdrawal of consent. Submit requests in
          the app or email us and we will respond within legally required
          timelines.
        </p>

        <h2 id="children">9. Children</h2>
        <p>
          PetSociety is intended for users 16+ (or the applicable age of digital
          consent). We do not knowingly collect personal data from children
          without verified guardian approval.
        </p>

        <h2 id="updates">10. Policy updates</h2>
        <p>
          We may update this policy as PetSociety evolves. We will update the “Last
          updated” date and notify you of material changes.
        </p>

        <h2 id="contact">11. Contact us</h2>
        <p>
          Questions about privacy? Reach us at{" "}
          <a href={`mailto:${brand.company.contactEmail}`}>
            {brand.company.contactEmail}
          </a>{" "}
          or by mail at Neothone Labs Inc., Portland, OR.
        </p>
      </LegalShell>
    </>
  );
}
