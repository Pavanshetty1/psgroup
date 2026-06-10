import "./PrivacyPolicy.css";

function RefundPolicy() {
  return (
    <div className="policy-page">
      <div className="policy-hero">
        <span className="policy-label">Legal Information</span>
        <h1>Refund & Cancellation Policy</h1>
        <p className="policy-date">Last Updated: June 2026</p>
      </div>

      <div className="policy-container">
        <h2>Service Cancellation</h2>
        <p>
          Requests for cancellation of services must be made prior to the
          commencement of the agreed service schedule. Once a service has
          commenced, cancellation requests may not be accepted.
        </p>

        <h2>Refund Eligibility</h2>
        <p>
          Refunds may be considered only in cases where a payment has been
          made in error, duplicated, or where PS Group is unable to provide
          the agreed service for reasons solely attributable to the company.
        </p>

        <h2>Non-Refundable Services</h2>
        <p>
          Payments made for completed services, consultations, inspections,
          project work, or other services already rendered are generally
          non-refundable.
        </p>

        <h2>Refund Processing</h2>
        <p>
          Approved refunds will be processed through the original payment
          method wherever possible. Processing times may vary depending on
          banking institutions and payment providers.
        </p>

        <h2>Dispute Resolution</h2>
        <p>
          Any concerns regarding billing, cancellations, or refund requests
          should be communicated to PS Group through the Contact Us page. We
          will make reasonable efforts to address and resolve concerns in a
          timely manner.
        </p>

        <h2>Policy Updates</h2>
        <p>
          PS Group reserves the right to revise this Refund & Cancellation
          Policy at any time. Updated policies will be published on this
          website.
        </p>
      </div>
    </div>
  );
}

export default RefundPolicy;