export default function Hero(props: { children: React.ReactNode }) {
  return (
    <section
      className="py-16 tracking-tighter lg:tracking-tight md:py-24 lg:py-32"
      un-bg="n"
      un-text="p"
    >
      <div className="container flex items-center justify-between p-2 mx-auto">
        {props.children}
      </div>
    </section>
  );
}
