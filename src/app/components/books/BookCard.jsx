import Image from 'next/image';
const BookCard = ({ book }) => {
  return (
    <div className="flex flex-col items-center rounded-xl bg-gray-50 p-2 m-2 shadow-sm">
      <div className="mb-2 h-13">
        <Image
          className="mr-2 rounded-md"
          src={book.cover}
          alt={book.title}
          width={150}
          height={100}
          style={{ height: '200px', width: 'auto' }}
          priority={true}
        />
      </div>
      {book.title}
    </div>
  );
};

export default BookCard;
