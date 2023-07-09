export default function Hero(props: { children: React.ReactNode }) {
  return (
    <section className="py-16 bg-neutral-200 text-neutral-700 lg:py-32 xl:py-48">
      <div className="container flex items-center justify-between mx-auto">
        {props.children}
      </div>
    </section>
  );
}
