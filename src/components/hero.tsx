export default function Hero(props: { children: React.ReactNode }) {
  return (
    <section className="bg-neutral-200 py-32 text-neutral-700 lg:py-48 xl:py-64">
      <div className="container mx-auto flex items-center justify-around">
        {props.children}
      </div>
    </section>
  );
}
