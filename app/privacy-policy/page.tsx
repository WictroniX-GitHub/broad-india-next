import { Metadata } from "next";
import LegalLayout from "@/components/ds/LegalLayout";

export const metadata: Metadata = {
  title: "Privacy Policy - BROAD India | Data Protection & Privacy",
  description:
    "Read BROAD India's privacy policy to understand how we collect, use, and protect your personal information. Our commitment to data privacy and security.",
  keywords: [
    "privacy policy",
    "data protection",
    "privacy rights",
    "BROAD India privacy",
    "data security",
    "personal information",
    "privacy statement",
  ],
  openGraph: {
    title: "Privacy Policy - BROAD India | Data Protection & Privacy",
    description:
      "Read BROAD India's privacy policy to understand how we collect, use, and protect your personal information.",
    type: "website",
    locale: "en_IN",
  },
  robots: {
    index: false,
    follow: true,
  },
};

const TOC = [
  { id: "introduction", title: "1. Introduction" },
  { id: "data-we-collect", title: "2. Data We Collect" },
  { id: "purpose-of-collection", title: "3. Purpose of Collection" },
  { id: "data-sharing", title: "4. Data Sharing" },
  { id: "international-transfers", title: "5. International Transfers" },
  { id: "security-measures", title: "6. Security Measures" },
  { id: "retention-policy", title: "7. Retention Policy" },
  { id: "your-rights", title: "8. Your Rights" },
  { id: "updates-to-policy", title: "9. Updates to Policy" },
];

export default function PrivacyPolicy() {
  return (
    <LegalLayout title="Privacy Policy" updated="Last updated: June 2025" toc={TOC}>
            <section className="mb-12">
              <h2 id="introduction" className="text-3xl font-bold text-gray-900 mb-6">
                1. Introduction
              </h2>
              <p className="text-gray-700 leading-relaxed">
                BROAD India (&quot;we,&quot; &quot;us,&quot; &quot;our&quot;) is
                committed to protecting the privacy of visitors to{" "}
                <a
                  href="https://broadindia.com"
                  className="text-blue-600 hover:text-blue-800"
                >
                  broadindia.com
                </a>{" "}
                (the &quot;Site&quot;). This Privacy Policy explains how we
                collect, use, and safeguard your personal data.
              </p>
            </section>

            <section className="mb-12">
              <h2 id="data-we-collect" className="text-3xl font-bold text-gray-900 mb-6">
                2. Data We Collect
              </h2>
              <div className="space-y-4">
                <div className="bg-blue-50 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    Information you provide:
                  </h3>
                  <p className="text-gray-700">
                    Name, email, company, phone, request details when filling
                    forms.
                  </p>
                </div>

                <div className="bg-green-50 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    Automatically collected data:
                  </h3>
                  <p className="text-gray-700">
                    IP address, browser details, device type, and browsing
                    activities.
                  </p>
                </div>

                <div className="bg-yellow-50 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    Cookies & analytics:
                  </h3>
                  <p className="text-gray-700">
                    We use cookies and tools like Google Analytics to improve
                    user experience.
                  </p>
                </div>
              </div>
            </section>

            <section className="mb-12">
              <h2 id="purpose-of-collection" className="text-3xl font-bold text-gray-900 mb-6">
                3. Purpose of Collection
              </h2>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">•</span>
                  Respond to your inquiries, quotes, download requests.
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">•</span>
                  Improve site performance, personalization, and
                  troubleshooting.
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">•</span>
                  Maintain security, detect fraud or misuse.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 id="data-sharing" className="text-3xl font-bold text-gray-900 mb-6">
                4. Data Sharing
              </h2>
              <p className="text-gray-700 leading-relaxed">
                We do not sell or rent your data. We may share with trusted
                third-party processors (e.g., form hosts, analytics providers)
                under confidentiality and security agreements.
              </p>
            </section>

            <section className="mb-12">
              <h2 id="international-transfers" className="text-3xl font-bold text-gray-900 mb-6">
                5. International Transfers
              </h2>
              <p className="text-gray-700 leading-relaxed">
                Your personal data may be transferred to trusted BROAD
                subsidiaries (e.g., China/USA) for global support, always under
                secure protocols compliant with data transfer regulations.
              </p>
            </section>

            <section className="mb-12">
              <h2 id="security-measures" className="text-3xl font-bold text-gray-900 mb-6">
                6. Security Measures
              </h2>
              <p className="text-gray-700 leading-relaxed">
                Encryption for data in transit (SSL), access controls, and
                periodic audits. However, no system is 100% secure; we use best
                practices industry-wide.
              </p>
            </section>

            <section className="mb-12">
              <h2 id="retention-policy" className="text-3xl font-bold text-gray-900 mb-6">
                7. Retention Policy
              </h2>
              <p className="text-gray-700 leading-relaxed">
                We keep personal data for as long as needed to fulfill your
                requests and meet legal obligations (up to 3 years generally).
              </p>
            </section>

            <section className="mb-12">
              <h2 id="your-rights" className="text-3xl font-bold text-gray-900 mb-6">
                8. Your Rights
              </h2>
              <p className="text-gray-700 leading-relaxed">
                You may request access, correction, deletion, or restrict
                processing at any time. Contact us via{" "}
                <a
                  href="mailto:akshay@broad.net"
                  className="text-blue-600 hover:text-blue-800"
                >
                  akshay@broad.net
                </a>{" "}
                to exercise your rights.
              </p>
            </section>

            <section className="mb-12">
              <h2 id="updates-to-policy" className="text-3xl font-bold text-gray-900 mb-6">
                9. Updates to Policy
              </h2>
              <p className="text-gray-700 leading-relaxed">
                We may revise this policy at any time; changes will be posted
                here with an updated &quot;Last updated&quot; date. Continued
                use implies acceptance.
              </p>
            </section>
    </LegalLayout>
  );
}
