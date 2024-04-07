import SideBar from '../components/sidebar/SideBar';
import StoreProvider from '../provider';

export const metadata = {
  title: 'iwestore - buy or rent books',
  description: 'An online bookstore to sell books or rent books.',
};

export default function BookStoreLayout({ children }) {
  return (
    <StoreProvider>
      <div className="flex xs:flex-col sm:flex-col md:flex-row lg:flex-row xl:flex-row min-h-screen">
        <SideBar />
        <div className="flex flex-wrap p-2 justify-center">{children}</div>
      </div>
    </StoreProvider>
  );
}
