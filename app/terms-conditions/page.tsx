"use client";

import { useEffect } from "react";
import Container from "@/components/Container";

export default function TermsConditions() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="w-full overflow-hidden">
      {/* Hero Section */}
      <div className="w-full h-[40vh] bg-gradient-to-r from-blue-900 to-blue-700 flex justify-center items-center">
        <div className="text-center text-white">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            Terms & Conditions
          </h1>
          <p className="text-xl md:text-2xl opacity-90">
            Effective date: June 2025
          </p>
        </div>
      </div>

      {/* Content Section */}
      <Container>
        <div className="py-16">
          <div className="max-w-4xl mx-auto prose prose-lg">
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                1. Acceptance of Terms
              </h2>
              <p className="text-gray-700 leading-relaxed">
                By accessing or using broadindia.com, you agree to these terms.
                Please do not use the Site if you disagree.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                2. Use License
              </h2>
              <div className="bg-gray-50 p-6 rounded-lg space-y-4">
                <div className="flex items-start">
                  <span className="text-blue-600 mr-3 mt-1">✓</span>
                  <p className="text-gray-700">
                    You may view and download content for personal or internal
                    business use only.
                  </p>
                </div>
                <div className="flex items-start">
                  <span className="text-red-600 mr-3 mt-1">✗</span>
                  <p className="text-gray-700">
                    You must not republish, modify, rent, sell, or exploit any
                    site content.
                  </p>
                </div>
              </div>
            </section>

            <section className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                3. User Responsibilities
              </h2>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">•</span>
                  Provide accurate information in forms.
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">•</span>
                  Keep login/access credentials secure if provided.
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">•</span>
                  No misuse of the site or intent to disrupt services.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                4. Intellectual Property
              </h2>
              <p className="text-gray-700 leading-relaxed">
                All site content—including text, graphics, logos, and
                software—is owned by BROAD (or used under license) and protected
                by copyright and trademark laws.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                5. Third-Party Links
              </h2>
              <p className="text-gray-700 leading-relaxed">
                We may link to external sites. We are not responsible for their
                content or privacy practices.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                6. Disclaimers & Liability
              </h2>
              <div className="space-y-4">
                <div className="bg-yellow-50 p-6 rounded-lg border-l-4 border-yellow-400">
                  <p className="text-gray-700">
                    The site and its content are provided &quot;as is&quot;
                    without warranties of any kind.
                  </p>
                </div>
                <div className="bg-orange-50 p-6 rounded-lg border-l-4 border-orange-400">
                  <p className="text-gray-700">
                    BROAD disclaims liability for any loss or damage arising
                    from use.
                  </p>
                </div>
                <div className="bg-red-50 p-6 rounded-lg border-l-4 border-red-400">
                  <p className="text-gray-700">
                    To the full extent permissible under law, BROAD&apos;s
                    maximum liability is limited to actual amounts paid, if any.
                  </p>
                </div>
              </div>
            </section>

            <section className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                7. Indemnification
              </h2>
              <p className="text-gray-700 leading-relaxed">
                You agree to indemnify BROAD and its affiliates against any
                claims arising from your misuse or violation of these Terms.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                8. Governing Law
              </h2>
              <p className="text-gray-700 leading-relaxed">
                These terms are governed by Indian law. Disputes fall under
                courts in Mohali, Punjab.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                9. Changes to Terms
              </h2>
              <p className="text-gray-700 leading-relaxed">
                We may update these Terms. Continued use of the site after
                changes constitutes acceptance.
              </p>
            </section>
          </div>
        </div>
      </Container>
    </div>
  );
}
