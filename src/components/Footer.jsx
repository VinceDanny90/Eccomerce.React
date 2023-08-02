function Footer(){
  return (
    <footer className="bg-gray-800 text-white p-6">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
          <div>
            <h3 className="text-lg font-semibold mb-2">Informazioni</h3>
            <ul className="text-sm">
              <li className="mb-2">Chi siamo</li>
              <li className="mb-2">Contatti</li>
              <li className="mb-2">Termini e condizioni</li>
              <li className="mb-2">Privacy Policy</li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-2">Assistenza</h3>
            <ul className="text-sm">
              <li className="mb-2">Domande frequenti</li>
              <li className="mb-2">Spedizioni</li>
              <li className="mb-2">Resi e rimborsi</li>
            </ul>
          </div>
          <div className="hidden sm:block">
            <h3 className="text-lg font-semibold mb-2">Social</h3>
            <ul className="text-sm">
              <li className="mb-2">Facebook</li>
              <li className="mb-2">Instagram</li>
              <li className="mb-2">Twitter</li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-2">Contatti</h3>
            <p className="text-sm">Via dell'esempio, 12345 Città</p>
            <p className="text-sm">Telefono: 0123456789</p>
            <p className="text-sm">Email: info@example.com</p>
          </div>
        </div>
        <hr className="my-4 border-gray-700" />
        <p className="text-sm text-center">© {new Date().getFullYear()} Il Tuo E-commerce. Tutti i diritti riservati.</p>
      </div>
    </footer>
  );
};

export default Footer;
