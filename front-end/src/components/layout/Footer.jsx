const Footer = () => {
  return (
    <footer className="bg-slate-900 text-white text-center py-6 mt-10">
      <p>© {new Date().getFullYear()} KariGo. All rights reserved.</p>
      <p className="text-sm text-slate-400 mt-1">
        Built with ❤️ using React & Node.js
      </p>
    </footer>
  );
};

export default Footer;