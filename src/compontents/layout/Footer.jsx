function Footer() {
  const footerYear = new Date().getFullYear();
  return (
    <footer className="footer p-10 bg-neutral text-primary-content footer-center">
      <div>
        <p className="text-xl text-gray-50">Copyright &copy; {footerYear}</p>
      </div>
    </footer>
  );
}

export default Footer;
