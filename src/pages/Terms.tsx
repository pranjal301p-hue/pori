import { Helmet } from 'react-helmet-async';
import { BRAND } from '../constants';

export default function Terms() {
  return (
    <>
      <Helmet>
        <title>Terms & Conditions | {BRAND.name}</title>
      </Helmet>
      <section className="py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold mb-12">Terms & Conditions</h1>
          <div className="prose prose-invert max-w-none space-y-8 text-white/70">
            <p>Last updated: April 03, 2026</p>
            
            <section>
              <h2 className="text-2xl font-bold text-white mb-4">1. Agreement to Terms</h2>
              <p>These Terms of Use constitute a legally binding agreement made between you, whether personally or on behalf of an entity and {BRAND.name}, concerning your access to and use of our website.</p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">2. Intellectual Property Rights</h2>
              <p>Unless otherwise indicated, the Website is our proprietary property and all source code, databases, functionality, software, website designs, audio, video, text, photographs, and graphics on the Website are owned or controlled by us or licensed to us.</p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">3. User Representations</h2>
              <p>By using the Website, you represent and warrant that: (1) all registration information you submit will be true, accurate, current, and complete; (2) you will maintain the accuracy of such information and promptly update such registration information as necessary.</p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">4. Contact Us</h2>
              <p>In order to resolve a complaint regarding the Website or to receive further information regarding use of the Website, please contact us at {BRAND.email}.</p>
            </section>
          </div>
        </div>
      </section>
    </>
  );
}
