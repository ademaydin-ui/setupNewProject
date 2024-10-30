import SearchForm from "../../components/SearchForm";

export default async function Home({
  searchParams,
}: {
  searchParams: Promise<{ query?: string }>;
}) {
  const query = (await searchParams).query;

  return (
    <>
      <section className="pink_container">
        <h1 className="heading">
          Pitchen Sie Ihr Startup, <br /> vernetzen Sie sich mit Unternehmern
        </h1>

        <p className="sub-heading !max-w-3xl">
          Reichen Sie Ideen ein, stimmen Sie über Pitches ab und machen Sie in
          virtuellen Wettbewerben auf sich aufmerksam.
        </p>
        <SearchForm query={query} />
      </section>
    </>
  );
}
