import type { Metadata } from "next";
import { LegalNav, LegalShell } from "../../../components/Legal";
import { brand } from "../../../lib/brand";

const petSocietyConfig = brand.product.petSociety;
const CONTACT_EMAIL =
  petSocietyConfig.supportEmail ?? brand.company.contactEmail;

export const metadata: Metadata = {
  title: "PetSociety Privacy Policy",
  description:
    "Understand how PetSociety collects, stores, and protects your information across profiles, discovery feeds, requests, and messaging.",
};

export default function PrivacyPage() {
  return (
    <>
      <LegalNav />
      <LegalShell
        title="PetSociety Privacy Policy"
        subtitle="PetSociety safeguards pet parents, moderators, and partners with transparent, choice-driven practices."
      >
        <h2 id="scope">1. Who this covers</h2>
        <p>
          This policy applies to the PetSociety mobile app, web experiences, and
          related services operated by the Neothone engineering team. It
          explains how we collect, use, and share information from pet families,
          caregivers, and professional partners who rely on our platform.
        </p>

        <h2 id="data-we-collect">2. Data we collect</h2>
        <ul>
          <li>
            <strong>Account basics</strong>: name, email, and encrypted
            authentication credentials.
          </li>
          <li>
            <strong>Identity signals</strong>: OAuth provider tokens (Google or
            Apple), verification codes, and device signatures that keep accounts
            spam-free.
          </li>
          <li>
            <strong>Pet profiles</strong>: companion names, type details,
            birthdates, medical notes, and routine logs that you willingly
            provide.
          </li>
          <li>
            <strong>Media & attachments</strong>: photos, videos, and message
            uploads stored in cloud containers scoped to users, pets,
            achievements, posts, and conversations.
          </li>
          <li>
            <strong>Usage signals</strong>: device type, in-app interactions,
            and diagnostic events that help us improve performance.
          </li>
          <li>
            <strong>Optional telemetry</strong>: wellness data from connected
            devices or trusted care partners, only when you explicitly link
            them.
          </li>
          <li>
            <strong>Location & discovery preferences</strong>: radius,
            interaction history, match intent, and filters that power swipe
            decks and search results.
          </li>
        </ul>

        <h2 id="how-we-use">3. How we use information</h2>
        <p>We process data to:</p>
        <ol>
          <li>
            Deliver profile storytelling, swipe discovery, matchmaking,
            messaging, and community features tailored to your preferences.
          </li>
          <li>
            Provide optional insights, alerts, streaks, and shared logs for your
            trusted care circle.
          </li>
          <li>
            Communicate product updates, safety notices, invitations, and
            support responses.
          </li>
        </ol>

        <h2 id="legal-bases">4. Legal bases (EEA/UK)</h2>
        <p>
          Depending on the jurisdiction, we rely on consent (for optional data),
          contract necessity (to run the app), legitimate interest (to keep the
          service secure), and compliance with legal obligations.
        </p>

        <h2 id="sharing">5. How we share data</h2>
        <p>We never sell personal data. We only share information with:</p>
        <ul>
          <li>
            <strong>Service providers</strong> that help us operate (cloud
            hosting, analytics, email) under strict agreements.
          </li>
          <li>
            <strong>Care collaborators</strong> you invite, such as vets,
            sitters, or co-owners—with controls over what they can view.
          </li>
          <li>Authorities, if required by law or to protect safety.</li>
        </ul>

        <p>
          If you spot suspicious posts, pets, or users, use the in-app report
          tools so the trust & safety team can act quickly and keep the match
          pals space playful and safe.
        </p>

        <h2 id="retention">6. Retention and deletion</h2>
        <p>
          We retain data as long as your PetSociety account is active or as
          needed to provide services. Cloud media and backups are purged when
          deletion workflows complete. You can request deletion at any time via
          the app settings or by emailing {""}
          <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>.
        </p>

        <h2 id="security">7. Security</h2>
        <p>
          PetSociety uses encryption in transit, cloud encryption at rest,
          segregated infrastructure, role-based access controls, JWT filters,
          Bucket4J rate limiting, and an app-signature gateway to protect mobile
          clients. No platform can guarantee absolute security, but we work to
          minimize risk.
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
          We may update this policy as PetSociety evolves. We will update the
          “Last updated” date and notify you of material changes.
        </p>

        <h2 id="contact">11. Contact us</h2>
        <p>
          Questions about privacy? Reach the PetSociety privacy lead at {""}
          <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>.
        </p>
      </LegalShell>
    </>
  );
}
