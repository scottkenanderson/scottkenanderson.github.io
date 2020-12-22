const About = () => (
  <div>Not much to say about me yet...</div>
);

export async function getStaticProps() {
  return {
    props: {
      pageTitle: 'About',
    },
  };
}

export default About;
