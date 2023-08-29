const width = screen.width;

const Main = () => {
  return (
    <section className="main">
      {width < 1200 ? (
        <h1>Make remote work</h1>
      ) : (
        <h1>
          Make
          <br />
          remote work
        </h1>
      )}
      <p>
        Get your team in sync, no matter your location. Streamline processes,
        create team rituals, and watch productivity soar.
      </p>
      <button>Learn more</button>
    </section>
  );
};

export default Main;
