import { getBookById } from '@/app/lib/fake-data';
import BookDetails from '@/app/components/books/BookDetails';

const BookDetailsPage = ({ params: { id } }) => {
  const book = getBookById(id);
  return <BookDetails book={book} />;
};

export default BookDetailsPage;
