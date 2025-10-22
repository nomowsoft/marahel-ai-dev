import { getServices } from "@/utils/data_services/data_ai";
import ServiceHero from "../service_hero";
import ServiceFeature from "../service_feature";
import ServiceMethod from "../service_method";
import ServiceDeliverablesOutcomes from "../service_deliverables_outcomes";
import ServiceProgram from "../service_program";
import ServiceSecurity from "../service_security";


interface PageProps {
  params: Promise<{ id: string }>;
}

export default async function SingleServicePage({ params }: PageProps) {
  const { id } = await params;
  const numericId = Number(id);

  const services = getServices((k: string) => k);
  const foundservice = services.find((p) => p.id === numericId);

  if (!foundservice) {
    return (
      <section className="text-center text-red-500 py-20">
        <p>Product not found.</p>
      </section>
    );
  }

  return (
    <section>
      <ServiceHero service={foundservice} />
      <ServiceFeature service={foundservice} />
      <ServiceMethod service={foundservice} />
      <ServiceDeliverablesOutcomes service={foundservice} />
      <ServiceProgram service={foundservice} />
      <ServiceSecurity service={foundservice} />
    </section>
  );
}
