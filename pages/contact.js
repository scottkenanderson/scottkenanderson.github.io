const Contact = () => (
  <div>No contact details either...</div>
);

export async function getStaticProps() {
  return {
    props: {
      pageTitle: 'Contact',
    },
  };
}

export default Contact;
