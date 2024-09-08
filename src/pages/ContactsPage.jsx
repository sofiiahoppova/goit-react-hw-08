import ContactForm from "../components/ContactForm/ContactForm";
import ContactList from "../components/ContactList/ContactList";
import SearchBox from "../components/SearchBox/SearchBox";

const ContactsPage = () => {
  return (
    <div>
      <h1>ContactsPage</h1>
      <ContactForm />
      <SearchBox />
      {/* {isLoading && <Loader />}
      {isError && <ErrorMessage />} */}
      <ContactList />
    </div>
  );
};

export default ContactsPage;
