import { useParams } from "react-router-dom";
import { policies } from "../data/policyData";

const PolicyDetails = () => {
  const { id } = useParams();
  const policy = policies.find((p) => p.id === id);

  if (!policy) return <h1>Not Found</h1>;

  return (
    <div className="bg-[#F8FAFC] min-h-screen py-6 px-4">

      <div className="max-w-4xl mx-auto space-y-5">

        {/* TITLE */}
        <h1 className="text-2xl font-bold">
          {policy.title}
        </h1>

        {/* SUMMARY */}
        <div className="bg-white p-4 rounded-xl shadow-sm">
          <p className="text-sm text-gray-600">
            {policy.description}
          </p>
        </div>

        {/* BENEFITS */}
        <div className="bg-white p-4 rounded-xl shadow-sm">
          <h3 className="font-semibold mb-2">Benefits</h3>
          <ul className="list-disc ml-5 text-sm">
            {policy.benefits.map((b, i) => (
              <li key={i}>{b}</li>
            ))}
          </ul>
        </div>

        {/* ELIGIBILITY */}
        <div className="bg-white p-4 rounded-xl shadow-sm">
          <h3 className="font-semibold mb-2">Eligibility</h3>
          <p className="text-sm">{policy.eligibility}</p>
        </div>

        {/* STEPS */}
        <div className="bg-white p-4 rounded-xl shadow-sm">
          <h3 className="font-semibold mb-2">How to Apply</h3>
          <ol className="list-decimal ml-5 text-sm">
            {policy.steps.map((s, i) => (
              <li key={i}>{s}</li>
            ))}
          </ol>
        </div>

        {/* ACTION */}
        <div className="flex gap-3">
          <a
            href={policy.officialLink}
            target="_blank"
            className="bg-green-500 text-white px-4 py-2 rounded-lg"
          >
            Visit Official Website
          </a>

          <a
            href={`tel:${policy.contact}`}
            className="border px-4 py-2 rounded-lg"
          >
            Call Support
          </a>
        </div>

      </div>
    </div>
  );
};

export default PolicyDetails;