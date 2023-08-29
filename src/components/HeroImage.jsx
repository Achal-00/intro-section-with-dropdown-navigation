const HeroImage = () => {
  const width = screen.width;
  if (width < 1200) {
    return (
      <section className="hero-image-holder">
        <img src="image-hero-mobile.png" alt="hero image" />
      </section>
    );
  } else {
    return (
      <section className="desk-hero-image-holder">
        <img src="image-hero-desktop.png" alt="hero image" />
      </section>
    );
  }
};

export default HeroImage;
